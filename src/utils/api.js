import axios from "axios";

const BASE_URI = "https://motivatemebackend.onrender.com";

export const sendMail = async (formData) => {
  const { email, subject, message } = formData;
  const res = await axios.post(`${BASE_URI}/send-mail`, {
    email,
    subject,
    message,
  });
  console.log("mailsend success");
  return res.data;
};
