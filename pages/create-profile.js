import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
// import getRandomImage from "../utils/getRandomImage";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Alert from "../components/Alert";
import { useRouter } from "next/router";
import { profileAirtable, minifyItems } from "../utils/airtable";
import { ProfilesContext } from "../context/profiles";
import Loader from "../components/Loader";

export default function CreateProfile({ initialProfiles }) {
  const { data: account, isConnected } = useAccount();
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [discord, setDiscord] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [facebookGroupLink, setFacebookGroupLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [pinterestLink, setPinterestLink] = useState("");
  const [tiktokLink, setTiktokLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [freebieLink, setFreebieLink] = useState("");
  const [otherLink, setOtherLink] = useState("");
  const [bio, setBio] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null);

  const { addProfile, profiles, setProfiles, updateProfile } =
    useContext(ProfilesContext);

  let router = useRouter();

  useEffect(() => {
    setProfiles(initialProfiles);
  }, [initialProfiles, setProfiles]);

  const uploadImage = async (image, onUpload) => {
    setIsUploading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUD_PRESET);
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME);
    data.append("folder", process.env.NEXT_PUBLIC_CLOUD_PROFILES_FOLDER_NAME);
    try {
      const imageData = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      ).then((resp) => resp.json());

      onUpload(imageData.url);
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profile = profiles.find(
      (p) => account?.address === p?.fields?.walletAddress
    );

    const params = {
      firstName,
      email,
      walletAddress: account?.address,
      jobTitle,
      city,
      country,
      discord,
      websiteLink,
      facebookLink,
      facebookGroupLink,
      twitterLink,
      instagramLink,
      youtubeLink,
      pinterestLink,
      tiktokLink,
      linkedinLink,
      freebieLink,
      otherLink,
      bio,
      coverImage,
      avatarImage,
    };

    if (profile) {
      await updateProfile(profile.id, params);
    } else {
      await addProfile(params);
    }

    setFirstName("");
    setEmail("");
    setJobTitle("");
    setCity("");
    setCountry("");
    setDiscord("");
    setWebsiteLink("");
    setFacebookLink("");
    setFacebookGroupLink("");
    setTwitterLink("");
    setInstagramLink("");
    setPinterestLink("");
    setTiktokLink("");
    setLinkedinLink("");
    setFreebieLink("");
    setOtherLink("");
    setBio("");
    setSuccess(true);
    setLoading(false);
    setMessage(
      "Your profile has been submitted successfully! We aim to approve profiles as fast as we can, but please allow 24 to 72 hours - after which you can participate in the lottery!"
    );
    setTimeout(() => {
      router.push("/");
    }, 10000);
  };

  useEffect(() => {
    // disable scroll on <input> elements of type number
    document.addEventListener("wheel", (event) => {
      if (document.activeElement.type === "number") {
        document.activeElement.blur();
      }
    });
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Create Your Profile | Online CoWork</title>
        <meta name="description" content="Create your profile" />
      </Head>
      <section className="relative py-12">
        {loading && (
          <Alert
            alertType={"loading"}
            alertBody={"Please wait"}
            triggerAlert={true}
            color={"white"}
          />
        )}
        {success && (
          <Alert
            alertType={"success"}
            alertBody={message}
            triggerAlert={true}
            color={"palegreen"}
          />
        )}
        {success === false && (
          <Alert
            alertType={"failed"}
            alertBody={message}
            triggerAlert={true}
            color={"palevioletred"}
          />
        )}

        {!success && (
          <div>
            <h1 className="text-3xl tracking-tight font-extralight text-coworkdarkbeige sm:text-4xl md:text-5xl mb-4 mt-4">
              Create Your Profile
            </h1>
            <p className="font-light text-base lg:pr-40 pb-8 pt-8 text-gray-200">
              In order to make sure that the lottery winnings are going into the
              right hands(i.e. to people with online businesses, remote workers,
              online freelancers, etc), we please require all participants to
              register for the lottery by creating a profile. As a bonus, your
              profile will appear in our{" "}
              <span className="underline">
                <Link href="/members" passHref className="underline">
                  member directory
                </Link>{" "}
              </span>
              where potential clients/customers/followers can learn more about
              you and/or your business!
              <br />
              <br />
              Below you will find a form to create your profile. Once you have
              added your details below, we will take a look and approve it
              within 72 hours (but we aim to approve as quickly as we can!).
              <br />
              <br />
              If 72 hours have passed with no response, please assume that your
              profile was not successful - but you are welcome to email us to
              check - info (at) onlinecowork.com.
              <br />
              <br />
              If approved, you will be added to our{" "}
              <span className="underline">
                <Link href="/members" passHref className="underline">
                  member directory
                </Link>
              </span>{" "}
              and you may participate in the Online CoWork Lottery right away!
              Please keep an eye on your email (and spam folder!) for your
              approval email.
              <br />
              <br />
              NOTE: Please be mindful of formatting and punctuation when
              completing this form as your info will not be edited before
              publishing live on the site. You may also edit your profile later
              on.
            </p>
          </div>
        )}

        {!isConnected && !success && (
          <form
            onSubmit={handleSubmit}
            className="space-y-8 divide-y divide-gray-200"
          >
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  First Name<span className="text-red-500">*</span>{" "}
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add your first name. Please try to use your real first name
                    as it will be associated with your business.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Jane"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Email<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Write your email address
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="onlinecowork@ymail.com"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Job Title<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    e.g. Social Media Manager, Etsy Seller, Virtual Assistant,
                    etc. Please capitalize the first letter of each word.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="job-title"
                    name="job-title"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    required
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Social Media Manager"
                    max={28}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  City<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Write your city
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Manila"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Country<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Write your country
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="The Philippines"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="discord"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Discord Handle{" "}
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    e.g. BlueSky#4423. You can find this in the bottom left
                    corner of your discord screen. If you are not yet a member -
                    visit{" "}
                    <a
                      href="https://office.onlinecowork.com"
                      target="_blank"
                      className="underline"
                      rel="noreferrer"
                    ></a>
                    https://office.onlinecowork.com to join - it&apos;s free.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="discord"
                    name="discord"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                    placeholder="BlueSky#4225"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="website-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Your Website
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add your business website link here (all links should start
                    with https://)
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="website-link"
                    name="website-link"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={websiteLink}
                    onChange={(e) => setWebsiteLink(e.target.value)}
                    placeholder="https://onlinecowork.com"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="facebook-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Your Facebook Page
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your Facebook Business Page here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="facebook-link"
                    name="facebook-link"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={facebookLink}
                    onChange={(e) => setFacebookLink(e.target.value)}
                    placeholder="https://facebook.com/onlinecowork"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="facebook-group-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Your Facebook Group
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your Facebook Group here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="facebook-group-link"
                    name="facebook-group-link"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige  sm:text-sm border border-gray-300 rounded-md text-white"
                    value={facebookGroupLink}
                    onChange={(e) => setFacebookGroupLink(e.target.value)}
                    placeholder="https://facebook.com/groups/yourbestlifenow"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="twitter-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Your Twitter Profile
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your Twitter profile here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="twitter-link"
                    name="twitter-link"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={twitterLink}
                    onChange={(e) => setTwitterLink(e.target.value)}
                    placeholder="https://twitter.com/onlinecowork"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="instagram-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Your Instagram Profile
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your business Instagram profile here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="instagram-link"
                    name="instagram-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={instagramLink}
                    onChange={(e) => setInstagramLink(e.target.value)}
                    placeholder="https://instagram.com/onlinecowork"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="facebook-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Your YouTube Channel
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your YouTube Channel here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="facebook-link"
                    name="facebook-link"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={youtubeLink}
                    onChange={(e) => setYoutubeLink(e.target.value)}
                    placeholder="https://facebook.com/onlinecowork"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="pinterest-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Your Pinterest Page
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your business Pinterest profile here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="pinterest-link"
                    name="pinterest-link"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={pinterestLink}
                    onChange={(e) => setPinterestLink(e.target.value)}
                    placeholder="https://www.pinterest.com/onlinecowork/"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="tiktok-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Your TikTok Profile
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your business TikTok profile here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="tiktok-link"
                    name="tiktok-link"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={tiktokLink}
                    onChange={(e) => setTiktokLink(e.target.value)}
                    placeholder="https://tiktok.com/@username"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="linkedin-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Your LinkedIn Profile
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your LinkedIn profile here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="linkedin-link"
                    name="linkedin-link"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={linkedinLink}
                    onChange={(e) => setLinkedinLink(e.target.value)}
                    placeholder="http://ca.linkedin.com/in/linkedinyourname"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="freebie-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Your Freebie
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your Freebie here (such as a PDF guide,
                    checklist that you are giving away in order to build your
                    email list)
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="freebie-link"
                    name="freebie-link"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={freebieLink}
                    onChange={(e) => setFreebieLink(e.target.value)}
                    placeholder="https://onlinecowork.com/free-pdf-how-to-make-great-images-in-canva"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="other-link"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Other Important Link
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add any other relevant link here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="other-link"
                    name="other-link"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={otherLink}
                    onChange={(e) => setOtherLink(e.target.value)}
                    placeholder="https://otherimportantlink.com"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Bio<span className="text-red-500">*</span>
                  <p className="mt-2 text-sm text-gray-400">
                    Let everyone know a little bit about you! Max 500
                    characters. Example: &quot;Hi! Great to meet you My name is
                    Jane and I&apos;ve been a social media manager for the past
                    5 years. I have the most experience with Instagram and
                    Facebook, but I also love working with Pinterest ads. I am a
                    huge coffee fan, love cuddles with my two puppies and a
                    roadtrip in Iceland is on my bucketlist! Please don&apos;t
                    hesitate to get in touch with me via my website or social
                    media accounts! Or grab my freebie a free page PDF guide on
                    how to increase your engagement on Instagram!&quot;
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="bio"
                    name="bio"
                    rows={6}
                    className="max-w-lg block w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige  sm:text-sm border border-gray-300 rounded-md text-white"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    maxLength={500}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="profile-picture"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Profile Picture<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Upload a head shot. Must be a SQUARE image. Size: 1080 X
                    1080 (Instagram Size) Please make sure that your image is a
                    square or your profile will not be approved. Please also
                    make sure that your image file size is below 200kb. Thank
                    you. You can also use an avatar which you can create for
                    free on canva - https://www.canva.com/create/avatars/.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="profile-picture"
                    name="profile-picture"
                    type="file"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    required
                    onChange={(event) =>
                      uploadImage(event.target.files[0], setAvatarImage)
                    }
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="cover-image"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Cover Image<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Upload a cover image for your profile. Size: 650 X 460
                    (length X height). Please make sure that your image size is
                    less than 200kb. Visit our member directory to see examples
                    of good cover images. Your cover image can serve as a banner
                    advertisement for your business where you can include info
                    about your sales, etc.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="cover-image"
                    name="cover-image"
                    type="file"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    onChange={(event) =>
                      uploadImage(event.target.files[0], setCoverImage)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <Link href="/">
                  <a className="btn p-8">Cancel</a>
                </Link>
                <button
                  type="submit"
                  disabled={isUploading}
                  className="btn btn-primary"
                >
                  {isUploading ? <Loader /> : "Create"}
                </button>
              </div>
            </div>
          </form>
        )}
        {/* {success && (
          <div>
            Success! Please wait a few minutes, then check out your profile page{" "}
            <span className="font-bold">
              <Link href={`/profiles/${account.address}`}>here</Link>
            </span>
          </div>
        )} */}

        {/* {!isConnected && (
          <section className="flex flex-col items-start py-8">
            <p className="mb-4">
              Please connect your wallet to create a profile.
            </p>
            <ConnectButton />
          </section>
        )} */}
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const profiles = await profileAirtable.select({}).firstPage();
    return {
      props: {
        initialProfiles: profiles?.length > 0 && minifyItems(profiles),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        err: "Something went wrong 😕",
      },
    };
  }
}

//         const txn = await profileContract.createNewProfile(profileDataCID);
//         setLoading(true);
//         console.log("Minting...", txn.hash);
//         let wait = await txn.wait();
//         console.log("Minted -- ", txn.hash);

//         //   setProfileID(wait.profiles[0].args[0]);

//         setSuccess(true);
//         setLoading(false);
//         setMessage(
//           "Your profile has been created successfully. Please note that it may take a few minutes to appear on the home page."
//         );
//         setTimeout(() => {
//           router.push("/");
//         }, 5000);
// } else {
//         console.log("Error getting contract.");
//       }
//     } catch (error) {
//       setSuccess(false);
//       setMessage(
//         `There was an error creating your profile: ${error.message}`
//       );
//       setLoading(false);
//       console.log(error);
//     }
//   }
//   console.log("Form submitted");
// }
