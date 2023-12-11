import * as yup from "yup";

export const createServiceSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    price: yup
        .number()
        .required("Price is required")
        .positive("Price should be a positive number")
        .typeError("Price should be a number"),
    image: yup.string().optional(),
});
