import Head from "next/head";

export default function LandingProfiles({ children }) {
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
          <h1 className="text-4xl font-light tracking-tight text-coworkdarkbeige sm:text-5xl md:text-6xl mt-12">
            <span>Meet our </span>
            <span className="text-white">Online CoWorkers!</span>
          </h1>
          <p className="mt-5 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-extralight">
            Support our members from around the world! Search for virtual
            assistants, social media managers, online yoga instructors, business
            coaches, online lawyers, online accountants, software developers,
            website designers, Etsy sellers and more... click the 'Start Here'
            button in the menu above after connecting your wallet to create your
            profile.
          </p>
        </div>
      </section>
      <section className="py-4">{children}</section>
    </div>
  );
}
