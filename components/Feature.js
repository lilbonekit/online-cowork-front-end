import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <section className=" sm:py-12 lg:py-12">
      <div className="px-6 pt-20 sm:px-8 lg:px-12 max-w-7xl mx-auto  bg-coworkblue rounded-xl">
        <div className="text-left sm:text-center max-w-5xl mx-auto">
          {/* <hr className="py-12" /> */}
          <p className="text-base sm:text-msm lg:text-md font-nunito  text-white text-opacity-70 font-extralight mb-4 leading-10">
            An intiaitive for women who work online
          </p>
          <h2 className="mt-3 tracking-normal text-white leading-10">
            <span className="font-nunito text-4xl font-extralight sm:text-4xl md:text-6xl leading-10">
              {" "}
              The <strong>productivity of a to-do list</strong> and the{" "}
              <strong>excitement of a lottery</strong>...
              <br />
              <br />
            </span>
            {/* <span className="font-nunito block lg:inline text-xl italic sm:text-4xl md:text-3xl text-white">
              {" "}
              giving you that extra dose of motivation{" "}
            </span>
            <span className="font-nunito text-xl font-extralight sm:text-xl md:text-3xl">
              that you need to succeed.
            </span> */}
          </h2>
          <h2 className=" max-w-1/12 text-xl font-light rounded-2xl shadow-xl sm:text-2xl xl:text-3xl font-nunito mt-4 mb-12 py-10 text-coworkdarkbeige start-here-btn mx-4 lg:mx-40">
            Add a task&nbsp;&nbsp;➡️&nbsp;&nbsp;Get a lottery ticket!
          </h2>

          {/* <div className="grid grid-cols-1  mt-12 sm:mt-16 lg:mt-4 pb-100">
            <div className="sm:mx-auto w-auto h-15 object-contain  rounded-xl">
              <Image
                className="rounded-xl"
                src="/images/wbw3-logo.png"
                alt="Women Build Web3 Logo"
                width={400}
                height={230}
              />
            </div> */}

          {/* <div>
              <img
                className="sm:mx-auto opacity-70 w-auto h-10 object-contain"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/1/logo-goldline.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="sm:mx-auto opacity-70 w-auto h-10 object-contain"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/1/logo-kyan.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="sm:mx-auto opacity-70 w-auto h-10 object-contain"
                src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/1/logo-treva.png"
                alt=""
              />
            </div> */}
        </div>
        {/* <hr className="mt-20 mb-10" /> */}
      </div>
    </section>
  );
};

export default Feature;
