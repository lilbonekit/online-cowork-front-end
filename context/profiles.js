import { createContext, useState } from "react";
import { useAccount } from "wagmi";

const ProfilesContext = createContext();

const ProfilesProvider = ({ children }) => {
  const [profiles, setProfiles] = useState();

  // for creating an item
  const addProfile = async (profileInfo) => {
    try {
      // we will send a POST request with the data required to create an item
      const res = await fetch("/api/createProfile", {
        method: "POST",
        body: JSON.stringify(profileInfo),
        headers: { "Content-Type": "application/json" },
      });
      const newProfile = await res.json();
      // then we will update the 'items' adding the newly added item to it
      setProfiles((prevProfiles) => [newProfile, ...prevProfiles]);
    } catch (error) {
      console.error(error);
    }
  };

  // for updating an existing item
  const updateProfile = async (id, fields) => {
    try {
      // we will send a PUT request with the updated information
      const res = await fetch("/api/updateProfile", {
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
  const deleteProfile = async (id) => {
    try {
      // we will send a DELETE request to the API with the id of item we want to delete
      const res = await fetch("/api/deleteItem", {
        method: "Delete",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      // them we will update the 'items' by deleting the item with specified id
      setProfiles((prevProfiles) =>
        prevProfiles.filter((profile) => profile.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProfilesContext.Provider
      value={{
        profiles,
        setProfiles,
        updateProfile,
        deleteProfile,
        addProfile,
      }}
    >
      {children}
    </ProfilesContext.Provider>
  );
};

export { ProfilesContext, ProfilesProvider };
