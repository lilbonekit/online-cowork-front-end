import { createContext, useState } from "react";
import { useAccount } from "wagmi";

const EventsContext = createContext();

const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState();

  // for creating an item
  const addEvent = async (eventInfo) => {
    try {
      // we will send a POST request with the data required to create an item
      const res = await fetch("/api/createEvent", {
        method: "POST",
        body: JSON.stringify(eventInfo),
        headers: { "Content-Type": "application/json" },
      });
      const newEvent = await res.json();
      // then we will update the 'items' adding the newly added item to it
      setEvents((prevEvents) => [newEvent, ...prevEvents]);
    } catch (error) {
      console.error(error);
    }
  };

  // for updating an existing item
  const updateEvent = async (id, fields) => {
    try {
      // we will send a PUT request with the updated information
      const res = await fetch("/api/updateEvent", {
        method: "PUT",
        body: JSON.stringify({ id, fields }),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
    } catch (error) {
      console.error(error);
    }
  };

  // for deleting an item
  const deleteEvent = async (id) => {
    try {
      // we will send a DELETE request to the API with the id of item we want to delete
      const res = await fetch("/api/deleteEvent", {
        method: "Delete",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      // them we will update the 'items' by deleting the item with specified id
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        updateEvent,
        deleteEvent,
        addEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export { EventsContext, EventsProvider };
