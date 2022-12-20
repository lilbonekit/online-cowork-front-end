import abiJSON from "./Profiles.json";
import { ethers } from "ethers";

function connectProfilesContract() {
  const contractAddress = "0x361de48197120A4678abDAC2b153D16146E26f14";

  const contractABI = abiJSON.abi;
  let profileContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      profileContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      ); // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return profileContract;
}

export default connectProfilesContract;
