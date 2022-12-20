import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Hero";
import HowItWorks from "../components/Howitworks";
import JoinCommunity from "../components/JoinCommunity";
import RightForMe from "../components/RightForMe";
import TaskExamples from "../components/TaskExamples";
import { useEffect, useContext } from "react";
import Feature from "../components/Feature";
import SEO from "../components/SEO";
import NoWallet from "../components/NoWallet";
import { ItemsContext } from "../context/items";
import { ProfilesContext } from "../context/profiles";
import { minifyItems, profileAirtable, taskAirtable } from "../utils/airtable";

const Home = ({ tasks, profiles }) => {
  const { setItems } = useContext(ItemsContext);
  const { setProfiles } = useContext(ProfilesContext);

  useEffect(() => {
    setItems(tasks);
    setProfiles(profiles);
  }, [tasks, setItems, profiles, setProfiles]);

  return (
    <div className="">
      <Head>
        <title>Online CoWork Lottery</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SEO>
        <section className="relative  bg-coworkblue  ">
          <Hero />
          <Feature />
          <TaskExamples />
          <RightForMe />
          <HowItWorks />
          <NoWallet />
          <JoinCommunity />
          <div className="sm:mx-auto w-full h-13 object-contain py-12 bg-coworkblue flex justify-center">
            <Image
              className="rounded-xl"
              src="/images/wbw3-logo.png"
              alt="Women Build Web3 Logo"
              width={400}
              height={230}
            />
            <hr />
          </div>
        </section>
      </SEO>
    </div>
  );
};

export default Home;

{
  /* <div className="absolute inset-0 hidden lg:block">
            <img
              className="object-cover object-top w-full h-full"
              src="./hero-image-waitlist.png"
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-semibold xl:tracking-wide leading-tight text-gray-900 sm:text-3xl xl:text-6xl sm:tracking-tight">
                The Online CoWork Lottery
                <br /> is coming SOON!
              </h1>
              <h2 className="text-2xl font-semibold tracking-wide sm:text23xl xl:text-2xl sm:tracking-tight mt-6 p-4 rounded-xl bg-white">
                Complete Your Tasks. Win Funding For Your Online Business.
              </h2>
              <p className="font-extralight max-w-xl mx-auto mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                Virtual assistants, Etsy sellers, online yoga instructors and
                more... for women around the world with online businesses. Join
                the waitlist to be notified of the launch! 🔥
              </p>
              <div className="flex flex-col items-center gap-5 mt-8">
                {isMounted && (
                  <button
                    onClick={() =>
                      // @ts-ignore

                      ml_account("webforms", "5806137", "v6a2z2", "show")
                    }
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-normal text-black transition-all duration-200 bg-white border border-coworkblue rounded-full hover:bg-coworkblue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkblue shadow-lg shadow-coworkblue font-nunito"
                  >
                    Join the waitlist&nbsp;
                    <AiOutlineArrowRight />
                  </button>
                )}
              </div>
            </div>

            <div className="-mt-16 sm:-mt-16 md:-mt-32 lg:hidden">
              <img
                className="object-cover object-top w-full h-full"
                src="./hero-mobile.png"
                alt=""
              />
            </div>
          </div>
        </section>
                </div*/
}

export async function getServerSideProps(context) {
  try {
    const items = await taskAirtable
      .select({
        // Selecting the first 20 records in Grid view:
        maxRecords: 20,
        view: "Grid view",
      })
      .firstPage();

    const profiles = await profileAirtable
      .select({
        // Selecting the first 50 records in Grid view:
        maxRecords: 50,
        view: "Grid view",
      })
      .all();

    return {
      props: {
        tasks: minifyItems(items),
        profiles: minifyItems(profiles),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        err: "Something went wrong 😕",
      },
    };
  }
}
