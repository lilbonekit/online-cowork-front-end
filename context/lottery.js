import { createContext, useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const LotteryContext = createContext();

const LotteryProvider = ({ children }) => {
  const [lotteryContract, setLotteryContract] = useState(null);
  const [lotteryState, setLotteryState] = useState(null);

  const getLotteryState = async () => {
    try {
      const balance = await lotteryContract.getBalance();
      const entranceFee = await lotteryContract.getEntranceFee();
      const interval = await lotteryContract.getInterval();
      const players = await lotteryContract.getPlayers();
      const recentWinners = await lotteryContract.getRecentWinners();
      const recentWinningAmounts =
        await lotteryContract.getRecentWinningAmounts();
      const lotteryStatus = await lotteryContract.getLotteryState();
      const numberOfWinners = await lotteryContract.getNumberOfWinners();
      const numberOfPlayers = await lotteryContract.getNumberOfPlayers();
      const winningPercentageForWinner =
        await lotteryContract.getWinningPercentageForWinner();
      setLotteryState({
        balance: ethers.utils.formatEther(balance),
        entranceFee: ethers.utils.formatEther(entranceFee),
        interval: parseInt(interval),
        players,
        recentWinners,
        recentWinningAmounts: recentWinningAmounts.map((amount) =>
          ethers.utils.formatEther(amount)
        ),
        lotteryStatus,
        numberOfWinners,
        numberOfPlayers,
        winningPercentageForWinner,
      });
    } catch (error) {
      toast.warn("Something went wrong! 😕");
      console.log(error);
    }
  };

  const listenLotteryEvents = () => {
    lotteryContract.on("PlayerEnteredToLottery", async (player) => {
      console.log("PlayerEnteredToLottery:", player);
      await getLotteryState();
      toast.info(`One Player Entered to Lottery: ${player}`, {
        autoClose: 5000,
      });
    });
    lotteryContract.on("WinnerPicked", async (winner) => {
      console.log("WinnerPicked:", winner);
      await getLotteryState();
      toast.success(`Winner Picked: ${winner}`, { autoClose: 5000 });
    });
    lotteryContract.on("TransferWinningToWinner", async (winner, amount) => {
      console.log("TransferWinningToWinner:", winner);
      await getLotteryState();
      toast.info(
        `Transfer Winning to: ${winner} with ${ethers.utils.formatEther(
          amount
        )}`,
        { autoClose: 5000 }
      );
    });
  };

  return (
    <LotteryContext.Provider
      value={{
        lotteryContract,
        setLotteryContract,
        lotteryState,
        setLotteryState,
        getLotteryState,
        listenLotteryEvents,
      }}
    >
      {children}
    </LotteryContext.Provider>
  );
};

export { LotteryContext, LotteryProvider };
