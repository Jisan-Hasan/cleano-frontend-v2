"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SocialLogin from "@/components/ui/SocialLogin";
import Spinner from "@/components/ui/Spinner";
import { useLoginMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/app/hooks";
import { setToken } from "@/redux/features/authSlice";
import { loginSchema } from "@/schemas/auth.schema";
import { getUserInfo } from "@/utils/auth";
import { useYupValidationResolver } from "@/utils/schema-validator";
import { TextInput } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Envelope, Eye, EyeSlash, Lock } from "phosphor-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import loginImage from "../../../assets/images/login-image.png";

type Inputs = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const resolver = useYupValidationResolver(loginSchema);

    const dispatch = useAppDispatch();
    const router = useRouter();

    // Get the redirect path from the query params
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect");

    const [login, { isLoading }] = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>({ resolver });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            login({ ...data })
                .unwrap()
                .then((data) => {
                    // Set the token in the redux store
                    dispatch(setToken(data?.data?.accessToken));
                    // Show a success toast
                    toast.success(data.message || "Login Successful");

                    // get user role
                    const { role } = getUserInfo();
                    console.log(role);

                    // Redirect to the admin dashboard if the user is an admin
                    if (role === "admin") {
                        router.push("/admin");
                    } else if (role === "user") {
                        router.push(redirectTo || "/");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(
                        err?.error || err?.data?.message || "Login Failed"
                    );
                });
        } catch (error: any) {
            toast.error(error?.data?.message || "Login Failed. Try Again");
        }

        reset();
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 2xl:px-0 py-5 md:py-20">
            <div className="lg:grid grid-cols-2 gap-10 items-center justify-center">
                <div className="hidden lg:flex">
                    <Image src={loginImage} alt="Login Logo" />
                </div>
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-8xl font-bold font-sans text-[#51B765]">
                        Login to your account
                    </h1>
                    <p className="mt-2 mb-6">
                        Don&apos; have an account?{" "}
                        <Link href="/register" className="text-[#51B765]">
                            Create here
                        </Link>
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label
                                htmlFor="email"
                                className="text-metal-700 text-lg"
                            >
                                Email*
                            </label>
                            <TextInput
                                sizing="lg"
                                placeholder="Enter your email"
                                color={errors.email ? "error" : "gray"}
                                type="email"
                                addon={
                                    <Envelope
                                        size={20}
                                        color={
                                            errors.email ? "#E53935" : "#5E718D"
                                        }
                                    />
                                }
                                addonPosition="left"
                                {...register("email", { required: true })}
                            />
                            <label
                                htmlFor="email"
                                className="text-red-600 text-sm"
                            >
                                {errors.email?.message || (
                                    <span className="invisible">Error</span>
                                )}
                            </label>
                        </div>

                        <div>
                            <div className="flex justify-between">
                                <label
                                    htmlFor="password"
                                    className="text-metal-700 text-lg "
                                >
                                    Password*
                                </label>
                                <label
                                    htmlFor="password"
                                    className="text-metal-700 text-sm"
                                >
                                    <span
                                        className="cursor-pointer hover:text-[#51B765]"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <Eye size={20} />
                                        ) : (
                                            <EyeSlash size={20} />
                                        )}
                                    </span>
                                </label>
                            </div>
                            <TextInput
                                placeholder="*************"
                                color={errors.password ? "error" : "gray"}
                                sizing="lg"
                                type={showPassword ? "text" : "password"}
                                addon={
                                    <Lock
                                        size={20}
                                        color={
                                            errors.password
                                                ? "#E53935"
                                                : "#5E718D"
                                        }
                                    />
                                }
                                addonPosition="left"
                                {...register("password", { required: true })}
                            />
                            <div className="flex justify-between">
                                <label
                                    htmlFor="email"
                                    className="text-red-600 text-sm"
                                >
                                    {errors.password?.message || (
                                        <span className="invisible">
                                            Nothing
                                        </span>
                                    )}
                                </label>
                                <Link
                                    href="/forget-password"
                                    className="text-sm hover:text-[#51B765]"
                                >
                                    Forget Password?
                                </Link>
                            </div>
                        </div>

                        <div className="mt-2">
                            <PrimaryButton disabled={isLoading}>
                                {isLoading ? (
                                    <Spinner />
                                ) : (
                                    "Login to my Account"
                                )}
                            </PrimaryButton>
                        </div>
                    </form>
                    <hr className="my-5" />
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
