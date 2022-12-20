const handler = async (req, res) => {
  try {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD&api_key=${process.env.NEXT_PUBLIC_CRYPTOCOMPARE_API_KEY}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const { USD } = await response.json();
    res.status(200).json({ USD });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};

export default handler;
