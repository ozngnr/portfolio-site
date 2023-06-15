import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_PD_URL;

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    try {
      await axios.post(BASE_URL, data);
      return res.status(200).json("Email sent successfully!");
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad Request" });
};

export default handler;
