import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
        .string()
        .email("Provide a valid Email address")
        .required("Email is required"),
    message: yup.string().required("Message is required"),
});
