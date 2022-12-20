import LandingLottery from "../components/LandingLottery";
import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
// import getRandomImage from "../utils/getRandomImage";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Alert from "../components/Alert";
import { Web3Storage } from "web3.storage";
// import { useRouter } from "next/router";
import Link from "next/link";

import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../constants";

export default function Home() {
  const { data: account } = useAccount();

  const { Moralis, chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const lotteryAddress =
    chainIdHex in contractAddresses ? contractAddresses[chainId][0] : null;

  const [entranceFee, setEntranceFee] = useState("0");
  const [numberOfPlayers, setNumberOfPlayers] = useState("0");
  const [recentWinner, setRecentWinner] = useState("0");
  const [loading, setLoading] = useState(false);

  // const dispatch = useNotification();

  const {
    runContractFunction: enterRaffle,
    data: enterTxResponse,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: lotteryAddress,
    functionName: "enterLottery",
    msgValue: entranceFee,
    params: {},
  });

  /* View Functions */

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: lotteryAddress, // specify the networkId
    functionName: "getEntranceFee",
    params: {},
  });

  const { runContractFunction: getPlayersNumber } = useWeb3Contract({
    abi: abi,
    contractAddress: lotteryAddress,
    functionName: "getNumberOfPlayers",
    params: {},
  });

  const { runContractFunction: getRecentWinner } = useWeb3Contract({
    abi: abi,
    contractAddress: lotteryAddress,
    functionName: "getRecentWinner",
    params: {},
  });

  async function updateUIValues() {
    // Another way we could make a contract call:
    // const options = { abi, contractAddress: raffleAddress }
    // const fee = await Moralis.executeFunction({
    //     functionName: "getEntranceFee",
    //     ...options,
    // })
    const entranceFeeFromCall = (await getEntranceFee()).toString();
    const numPlayersFromCall = (await getPlayersNumber()).toString();
    const recentWinnerFromCall = await getRecentWinner();
    setEntranceFee(entranceFeeFromCall);
    setNumberOfPlayers(numPlayersFromCall);
    setRecentWinner(recentWinnerFromCall);
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUIValues();
    }
  }, [isWeb3Enabled]);

  // const handleNewNotification = () => {
  //   dispatch({
  //     type: "info",
  //     message: "Transaction Complete!",
  //     title: "Transaction Notification",
  //     position: "topR",
  //     icon: "bell",
  //   });
  // };

  // const handleSuccess = async (tx) => {
  //   try {
  //     await tx.wait(1);
  //     updateUIValues();
  //     handleNewNotification(tx);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (loading)
    return (
      <LandingLottery>
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LandingLottery>
    );
  if (error)
    return (
      <LandingLottery>
        <p>`Error! ${error.message}`</p>
      </LandingLottery>
    );

  return (
    <LandingLottery>
      <section className="relative py-4"

        {!account && (
          <section className="flex flex-col items-center p-6 mx-auto border w-1/3 text-center">
            <p className="mb-4 text-sm font-light">
              Please connect your wallet to add a task. If you have not yet
              registered, please register here first.
            </p>
            <ConnectButton />
          </section>
        )}
        {account && !success && (
          <form
            onSubmit={handleSubmit}
            className="space-y-8 divide-y divide-gray-200"
          >
            <div className="space-y-6 sm:space-y-5 border-2 w-3/5 py-8 mx-auto">
              {/* <div className="sm:grid  sm:gap-4 sm:items-start sm:pt-5"> */}
              <label
                htmlFor="task"
                className="block text-2xl font-bold text-gray-700 sm:mt-px sm:pt-2 text-center"
              >
                Add a Task{" "}
                <p className="mt-1 mx-auto px-4 lg:px-36 text-sm text-gray-400 font-light">
                  Add a task that you have been procrastinating about
                  completing, as well as an amount and time. Not sure how this
                  works? Click{" "}
                  <a href="#" className="underline">
                    here
                  </a>
                  .
                </p>
              </label>

              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="task"
                  name="task"
                  type="text"
                  className="block w-3/5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mx-auto my-4"
                  required
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="e.g. Write a blog about 10 tips for branding..."
                />
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  className="block w-3/5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mx-auto my-4"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Minimum 1 MATIC"
                />
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  className="block w-3/5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mx-auto my-2"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Write time in minutes - e.g. 20"
                />
                <div>
                  <p>Entrance Fee: {entranceFee}</p>
                </div>
                <div
                  className="flex justify-center
                  "
                >
                  {" "}
                  <button
                    type="submit"
                    className="ml-3 mt-4 inline-flex justify-center py-2 px-4 border-2 border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Get it done!
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {success && profileID && (
          <div>
            Success! Please wait a few minutes, then check out your event page{" "}
            <span className="font-bold">
              <Link href={`/profiles/${profileID}`}>here</Link>
            </span>
          </div>
        )}
      </section>

      {/* <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 py-12"
      >
        {filteredProfiles.map((profile) => (
          <li key={profile.id}>
            <ProfileCard
              id={profile.id}
              firstName={profile.firstName}
              // eventTimestamp={event.eventTimestamp}
              imageURL={profile.imageURL}
              // eventCost={event.cost}
              jobTitle={profile.jobTitle}
            />
          </li>
        ))}
      </ul> */}
    </LandingLottery>
  );
}

{
  /* <div className="flex justify-start pt-4 pb-6">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={searchInputHandler}
              value={searchText}
            />
          </div>
        </div>
      </div> */
}

// Up for grabs this week:

// Number of Entries:

// The last winner:

// Donate to the lottery this week:

// Pervious amount:

// Draw ends in 3 days

// const [success, setSuccess] = useState(null);
// const [message, setMessage] = useState(null);
// const [loading, setLoading] = useState(false);

// const [task, setTask] = useState("");
// // const [amount, setAmount] = useState("");
// // const [time, setTime] = useState("");
// // const [eventTime, setProfileTime] = useState("");

// const router = useRouter();

// async function handleSubmit(e) {
//   e.preventDefault();

//   const body = {
//     task: task,
//   };

//   try {
//     const buffer = Buffer.from(JSON.stringify(body));
//     const files = [new File([buffer], "data.json"), coverImage];
//     const client = makeStorageClient();
//     const cid = await client.put(files);
//     await createTask(cid);
//   } catch (error) {
//     alert(
//       `Oops! Something went wrong. Please refresh and try again. Error ${error}`
//     );
//   } finally {
//     setTask("");
//     setAmount("");
//     setTime("");
//   }

//   async function createTask(cid) {
//     try {
//       const lotteryContract = connectLotteryContract();

//       if (lotteryContract) {
//         let taskDataCID = cid;
//         //   let profileTimestamp = profileDateAndTime.getTime();
//         const txn = await lotteryContract.createNewTask(taskDataCID);
//         setLoading(true);
//         console.log("Minting...", txn.hash);
//         let wait = await txn.wait();
//         console.log("Minted -- ", txn.hash);

//         setProfileID(wait.profiles[0].args[0]);

//         setSuccess(true);
//         setLoading(false);
//         setMessage(
//           "Your task has been created successfully. Please note that it may take a few minutes to appear on the home page."
//         );
//         setTimeout(() => {
//           router.push("/");
//         }, 5000);
//       } else {
//         console.log("Error getting contract.");
//       }
//     } catch (error) {
//       setSuccess(false);
//       setMessage(`There was an error creating your task: ${error.message}`);
//       setLoading(false);
//       console.log(error);
//     }
//   }
//   console.log("Task submitted");
// }

// useEffect(() => {
//   // disable scroll on <input> elements of type number
//   document.addEventListener("wheel", (event) => {
//     if (document.activeElement.type === "number") {
//       document.activeElement.blur();
//     }
//   });
// });

// const LATEST_PROFILES = gql`
//   query Profiles {
//     profiles(where: { isDisabled: false }) {
//       id
//       firstName
//       jobTitle
//       imageURL
//     }
//   }
// `;

// function makeStorageClient() {
//   return new Web3Storage({
//     token: process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN,
//   });
// }
