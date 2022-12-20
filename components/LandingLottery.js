import Head from "next/head";
import { GiPartyPopper } from "react-icons/gi";
import Link from "next/link";

export default function LandingLottery({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Online CoWork</title>
        <meta
          name="description"
          content="The virtual office for women who work online"
        />
      </Head>
      <section className="pb-12">
        <div className="py-4 pb-0">
          <div className="">
            <h1 className="text-center pt-12 pb-0 mb-3 text-5xl font-light leading-8 text-coworkdarkbeige md:text-7xl">
              <span className="leading-loose">The Online CoWork </span>
              <span className="text-white font-bold leading-loose">
                Lottery!
              </span>
            </h1>
            <br />
            <br />
            <div className="box-shadow-n text-coworkdarkbeige text-xl lg:text-2xl font-light p-12 text-center tracking-wider mx-auto">
              &quot;The productivity of a to-do list with the excitement of a
              lottery&quot; 🔥
            </div>

            <div className=" mx-6 text-white my-5 ml-10">
              {/* <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-1 text-xs font-semibold leading-5 text-white transition-all duration-200 bg-pink-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
              >
                Donate to Lottery
              </button> */}
            </div>
          </div>

          <p className=" pt-4 md:pt-12 p-3 text-gray-200 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-lg font-thin">
            For virtual assistants, Etsy sellers, online yoga instructors,
            bloggers, online bookkeepers, online freelancers and more! Get
            things done AND win funding for your online business with the Online
            CoWork Lottery!
            <br />
            <br />
            Our unique platform for women and non-binary people combines{" "}
            <strong>
              the productivity of a to-do list with the excitement of a lottery
            </strong>
            , giving you that extra dose of motivation that you need to succeed.
            <br />
            <br />
            Simply input a business task (such as &apos;get to inbox zero&apos;)
            that you&apos;d like to get done, and pay a small fee of your choice
            to hold yourself accountable (we dare ya!). Doing this will
            automatically entitle you to a lottery ticket (or tickets!). The
            draw will take place once a week giving you the chance to win
            valuable funds for your business!
            <br />
            <br />
            The more tasks you add - and the more money you add per task - the
            more lottery entries you get, and the better your chances of
            winning!
            <br />
            <br />
            Plus, our platform is built on blockchain technology to ensure a
            fair and verifiably random lottery with no human interference. So,
            don&apos;t miss out on this opportunity to grow your business and
            achieve your dreams! <br />
            <br />
            <div className="flex justify-center">
              <Link href="/how-it-works" passHref>
                <span className="btn btn-primary">Learn More</span>
              </Link>
            </div>
          </p>
        </div>
      </section>
      <section className="py-4">{children}</section>
    </div>
  );
}

// bg-gradient-to-r p-4 from-[#ff0080] to-[#2b3349]
