import Head from "next/head";
import Link from "next/link";

export default function NoWallet() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <section className="py-6 pt-12">
        <div className=" w-full md:w-8/12 mx-auto">
          <h1 className="text-4xl font-light tracking-tight  sm:text-5xl md:text-6xl text-white">
            Don't have a wallet?
          </h1>
          <p className="mt-3 mb-3 text-base text-coworkdarkbeige sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-extralight">
            That's ok. Learn how to get a (free) wallet and more by clicking the
            button below.
          </p>
          <div>
            <div className="btn btn-primary mr-5">
              <Link href="/how-it-works"> Learn More</Link>
            </div>
            <div className="btn btn-primary">
              <Link href="/lottery"> Enter App</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
