import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { getMinifiedItem, profileAirtable } from "../../utils/airtable";

function MemberProfile({ profile }) {
  const { query } = useRouter();
  if (profile?.error) {
    return (
      <h3 className="text-xl text-center text-white font-bold mt-8">
        No profile!
      </h3>
    );
  }
  const {
    firstName,
    jobTitle,
    avatarImage,
    city,
    country,
    email,
    coverImage,
    bio,
    freebieLink,
    websiteLink,
    facebookLink,
    facebookGroupLink,
    twitterLink,
    instagramLink,
    pinterestLink,
    tiktokLink,
    linkedinLink,
    otherLink,
  } = profile.fields;
  if (!profile) {
    return (
      <div className="lds-spinner ml-20">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>
          {firstName} - {jobTitle} | Online CoWork
        </title>
        <meta name="description" content={{ firstName } - { jobTitle }} />
        <link rel="icon" href="./images/favicon.png" />
      </Head>
      <section className="relative py-12">
        <div className="flex items-center mt-4 mb-9">
          <div className="rounded-xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            {avatarImage && (
              <Image
                className="bg-gray-100 rounded-full"
                src={avatarImage}
                alt="Profile image"
                width={100}
                height={100}
              />
            )}
          </div>
          <div className="ml-10">
            {/* <h6 className="mb-2">{formatTimestamp(event.eventTimestamp)}</h6> */}
            <h6 className="mb-2 text-coworkdarkbeige">
              {city}, {country}
            </h6>
            <h1 className="pt-1 pb-2 text-4xl tracking-tight font-extrabold  sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl text-white">
              {firstName} - {jobTitle}
            </h1>
          </div>
        </div>

        <div className="flex justify-center flex-wrap lg:flex-nowrap">
          <div className="w-full pr-0 lg:pr-8 xl:pr-12 text-center lg:text-left xl:text-left">
            <div className="mb-8 w-full aspect-w-10 aspect-h-7 rounded-xl bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden box-shadow-n">
              {coverImage && (
                <Image src={coverImage} alt="Cover Image" layout="fill" />
              )}
            </div>
            <p className="text-gray-200 tracking-wide leading-8">{bio}</p>
          </div>

          <div className="pb-12 pt-8 lg:pt-1 xl:pt-1 max-w-xs w-full flex flex-col gap-4 mb-6 lg:mb-0">
            {/* <div className="flex item-center justify-center py-4">
                <CheckIcon className="w-6 mr-2" />
                <span className="truncate text-center lg:text-left xl:text-left">
                  <strong>Number of Tasks Added</strong>: 27
                </span>
              </div> */}

            <div className="flex">
              <a
                className="text-indigo-800 hover:underline w-full"
                href="https://office.onlinecowork.com"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                >
                  Find {firstName} on Discord
                </button>
              </a>
            </div>

            <div className="flex">
              <a
                className="text-indigo-800 hover:underline w-full"
                href={`mailto: ${email}`}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                >
                  Email {firstName}
                </button>
              </a>
            </div>

            {freebieLink && firstName && (
              <div className="flex">
                <a
                  className="text-indigo-800 hover:underline w-full"
                  href={freebieLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                  >
                    Grab {firstName}&apos;s Freebie!
                  </button>
                </a>
              </div>
            )}

            {websiteLink && (
              <div className="flex">
                <a
                  className="text-indigo-800 hover:underline w-full"
                  href={websiteLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                  >
                    Website
                  </button>
                </a>
              </div>
            )}

            {facebookLink && (
              <div className="flex">
                <a
                  className="text-indigo-800 hover:underline w-full"
                  href={facebookLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                  >
                    Facebook Page
                  </button>
                </a>
              </div>
            )}

            {facebookGroupLink && (
              <div className="flex">
                <a
                  className="text-indigo-800 hover:underline w-full"
                  href={facebookGroupLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                  >
                    Facebook Group
                  </button>
                </a>
              </div>
            )}

            {twitterLink && (
              <div className="flex">
                <a
                  className="text-indigo-800 hover:underline w-full"
                  href={twitterLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                  >
                    Twitter
                  </button>
                </a>
              </div>
            )}

            {instagramLink && (
              <div className="flex">
                <a
                  className="text-indigo-800 hover:underline w-full"
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                  >
                    Instagram
                  </button>
                </a>
              </div>
            )}

            {pinterestLink && (
              <div className="flex">
                <a
                  className="text-indigo-800 hover:underline w-full"
                  href={pinterestLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                  >
                    Pinterest
                  </button>
                </a>
              </div>
            )}

            {tiktokLink && (
              <div className="flex">
                <a
                  className="text-indigo-800 hover:underline w-full"
                  href={tiktokLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                  >
                    Tiktok
                  </button>
                </a>
              </div>
            )}

            {linkedinLink && (
              <div className="flex">
                <a
                  className="text-indigo-800 hover:underline w-full"
                  href={linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                  >
                    LinkedIn
                  </button>
                </a>
              </div>
            )}

            {otherLink && (
              <div className="flex">
                <a
                  className="text-indigo-800 hover:underline w-full"
                  href={otherLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                  >
                    Other Link
                  </button>
                </a>
              </div>
            )}
            {/* <div className="flex items-center">
              <EmojiHappyIcon className="w-10 mr-2" />
              <span className="truncate">
                Hosted by{" "}
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={`${process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL}address/${event.profileOwner}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.profileOwner}
                </a>
              </span>
            </div> */}

            {/* <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.country}
                </a>
              </span>
            </div> */}
            {/* {event?.toLowerCase() === account?.address?.toLowerCase() && (
              <div>
                <button
                  type="button"
                  className="w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDeleteProfile(event.id)}
                >
                  Delete Profile
                </button>
              </div>
            )} */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MemberProfile;

export async function getServerSideProps(context) {
  const { id } = context.query;
  try {
    const profiles = await profileAirtable.select({}).all();
    const profile = profiles.find((p) => p.fields.walletAddress === id);
    console.log(profiles, profile, id, "❌");
    return {
      props: {
        profile: profile ? getMinifiedItem(profile) : { error: "no profile" },
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

{
  /* <div className="flex items-center">
<EmojiHappyIcon className="w-10 mr-2" />
<span className="truncate">
  Hosted by{" "}
  <a
    className="text-indigo-800 truncate hover:underline"
    href={`${process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL}address/${event.eventOwner}`}
    target="_blank"
    rel="noreferrer"
  >
    {event.eventOwner}
  </a>
</span>
</div> */
}

{
  /* <div>
              <button
                type="button"
                className="w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleDeleteProfile(event.id)}
              >
                Delete Profile
              </button>
            </div> */
}

{
  /* {event.eventTimestamp > currentTimestamp ? (
              account ? (
                checkIfAlreadyRSVPed() ? (
                  <>
                    <span className="w-full text-center px-6 py-3 text-base font-medium rounded-full text-teal-800 bg-teal-100">
                      You have RSVPed! 🙌
                    </span>
                    <div className="flex item-center">
                      <LinkIcon className="w-6 mr-2 text-indigo-800" />
                      <a
                        className="text-indigo-800 truncate hover:underline"
                        href={event.link}
                      >
                        {event.link}
                      </a>
                    </div>
                  </>
                ) : (
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={newRSVP}
                  >
                    Donate for {ethers.utils.formatEther(event.deposit)} MATIC
                  </button>
                )
              ) : (
                <ConnectButton />
              )
            ) : (
              <span className="w-full text-center px-6 py-3 text-base font-medium rounded-full border-2 border-gray-200">
                Event has ended
              </span>
            )} */
}
