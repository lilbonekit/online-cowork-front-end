import React from "react";

import { BsFillLaptopFill, BsCardChecklist } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const RightForMe = () => {
  return (
    <section className="py-16 sm:py-8 lg:py-16 bg-coworkblue">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 xl:grid-cols-6 gap-x-8">
          <div className="xl:col-span-2">
            <h2 className="tracking-tighter text-white leading-normal start-here-btn p-8 rounded-xl">
              <span className="font-nunito text-3xl font-normal sm:text-4xl md:text-5xl text-coworkdarkbeige">
                {" "}
                Is the{" "}
                <strong className="text-white leading-snug">
                  Online CoWork Lottery
                </strong>{" "}
              </span>
              <span className="font-nunito text-3xl sm:text-4xl sm:block md:text-5xl text-coworkdarkbeige leading-normal">
                {" "}
                right for me?{" "}
              </span>
            </h2>
          </div>

          <div className="xl:col-span-4">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
                <div className="px-4 py-5 sm:px-6 sm:py-8">
                  <BsFillLaptopFill className="text-gray-400 text-4xl mb-5" />
                  <h3 className="mt-2 font-nunito text-2xl text-white">
                    You Feel a Bit Lonely Working at Home Alone - eventhough you
                    love remote work!
                  </h3>
                  <p className="mt-4 font-nunito text-base font-light  text-coworkdarkbeige">
                    Working remotely is great! But sometimes many people who
                    work from home miss the connection with colleagues and
                    networking at a regular office.
                  </p>
                </div>
              </div>

              <div className="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
                <div className="px-4 py-5 sm:px-6 sm:py-8">
                  <BsCardChecklist className="text-gray-400 text-4xl mb-5" />
                  <h3 className="mt-2 font-nunito text-2xl text-white">
                    You Need Some Motivation Because You Have Been
                    Procrastinating!
                  </h3>
                  <p className="mt-4 font-nunito text-base font-light text-coworkdarkbeige ">
                    Procrastinating about creating that freebie to grow your
                    email list? Or about creating your portfoilio website? Or
                    perhaps to get your book written once and for all?
                  </p>
                </div>
              </div>

              <div className="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
                <div className="px-4 py-5 sm:px-6 sm:py-8">
                  <FaRegMoneyBillAlt className="text-gray-400 text-4xl mb-5" />
                  <h3 className="mt-2 font-nunito text-2xl text-white">
                    You Would Love Some Extra Funding for Your Online Business
                  </h3>
                  <p className="mt-4 font-nunito text-base font-light text-coworkdarkbeige ">
                    You would like to make a website for your business, but
                    would love extra funds to cover the website hosting. Or
                    perhaps you would like to buy extra product stock, but
                    haven&apos;t had the funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RightForMe;
