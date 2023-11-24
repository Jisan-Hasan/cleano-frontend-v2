"use client";

import SocialLogin from "@/components/ui/SocialLogin";
import { registerSchema } from "@/schemas/auth.schema";
import { useYupValidationResolver } from "@/utils/schema-validator";
import { TextInput } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import { Envelope, Eye, EyeSlash, Lock, User } from "phosphor-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>({ resolver });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
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
                                            errors.email
                                                ? "#E53935"
                                                : "#5E718D"
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
                            <button
                                type="submit"
                                className="text-white font-bold text-lg py-3 px-6 rounded-md w-full bg-gradient-to-r from-[#63b492] to-[#51B765]"
                            >
                                Login
                            </button>
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
