"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SocialLogin from "@/components/ui/SocialLogin";
import Spinner from "@/components/ui/Spinner";
import { useSignupMutation } from "@/redux/api/authApi";
import { registerSchema } from "@/schemas/auth.schema";
import { useYupValidationResolver } from "@/utils/schema-validator";
import { TextInput } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Envelope, Eye, EyeSlash, Lock, User } from "phosphor-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import registerImage from "../../../assets/images/register-image.png";

type Inputs = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<boolean>(false);
    const resolver = useYupValidationResolver(registerSchema);

    const [signup, { isLoading }] = useSignupMutation();

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>({ resolver });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const signupData = {
            name: data.name,
            email: data.email,
            password: data.password,
        };
        try {
            signup({ ...signupData })
                .unwrap()
                .then((res) => {
                    // Show a success toast
                    toast.success(res.message || "Registration Successful");

                    // Redirect to the login page
                    router.push("/login");
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.data.message || "Registration Failed");
                });
        } catch (error: any) {
            toast.error(error.data.message || "Registration Failed. Try Again");
        }
        reset();
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 2xl:px-0 py-5 md:py-20">
            <div className="lg:grid grid-cols-2 gap-10 items-center justify-center">
                <div className="hidden lg:flex">
                    <Image src={registerImage} alt="Login Logo" />
                </div>
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-8xl font-bold font-sans text-[#51B765]">
                        Register a new account
                    </h1>
                    <p className="mt-2 mb-6">
                        Already have an account?{" "}
                        <Link href="/login" className="text-[#51B765]">
                            Login
                        </Link>
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="text-metal-700 text-lg"
                            >
                                Name*
                            </label>
                            <TextInput
                                sizing="lg"
                                placeholder="Enter your name"
                                color={errors.name ? "error" : "gray"}
                                type="text"
                                addon={
                                    <User
                                        size={20}
                                        color={
                                            errors.name ? "#E53935" : "#5E718D"
                                        }
                                    />
                                }
                                addonPosition="left"
                                {...register("name", { required: true })}
                            />
                            <label
                                htmlFor="name"
                                className="text-red-600 text-sm"
                            >
                                {errors.name?.message || (
                                    <span className="invisible">Error</span>
                                )}
                            </label>
                        </div>
                        {/* email */}
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
                        {/* password */}
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
                                id="#id-10"
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
                            </div>
                        </div>

                        {/* confirm password */}
                        <div>
                            <div className="flex justify-between">
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-metal-700 text-lg "
                                >
                                    Confirm Password*
                                </label>
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-metal-700 text-sm"
                                >
                                    <span
                                        className="cursor-pointer hover:text-[#51B765]"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <Eye size={20} />
                                        ) : (
                                            <EyeSlash size={20} />
                                        )}
                                    </span>
                                </label>
                            </div>
                            <TextInput
                                id="#id-10"
                                placeholder="*************"
                                color={
                                    errors.confirmPassword ? "error" : "gray"
                                }
                                sizing="lg"
                                type={showConfirmPassword ? "text" : "password"}
                                addon={
                                    <Lock
                                        size={20}
                                        color={
                                            errors.confirmPassword
                                                ? "#E53935"
                                                : "#5E718D"
                                        }
                                    />
                                }
                                addonPosition="left"
                                {...register("confirmPassword", {
                                    required: true,
                                })}
                            />
                            <div className="flex justify-between">
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-red-600 text-sm"
                                >
                                    {errors.confirmPassword?.message || (
                                        <span className="invisible">
                                            Nothing
                                        </span>
                                    )}
                                </label>
                            </div>
                        </div>

                        <div className="mt-2">
                            <PrimaryButton>
                                {isLoading ? (
                                    <Spinner />
                                ) : (
                                    "Register New Account"
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

export default RegisterPage;
