import { profileAirtable, minifyItems } from "../../utils/airtable";

function toLowerCase(val) {
  return String(val).toLowerCase();
}

const handler = async (req, res) => {
  const { address } = req.query;
  try {
    const profiles = await profileAirtable.select({}).firstPage();
    const profile = minifyItems(profiles)?.find(
      (p) => toLowerCase(address) === toLowerCase(p.fields.walletAddress)
    );
    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};

export default handler;
