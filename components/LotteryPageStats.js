import React, { useContext, useEffect, useState } from "react";
// import { HiOutlineInformationCircle } from "react-icons/hi";
// import { GiPartyPopper } from "react-icons/gi";
import { LotteryContext } from "../context/lottery";

const LotteryPageStats = ({ initialItems, approvedProfiles }) => {
  const { lotteryState } = useContext(LotteryContext);
  const [maticPrice, setMaticPrice] = useState(0);
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);

  useEffect(() => {
    const getPrice = async () => {
      const res = await fetch("/api/getPrice", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const price = await res.json();
      setMaticPrice(price.USD);
    };

    getPrice();
  }, []);

  useEffect(() => {
    if (lotteryState) {
      let numberOfPlayers = 0;
      const tasks = lotteryState.players;
      approvedProfiles.map((approvedProfile) => {
        if (
          tasks.filter((task) => task === approvedProfile.fields.walletAddress)
            .length > 0
        )
          numberOfPlayers++;
      });
      setNumberOfPlayers(numberOfPlayers);
    }
  }, [lotteryState, approvedProfiles]);

  return (
    <section className="py-12 mb-8 lg:mb-12 mt-6 sm:py-16 lg:py-24 xl:py-24 bg-coworkblue start-here-btn">
      <div className="px-12 mx-auto sm:px-6 lg:px-20 max-w-7xl text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="pt-4 pb-8 lg:pr-8">
            <p className="text-4xl pb-4 lg:text-5xl font-semibold tracking-tight text-coworkdarkbeige">
              {lotteryState ? lotteryState.numberOfPlayers : 0}
            </p>
            <h3 className="mt-3 text-base font-light text-white">
              Tasks Added This Round
            </h3>
          </div>

          <div className="pt-4 pb-8 lg:pb-12 lg:pl-8 lg:border-l lg:border-gray-200 border-l-transparent ">
            <p className="text-4xl pb-4 lg:text-5xl font-semibold tracking-tight text-pink-500">
              ~ $
              {lotteryState
                ? (
                    (maticPrice *
                      lotteryState.balance *
                      lotteryState.winningPercentageForWinner) /
                    100
                  ).toFixed(2)
                : 0}
            </p>
            <h3 className="mt-3 text-base font-semibold text-pink-500">
              Up for Grabs! (Equiv.{" "}
              {lotteryState
                ? (lotteryState.balance *
                    lotteryState.winningPercentageForWinner) /
                  100
                : 0}{" "}
              MATIC)
            </h3>
          </div>

          <div className="pt-4 pb-4 lg:mt-7 lg:pr-8  border-l-transparent ">
            <p className="text-4xl pb-4 lg:text-5xl font-semibold tracking-tight text-coworkdarkbeige">
              {numberOfPlayers}
            </p>
            <h3 className="mt-3 text-base font-light text-white">
              Participants This Round
            </h3>
          </div>

          <div className="pt-8 pb-4 mt-3 lg:mt-0 lg:pl-8 lg:border-t lg:border-l lg:border-gray-200 border-l-transparent border-t-transparent sm:pt-12 ">
            <p className="text-4xl pb-4 lg:text-5xl font-semibold tracking-tight text-coworkdarkbeige">
              27 May 2022
            </p>
            <h3 className="mt-3 text-base font-light text-white">
              Next Draw - {lotteryState ? lotteryState.numberOfWinners : 1}
              &nbsp;&nbsp;Lucky Winner!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LotteryPageStats;
