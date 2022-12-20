import Link from "next/link";
import React from "react";

const HowItworks = () => {
  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-coworkblue">
        <div className="px-4 py-12 mx-auto max-w-3xl sm:px-6 lg:px-8 start-here-btn">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-coworkdarkbeige sm:text-5xl xl:text-6xl font-nunito">
              How it works
            </h2>
            <p className="max-w-lg mx-auto mt-6 text-lg font-normal text-gray-200">
              This is how you can take part in the Online CoWork Lottery:
            </p>
          </div>

          <div className="max-w-xl mx-auto mt-12 sm:px-10">
            <div className="relative pb-10 box-shadow-n">
              <span
                className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
                aria-hidden="true"
              ></span>

              <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl start-here-btn">
                <div className="flex items-start sm:items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-nunito">
                    1
                  </div>
                  <p className="ml-6 text-xl font-light text-gray-900 ">
                    Create your profile and wait for your approval email
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pb-10 box-shadow-n">
              <span
                className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
                aria-hidden="true"
              ></span>

              <div className="absolute -mt-10 inset-y-8 -inset-x-1">
                <div
                  className="w-full h-full mx-auto opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>

              <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="flex items-start sm:items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-nunito">
                    2
                  </div>
                  <p className="ml-6 text-xl font-light text-gray-900 font-nunito">
                    Add your first task to the lottery! Add a{" "}
                    <strong className="underline">business/work&nbsp;</strong>{" "}
                    task that you are wanting to complete. You can add 1 task a
                    week or 10 tasks a day, it&apos;s up to you!
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pb-10 box-shadow-n">
              <span
                className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
                aria-hidden="true"
              ></span>

              <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="flex items-start sm:items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-nunito">
                    3
                  </div>
                  <p className="ml-6 text-xl font-light text-gray-900 ">
                    Pay an amount of money (in MATIC coins) that you feel will
                    give you that extra bit of motivation to get your task done.
                    (Minimum 1 MATIC - approx. 1 USD).
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pb-10 box-shadow-n">
              <span
                className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
                aria-hidden="true"
              ></span>

              <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="flex items-start sm:items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-nunito">
                    4
                  </div>
                  <p className="ml-6 text-xl font-light text-gray-900 ">
                    Every 1 MATIC that you add is added to the lottery prize
                    pool* and buys you 1 ticket to win! <br />
                    <br />
                    <span className="italic">
                      (So if you add 10 MATIC for 1 task, that gives you 10
                      entries for that week&apos;s draw! Please note that you
                      will not get this money back as it makes up the lottery
                      prize pool!)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pb-10 box-shadow-n">
              <span
                className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
                aria-hidden="true"
              ></span>

              <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="flex items-start sm:items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-nunito">
                    5
                  </div>
                  <p className="ml-6 text-xl font-light text-gray-900 ">
                    Get your task done and dusted! Don&apos;t miss this
                    opportunity to take your business/life to the next level!
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pb-10 box-shadow-n">
              <span
                className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
                aria-hidden="true"
              ></span>

              <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="flex items-start sm:items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-nunito">
                    6
                  </div>
                  <p className="ml-6 text-xl font-light text-gray-900 ">
                    Keep an eye on the lottery home page to check if you&apos;ve
                    won that lottery prize pool for that week! 🥳
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pb-10 box-shadow-n">
              <span
                className="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
                aria-hidden="true"
              ></span>

              <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="flex items-start sm:items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-nunito">
                    7
                  </div>
                  <p className="ml-6 text-xl font-light text-gray-900 ">
                    If you win, you can withdraw the money from your wallet into
                    your bank account to use for your business expenses (or
                    whatever else you choose to use it for in order to help you
                    to move forwards in your life/business!)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative box-shadow-n">
              <div className="relative p-5 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="flex items-start sm:items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-xl font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-nunito">
                    8
                  </div>
                  <p className="ml-6 text-xl font-light text-gray-900 font-nunito">
                    Keep adding more tasks for more chances to win and get your
                    to-do list done and dusted!
                    <br />
                    <br />
                    Join our{" "}
                    <a
                      href="https://office.onlinecowork.com"
                      target="_blank"
                      className="underline"
                      rel="noreferrer"
                    >
                      free Discord community
                    </a>{" "}
                    to co-work with others via typing, voice or video! We have
                    almost 100 channels to connect with like-minded women from
                    around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="btn btn-primary">
        <Link href="/lottery" passHref>
          <a className="mx-50">Enter App</a>
        </Link>
      </div> */}
    </>
  );
};

export default HowItworks;
