import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2)
    .max(50)
    .required("Name is required")
    .label("Name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string()
    .min(2)
    .max(100)
    .required("Subject is required")
    .label("Subject"),
  message: Yup.string()
    .min(5)
    .max(200)
    .required("Message can't be empty")
    .label("Message"),
});
