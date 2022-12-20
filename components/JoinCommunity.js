import React from "react";
import Image from "next/image";

const JoinCommunity = () => {
  return (
    <section className="py-10 pt-32  bg-coworkblue sm:py-16 lg:py-24 ">
      <div className="px-4 py-12 mx-24 sm:px-6 lg:px-8 max-w-7xl box-shadow-n">
        <div className="max-w-2xl mx-auto text-center p-8">
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                alt=""
              />
            </div>

            <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                alt=""
              />
            </div>

            <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                alt=""
              />
            </div>
          </div>

          <h2 className="mt-8 text-5xl font-nunito font-medium leading-relaxed text-white lg:mt-12 lg:text-5xl">
            Join our free community on Discord!
          </h2>
          <p className="max-w-xl mb-5 mx-auto mt-6 text-xl font-extralight text-gray-200 md:mt-10">
            Co-work and connect with women with online businesess/remote workers
            from around the world. We have almost 100 channels for you to chat
            with typing, voice or video.
            <br />
            <br />
            Come and co-work at &apos;The beach&apos; or &apos;The Japanese
            Garden&apos;! There are group co-working sessions every 2 hours,
            24hours a day, 7 days a week.
          </p>

          <a
            href="https://office.onlinecowork.com"
            className="btn btn-primary"
            role="button"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
