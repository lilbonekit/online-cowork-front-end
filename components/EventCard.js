import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

export default function EventCard({ event }) {
  const { id, fields } = event;
  return (
    <div className="group relative clickable-card focus-within:ring-2 focus-within:ring-offset-2 focus-within:opacity-50">
      <Link href={`/events/${id}`}>
        <a className="clickable-card__link"></a>
      </Link>
      <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg bg-coworkdarkbeige overflow-hidden relative group-hover:opacity-75 box-shadow-n">
        {fields?.eventImage && (
          <Image src={fields?.eventImage} alt="event image" layout="fill" />
        )}
      </div>
      <h5 className="block text-md font-light text-coworkdarkbeige py-1 pt-3">
        {format(new Date(fields?.eventDate), "PPP")} - {fields?.eventTime}
        &nbsp;UCT
      </h5>
      <h3 className="text-white text-md font-light ">{fields?.eventTitle}</h3>
    </div>
  );
}
