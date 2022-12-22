import LandingEvents from "../components/LandingEvents";
import { useCallback, useContext, useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { eventAirtable, minifyItems } from "../utils/airtable";
import { EventsContext } from "../context/events";

function filterArray(array, searchText) {
  const filterItems = [
    "hostName",
    "eventTitle",
    "eventDescription",
    "eventCost",
  ];
  return array.filter((item) => {
    return filterItems.some((key) => {
      const value = item.fields[key]?.toLowerCase() || "";
      return value.includes(searchText);
    });
  });
}

export default function Events({ initialEvents }) {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const { events, setEvents } = useContext(EventsContext);

  useEffect(() => {
    setEvents(initialEvents);
  }, [initialEvents, setEvents]);

  function searchInputHandler(e) {
    setSearchText(e.target.value);
  }

  const updateFilteredEvents = useCallback(
    function updateFilteredEvents() {
      if (events?.length > 0) {
        if (!searchText) {
          setFilteredEvents(events);
        } else {
          setFilteredEvents(filterArray(events, searchText));
        }
      }
    },
    [events, searchText]
  );

  useEffect(() => {
    updateFilteredEvents();
  }, [searchText, updateFilteredEvents]);

  if (!events)
    return (
      <LandingEvents>
        <div className="lds-spinner">
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
      </LandingEvents>
    );

  return (
    <LandingEvents>
      <div className="flex justify-start pt-4 pb-6">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={searchInputHandler}
              value={searchText}
            />
          </div>
        </div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {filteredEvents.reverse().map((event) => (
          <li key={event}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </LandingEvents>
  );
}

export async function getServerSideProps() {
  try {
    const events = await eventAirtable.select({}).firstPage();
    const aproovedEvents = events
      .filter((event) => event.fields.approved === "yes")
      .sort(
        (a, b) => new Date(a.fields.eventDate) - new Date(b.fields.eventDate)
      );
    return {
      props: {
        initialEvents: minifyItems(aproovedEvents),
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
