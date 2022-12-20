import React, { useState } from "react";
import { MdDoneOutline } from "react-icons/md";

const TaskExamples = () => {
  return (
    <section className="sm:py-2 lg:py-2 bg-coworkblue">
      {/* <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-4">
        <div className="max-w-xl mx-auto text-center xl:max-w-3xl">
          <h1 className="text-7xl font-light text-coworkdarkbeige sm:text-5xl xl:text-6xl font-nunito">
            What business tasks are you procrastinating about?
          </h1>
        </div>
      </div> */}

      <div className="mt-3 lg:mt-2">
        <div className="">
          <div className="w-full py-4 overflow-hidden">
            <div className="grid grid-cols-3 gap-5 text-center lg:grid-cols-6 lg:gap-6 lg:-mx-8 xl:gap-10">
              <div className="overflow-hidden rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 mx-auto rounded-full sm:w-15 sm:h-15 bg-amber-400">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Post on Instagram
                  </p>
                </div>
              </div>

              <div className="overflow-hidden  rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex  items-center justify-center w-10 h-10 mx-auto bg-teal-400 rounded-full sm:w-15 sm:h-15">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-gray-200 text-sm font-bold sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Clear Your Inbox
                  </p>
                </div>
              </div>

              <div className="overflow-hidden  rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 mx-auto bg-blue-500 rounded-full sm:w-15 sm:h-15 text-white">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Write A Blog
                  </p>
                </div>
              </div>

              <div className="overflow-hidden   rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center h-10 w-10 sm:w-15 sm:h-15 mx-auto bg-[#F97316] rounded-full">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Do SEO Research
                  </p>
                </div>
              </div>

              <div className="overflow-hidden   rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center h-10 w-10 sm:w-15 sm:h-15 mx-auto rounded-full bg-[#DA98E7]">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Create A Client Invoice
                  </p>
                </div>
              </div>

              <div className="overflow-hidden   rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center h-10 w-10 sm:w-15 sm:h-15 mx-auto rounded-full bg-[#34D399]">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Add A Product
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-5 text-center lg:grid-cols-6 lg:gap-6 lg:translate-x-24 lg:mt-5 xl:mt-9 xl:gap-8">
              <div className="overflow-hidden   rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 mx-auto bg-red-500 rounded-full sm:w-15 sm:h-15">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Call Client
                  </p>
                </div>
              </div>

              <div className="overflow-hidden   rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 mx-auto bg-indigo-200 rounded-full sm:w-15 sm:h-15">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Facebook Post
                  </p>
                </div>
              </div>

              <div className="overflow-hidden   rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 mx-auto bg-gray-500 rounded-full sm:w-15 sm:h-15">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Make a Website
                  </p>
                </div>
              </div>

              <div className="overflow-hidden   rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 mx-auto bg-purple-600 rounded-full sm:w-15 sm:h-15">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Clean Your Desk
                  </p>
                </div>
              </div>

              <div className="overflow-hidden   rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 mx-auto bg-green-400 rounded-full sm:w-15 sm:h-15">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Make a Reel
                  </p>
                </div>
              </div>

              <div className="overflow-hidden   rounded-xl">
                <div className="p-4 sm:p-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 mx-auto bg-orange-200 rounded-full sm:w-15 sm:h-15">
                    <MdDoneOutline size={20} style={{ color: "#fff" }} />
                  </div>
                  <p className="pt-5 text-sm font-bold text-gray-200 sm:mt-3 sm:text-lg md:text-xl font-nunito">
                    Make An Automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="px-4 mx-auto mt-12 lg:mt-20 max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <a
            href="#"
            title=""
            className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
          >
            Check all 1,349 Integrations
          </a>
        </div>
      </div> */}
    </section>
  );
};
export default TaskExamples;
