import { useEffect, useState, useContext } from "react";
import { useAccount, useNetwork, useContract, useProvider } from "wagmi";
import { GiPartyPopper } from "react-icons/gi";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LotteryContext } from "../context/lottery";
import lotteryABI from "../constants/lotteryABI.json";
import { formatAddress } from "../utils/formatAddress";

const Layout = ({ children }) => {
  const { data: account } = useAccount();
  const { activeChain, switchNetwork } = useNetwork();
  const provider = useProvider();
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_LOTTERY_CONTRACT,
    contractInterface: lotteryABI,
    signerOrProvider: provider,
  });

  const {
    lotteryContract,
    setLotteryContract,
    lotteryState,
    setLotteryState,
    getLotteryState,
    listenLotteryEvents,
  } = useContext(LotteryContext);

  const [maticPrice, setMaticPrice] = useState(0);
  const [description, setDescription] = useState(
    "Please connect your Wallet at first!"
  );

  useEffect(() => {
    const getPrice = async () => {
      const res = await fetch("/api/getPrice", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const price = await res.json();
      setMaticPrice(price.USD);
    };

    getPrice();
  }, []);

  useEffect(() => {
    if (activeChain === undefined) toast.info("Please connect your wallet!");
    else if (activeChain.id !== 80001 && activeChain.id !== 137) {
      toast.warn("Please switch to Polygon network!");
      switchNetwork(80001);
    } else
      toast.success(`Your wallet is connected to ${activeChain.name} network!`);
  }, [activeChain]);

  useEffect(() => {
    if (contract && account && provider._network.chainId === 80001)
      setLotteryContract(contract);
    if (!account) {
      setLotteryContract(null);
      setLotteryState(null);
    }
  }, [account, contract, provider]);

  useEffect(() => {
    if (lotteryContract) {
      listenLotteryEvents();
      getLotteryState();
    }
  }, [lotteryContract]);

  useEffect(() => {
    console.log("lotteryState:", lotteryState);
    if (lotteryState) {
      if (lotteryState.recentWinners.length > 0) {
        let address = "";
        lotteryState.recentWinners.forEach((winner) => {
          address += formatAddress(winner) + ", ";
        });
        setDescription(
          `A huge congrats to last week's winner/s: ${address}(~USD ${(
            maticPrice * lotteryState.recentWinningAmounts[0]
          ).toFixed(2)} = ${Number(
            lotteryState.recentWinningAmounts[0]
          ).toFixed(2)} Matic each)`
        );
      } else
        setDescription(
          "Our first draw is coming up, add your tasks to get a ticket!"
        );
    } else setDescription("Please connect your wallet!");
  }, [lotteryState]);

  return (
    <div className="font-nunito flex flex-col min-h-screen font-light">
      <div className="mb-2 flex items-center justify-center text-center p-1 bg-blend-soft-light  bg-gradient-to-r from-[#7928ca] to-[#ff0080]">
        <h3 className="text-white text-sm ">{description}</h3>{" "}
        {/* {account.slice(0, 6)}...
                            {account.slice(account.length - 4)} */}
        <div className="text-white p-1">
          <GiPartyPopper size={"2em"} />
        </div>
      </div>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
