import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { minifyItems, eventAirtable } from "../../utils/airtable";
import { BiTimeFive, BiUser } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { format } from "date-fns";

function MemberEvent({ event }) {
  const { query } = useRouter();

  if (event.message) {
    return (
      <h3 className="text-white text-xl text-center">
        This is not a valid event!
      </h3>
    );
  }
  if (!event) {
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
  const { fields } = event;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{fields?.eventTitle} | Online CoWork</title>
        <meta name="description" content={fields?.eventTitle} />
        <link rel="icon" href="./images/favicon.png" />
      </Head>
      <section className="relative py-12">
        <div className="flex items-center mt-4 mb-9">
          <div className="ml-10">
            {/* <h6 className="mb-2">{formatTimestamp(event.eventTimestamp)}</h6> */}
            {/* <h6 className="mb-2 text-coworkdarkbeige">{fields?.eventCost}</h6> */}
            <h1 className="pt-1 pb-2 text-4xl tracking-tight font-extrabold text-white sm:text-2xl md:text-5xl lg:text-5xl xl:text-5x">
              {fields?.eventTitle}
            </h1>
          </div>
        </div>

        <div className="flex justify-center flex-wrap lg:flex-nowrap">
          <div className="w-full pr-0 lg:pr-8 xl:pr-12 text-center lg:text-left xl:text-left">
            <div className="mb-8 w-full aspect-w-10 aspect-h-7 rounded-xl bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden box-shadow-n">
              {fields?.eventImage && (
                <Image
                  src={fields?.eventImage}
                  alt="Cover Image"
                  layout="fill"
                />
              )}
            </div>
            <p className="text-gray-200 tracking-wide leading-8">
              {fields?.eventDescription}
            </p>
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
                href={fields?.eventLink}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="w-full items-center px-6 py-3 border border-black text-base rounded-full text-white bg-coworkdarkbeige font-light hover:bg-coworkblue  focus:outline-none hover:border-coworkdarkbeige focus:ring-2 focus:ring-offset-2 focus:ring-coworkdarkbeige start-here-btn"
                >
                  Event Link
                </button>
              </a>
            </div>

            <div className="flex item-center justify-center py-2">
              <BsCalendarDate className="w-6 mr-2 mt-1 text-white" />
              <span className="truncate text-center lg:text-left xl:text-left text-white">
                {format(new Date(fields?.eventDate), "PPP")}
              </span>
            </div>

            <div className="flex item-center justify-center py-2">
              <BiTimeFive className="w-6 mr-2 mt-1 text-white" />
              <span className="truncate text-center lg:text-left xl:text-left text-white">
                {fields?.eventTime}&nbsp;UCT
              </span>
            </div>

            <div className="flex item-center justify-center py-2">
              <ImPriceTags className="w-6 mr-2 mt-1 text-white" />
              <span className="truncate text-center lg:text-left xl:text-left text-white">
                {fields?.eventCost}
              </span>
            </div>

            <div className="flex item-center justify-center py-2">
              <BiUser className="w-6 mr-2 mt-1 text-white" />
              <span className="truncate text-center lg:text-left xl:text-left text-white">
                Hosted by <strong>{fields?.eventHost}</strong>
              </span>
            </div>

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

export default MemberEvent;

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const events = await eventAirtable.select({}).firstPage();
    const aproovedEvents = minifyItems(
      events.filter((event) => event.fields.approved === "yes")
    );
    const event = aproovedEvents.find((p) => p.id === id);
    return {
      props: {
        event: JSON.parse(
          JSON.stringify(event || { message: "not available" })
        ),
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
