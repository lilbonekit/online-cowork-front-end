import Link from "next/link";
import Image from "next/image";

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
      <h5 className="block text-md font-light text-coworkdarkbeige py-3">
        {fields?.eventTitle} - {fields?.eventDate}
      </h5>
    </div>
  );
}
