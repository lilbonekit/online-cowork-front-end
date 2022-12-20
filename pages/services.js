import LandingServices from "../components/LandingServices";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import ProfileCard from "../components/ProfileCard";

const LATEST_PROFILES = gql`
  query Profiles {
    profiles(where: { isDisabled: false }) {
      id
      firstName
      jobTitle
      imageURL
    }
  }
`;

// const UPCOMING_EVENTS = gql`
//   query Events($currentTimestamp: String) {
//     events(
//       where: { eventTimestamp_gt: $currentTimestamp }
//       orderBy: eventTimestamp
//       orderDirection: desc
//     ) {
//       id
//       name
//       eventTimestamp
//       imageURL
//     }
//   }
// `;

export default function Services() {
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const [currentTimestamp, setCurrentTimestamp] = useState(
  //   new Date().getTime().toString()
  // );

  const { loading, error, data, refetch } = useQuery(LATEST_PROFILES, {
    variables: { searchText },
  });

  function searchInputHandler(e) {
    setSearchText(e.target.value);
  }

  function updateFilteredProfiles() {
    if (data?.profiles) {
      if (!searchText) {
        setFilteredProfiles(data.profiles);
      } else {
        setFilteredProfiles(
          data.profiles.filter((profile) =>
            profile.firstName.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      }
    }
  }

  useEffect(() => {
    updateFilteredProfiles();
  }, [searchText, data]);

  if (loading)
    return (
      <LandingServices>
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
      </LandingServices>
    );
  if (error)
    return (
      <LandingServices>
        <p>`Error! ${error.message}`</p>
      </LandingServices>
    );

  return (
    <LandingServices>
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
        {filteredProfiles.map((profile) => (
          <li key={profile.id}>
            <ProfileCard
              id={profile.id}
              firstName={profile.firstName}
              // eventTimestamp={event.eventTimestamp}
              imageURL={profile.imageURL}
              // eventCost={event.cost}
              jobTitle={profile.jobTitle}
            />
          </li>
        ))}
      </ul>
    </LandingServices>
  );
}
