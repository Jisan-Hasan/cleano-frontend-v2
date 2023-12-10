"use client";

import { useVerifyEmailQuery } from "@/redux/api/authApi";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Loading from "../loading";

const VerifyEmailPage = () => {
    const search = useSearchParams();
    const router = useRouter();

    const token = search.get("token");

    const { data, isLoading, error, isError } = useVerifyEmailQuery(token);

    if (isLoading) {
        return <Loading />;
    }

    if (isError && error) {
        // @ts-ignore
        toast.error(error?.data?.message || "An error occurred. Try Again");
        router.push("/register");
    }

    if (data) {
        toast.success(data?.message || "Email Verified Successfully");
        router.push("/login");
    }

    return <Loading />;
};

export default VerifyEmailPage;
