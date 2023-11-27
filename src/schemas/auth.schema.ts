import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Provide a valid Email address")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required"),
});

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name must be at most 20 characters")
        .required("Name is required"),
    email: yup
        .string()
        .email("Provide a valid Email address")
        .required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(15, "Password must be at most 15 characters")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
});

export const changePasswordSchema = yup.object().shape({
    oldPassword: yup
        .string()
        .required("Password is required"),
    newPassword: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(15, "Password must be at most 15 characters")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Passwords must match")
        .required("Confirm Password is required"),
});
