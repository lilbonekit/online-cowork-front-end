import Link from "next/link";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative lg:pb-4  xl:pb-4 bg-coworkblue my-2">
      <div className="absolute hidden inset-5 lg:block">
        <Image
          className="object-cover object-top w-full h-full bg-coworkblue"
          src="/images/hero-background-landing.png"
          alt="Hero Image"
          width={2000}
          height={1100}
        />
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center py-12 pt-8 ">
          <h1 className="text-5xl font-normal tracking-tight leading-loose text-coworkdarkbeige sm:text-6xl xl:text-7xl sm:tracking-tight py-4">
            Welcome to the{" "}
            <strong className="font-bold text-white leading-tight">
              Online CoWork
            </strong>{" "}
            Lottery!
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl xl:text-4xl sm:tracking-tight p-3 mt-8 mb-8 mx-12 rounded-xl bg-white start-here-btn">
            Complete Your Tasks. Win Funding.
          </h2>
          <p className="font-extralight max-w-xl mx-auto mt-6 text-lg leading-7 text-coworkdarkbeige lg:leading-8 lg:text-xl">
            Virtual assistants, Etsy sellers, online yoga instructors, business
            coaches, online accountants, web designers, remote workers,
            bloggers, online freelancers, and more... for women around the world
            who work online. Win funding for your online business by completing
            your daily tasks! 🔥
          </p>
          <div className="flex flex-col items-center gap-5 mt-6">
            <Link href="/lottery" passHref>
              <a className="btn btn-primary pb-4 box-shadow-n">Enter App</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//button
// cursor-pointer inline-flex items-center justify-center px-8 py-4 text-base font-normal text-white transition-all duration-200 bg-black border-2 border-coworkblue rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkblue shadow-lg shadow-coworkblue font-nunito
