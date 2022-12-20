import Head from "next/head";
import Link from "next/link";
import { useAccount } from "wagmi";

export default function LandingEvents({ children }) {
  const { data: account } = useAccount();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Online CoWork</title>
        <meta
          name="description"
          content="The virtual office for women who work online"
        />
      </Head>
      <section className="pt-12 pb-4">
        <div className="w-full md:w-8/12 text-left">
          <h1 className="text-4xl font-light tracking-tight leading-tight text-coworkdarkbeige sm:text-5xl md:text-6xl mt-12">
            <span className="leading-tight">Online Events Hosted By</span>
            <span className="text-white leading-tight">
              &nbsp;Women Across the Globe
            </span>
            <span>
              {account && (
                <Link href="/create-event" passHref>
                  <a className=" px-4 py-2 mx-5 align-middle border-transparent text-sm font-light tracking-normal rounded-md text-coworkdarkbeige border border-coworkdarkbeige hover:bg-coworkdarkbeige hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige">
                    Add an Event
                  </a>
                </Link>
              )}
            </span>
          </h1>
          <p className="mt-5 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-extralight">
            Are you hosting an online event? A workshop, coffee chat, networking
            event, meditation class, yoga class, webinar, AMA, etc? Add it to
            our events directory at no cost below! *Note: It is not necessary to
            create a profile before adding an event.
          </p>
        </div>
      </section>
      <section className="py-4">{children}</section>
    </div>
  );
}
