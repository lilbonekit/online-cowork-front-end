import { profileAirtable, minifyItems } from "../../utils/airtable";

const handler = async (req, res) => {
  const { id, fields } = req.body;

  try {
    const record = await profileAirtable.update([
      {
        id,
        fields,
      },
    ]);
    res.status(200).json(record);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};

export default handler;
