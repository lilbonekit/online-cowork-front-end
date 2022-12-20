import Head from "next/head";

export default function LandingProducts({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Online CoWork</title>
        <meta
          name="description"
          content="The virtual office for women who work online"
        />
      </Head>
      <section className="py-12">
        <div className="w-full md:w-8/12 text-left">
          <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span>Meet our </span>
            <span className="text-gray-300">Online CoWorkers!</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-extralight">
            Support women with online businesses from around the world! Search
            for virtual assistants, social media managers, yoga instructors and
            more...
          </p>
        </div>
      </section>
      <section className="py-12">{children}</section>
    </div>
  );
}
