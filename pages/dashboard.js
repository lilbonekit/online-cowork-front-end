import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>My Dashboard | Online CoWork</title>
        <meta name="description" content="Manage your events and RSVPs" />
      </Head>
      <div className="flex flex-wrap justify-center py-16 px-12">
        <div className="w-full md:w-8/12 text-left">
          <h1 className="text-4xl font-medium tracking-tight text-coworkdarkbeige sm:text-5xl md:text-6xl text-center">
            <span>My Dashboard</span>
          </h1>
        </div>
      </div>
      <div className="group relative clickable-card focus-within:ring-2 focus-within:ring-offset-2 focus-within:opacity-50 px-12 flex flex-col items-center">
        <Link href={`/`}>
          <a className="clickable-card__link"></a>
        </Link>
        <div className="inline-block  lg:w-2/12 rounded-lg bg-coworkdarkbeige overflow-hidden relative group-hover:opacity-75 box-shadow-n">
          {/* {avatarImage && ( */}
          <Image
            src="/images/female-avatar-3.jpeg"
            alt="profile image"
            width={200}
            height={200}
          />
          {/* )} */}
        </div>
        <h5 className="block text-md font-light text-coworkdarkbeige py-3">
          Jane - Social Media Manager
        </h5>
        {/* <p className="block text-base font-medium text-gray-900">{bio}</p> */}
      </div>
      <div className="flex flex-col items-center px-12">
        <a href="#" className="btn btn-primary">
          Edit Profile
        </a>
        <a href="#" className="btn btn-primary">
          Delete Profile
        </a>
      </div>
    </section>
  );
}
