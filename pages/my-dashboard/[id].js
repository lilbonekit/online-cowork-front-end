import Head from "next/head";
import DashboardNav from "../../components/DashboardNav";

function CreatedProfile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>My Dashboard | Online CoWork</title>
        <meta
          name="description"
          content="Manage your profile, NFT's, tasks added and more"
        />
      </Head>
      <div className="flex flex-wrap py-8">
        <DashboardNav page={"profiles"} />
        <div className="sm:w-10/12 sm:pl-8"></div>
      </div>
    </div>
  );
}

export default CreatedProfile;
