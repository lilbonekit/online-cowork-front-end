import LandingProfiles from "../components/LandingProfiles";
import { useCallback, useContext, useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { profileAirtable, minifyItems } from "../utils/airtable";
import { ProfilesContext } from "../context/profiles";

function filterArray(array, searchText) {
  const filterItems = ["firstName", "city", "bio", "jobTitle", "country"];
  return array.filter((item) => {
    return filterItems.some((key) => {
      const value = item.fields[key]?.toLowerCase() || "";
      return value.includes(searchText);
    });
  });
}

export default function Members({ initialProfiles }) {
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const { profiles, setProfiles } = useContext(ProfilesContext);

  useEffect(() => {
    setProfiles(initialProfiles);
  }, [initialProfiles, setProfiles]);

  function searchInputHandler(e) {
    setSearchText(e.target.value);
  }

  const updateFilteredProfiles = useCallback(
    function updateFilteredProfiles() {
      if (profiles?.length > 0) {
        if (!searchText) {
          setFilteredProfiles(profiles);
        } else {
          setFilteredProfiles(filterArray(profiles, searchText));
        }
      }
    },
    [profiles, searchText]
  );

  useEffect(() => {
    updateFilteredProfiles();
  }, [searchText, updateFilteredProfiles]);

  if (!initialProfiles)
    return (
      <LandingProfiles>
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
      </LandingProfiles>
    );

  return (
    <LandingProfiles>
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
        {filteredProfiles.reverse().map((profile) => (
          <li key={profile}>
            <ProfileCard profile={profile} />
          </li>
        ))}
      </ul>
    </LandingProfiles>
  );
}

export async function getServerSideProps() {
  try {
    const profiles = await profileAirtable.select({}).firstPage();
    const aproovedProfiles = profiles.filter(
      (profile) => profile.fields.approved === "yes"
    );
    return {
      props: {
        initialProfiles: minifyItems(aproovedProfiles),
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
