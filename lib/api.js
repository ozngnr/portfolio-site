import axios from "axios";

export const sendContactForm = async (payload) => {
  const { data } = await axios.post("/api/contact", payload);
  return data;
};
