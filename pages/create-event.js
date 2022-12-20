import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Alert from "../components/Alert";
import { useRouter } from "next/router";
import { eventAirtable, minifyItems } from "../utils/airtable";
import { EventsContext } from "../context/events";
import Loader from "../components/Loader";

export default function CreateEvent({ initialEvents }) {
  const { data: account, isConnected } = useAccount();
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventCost, setEventCost] = useState("");
  const [eventHost, setEventHost] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [eventImage, setEventImage] = useState(null);

  const { addEvent, events, setEvents, updateEvent } =
    useContext(EventsContext);

  let router = useRouter();

  useEffect(() => {
    setEvents(initialEvents);
  }, [initialEvents, setEvents]);

  const uploadImage = async (image, onUpload) => {
    setIsUploading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUD_PRESET);
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME);
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

    const event = events.find(
      (p) => account?.address === p?.fields?.walletAddress
    );

    const params = {
      firstName,
      email,
      walletAddress: account?.address,
      eventTitle,
      eventDescription,
      eventDate,
      eventTime,
      eventCost,
      eventHost,
      eventLink,
      eventImage,
    };

    await addEvent(params);

    setFirstName("");
    setEmail("");
    setEventTitle("");
    setEventDescription("");
    setEventDate("");
    setEventTime("");
    setEventCost("");
    setEventHost("");
    setEventLink("");
    setSuccess(true);
    setLoading(false);
    setMessage(
      "Your event has been submitted successfully! We aim to approve events as fast as we can, but please allow 24 to 72 hours, thanks!"
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
        <title>Add Your Event | Online CoWork</title>
        <meta name="description" content="Add your event" />
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
              Create Your Event
            </h1>
            <p className="font-light text-base lg:pr-40 pb-8 pt-8 text-gray-200">
              Below you will find a form to add your upcoming event to our
              events directory - events hosted by women who work online! Once
              you have added your details below, we will take a look and approve
              it within 72 hours (but we aim to approve as quickly as we can!).
              <br />
              <br />
              If 72 hours have passed with no response, please assume that your
              event was not approved - but you are welcome to email us to check
              - info (at) onlinecowork.com.
              <br />
              <br />
              If approved, your event will be added to our{" "}
              <span className="underline">
                <Link href="/events" passHref className="underline">
                  events directory
                </Link>
              </span>{" "}
              ! Please keep an eye on your email (and spam folder!) for your
              approval email.
              <br />
              <br />
              NOTE: Please be mindful of formatting and punctuation when
              completing this form as your info will not be edited before
              publishing live on the site. You may <strong>not</strong> edit
              your event later on.
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
                    as it will be associated with your event.
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
                  Event Title<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Write the name of your event (Max 50 characters)
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="eventTitle"
                    name="eventTitle"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    required
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="Learn How to Brand Your Business The Easy Way"
                    max={50}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="eventDescription"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Event Description<span className="text-red-500">*</span>
                  <p className="mt-2 text-sm text-gray-400">
                    Let everyone know a little bit about your event! Max 500
                    characters.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="eventDescription"
                    name="eventDescription"
                    rows={6}
                    className="max-w-lg block w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige  sm:text-sm border border-gray-300 rounded-md text-white"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    maxLength={500}
                    required
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Event Date<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Write the date of your event
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    placeholder="January 20, 2022"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="eventTime"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Event Time<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Write the time of your event - PLEASE BE SURE TO INCLUDE THE
                    TIMEZONE
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="eventTime"
                    name="eventTime"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    placeholder="2pm PST (don't forget the timezone!)"
                    required
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="eventCost"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Event Cost<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the cost of your event here. If it is free, write
                    'Free'. If you are writing an amount in dollars, please say
                    the country name before the dollar sign - e.g. US$10
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="eventCost"
                    name="eventCost"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={eventCost}
                    onChange={(e) => setEventCost(e.target.value)}
                    placeholder="US$10"
                    required
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="eventHost"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Event Host<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Who is hosting this event? Is it a business or a person?
                    Write the name here.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="eventHost"
                    name="eventHost"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={eventHost}
                    onChange={(e) => setEventHost(e.target.value)}
                    placeholder="Sarah Jane"
                    required
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="eventLink"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Event Link<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Write the link for your event page here. If you don&apos;t
                    have an event page, put the zoom link here and let your
                    guests know in the event description to join the link at
                    that time.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="eventLink"
                    name="eventLink"
                    type="text"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    value={eventLink}
                    onChange={(e) => setEventLink(e.target.value)}
                    placeholder="https://sarahjane.com/living-your-best-life-workshop"
                    required
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="eventImage"
                  className="block text-sm font-medium text-white sm:mt-px sm:pt-2"
                >
                  Event Image<span className="text-red-500">*</span>
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Upload an image for your event. Must be a rectangular image.
                    Size: 650 X 460 (width X height). Please also make sure that
                    your image file size is below 200kb. You can create an image
                    for free on https://canva.com. Please note that your event
                    will not be approved if your image is the wrong size. Thank
                    you for understanding.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="eventImage"
                    name="eventImage"
                    type="file"
                    className="block max-w-lg w-full box-shadow-n focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md text-white"
                    required
                    onChange={(event) =>
                      uploadImage(event.target.files[0], setEventImage)
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
                  {isUploading ? <Loader /> : "Add Event"}
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
    const events = await eventAirtable.select({}).firstPage();
    return {
      props: {
        initialEvents: events?.length > 0 && minifyItems(events),
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
