import * as yup from "yup";

export const createServiceSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().optional(),
    price: yup.number().required("Price is required"),
    image: yup.string(),
});
