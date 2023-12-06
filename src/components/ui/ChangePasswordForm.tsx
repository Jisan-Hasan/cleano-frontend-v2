"use client";

import { changePasswordSchema } from "@/schemas/auth.schema";
import { useYupValidationResolver } from "@/utils/schema-validator";
import { TextInput } from "keep-react";
import { Eye, EyeSlash, Lock } from "phosphor-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";

type Inputs = {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
};

const ChangePasswordForm = () => {
    const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<boolean>(false);
    const resolver = useYupValidationResolver(changePasswordSchema);

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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* old password */}
                <div>
                    <div className="flex justify-between">
                        <label
                            htmlFor="oldPassword"
                            className="text-metal-700 text-lg "
                        >
                            Old Password*
                        </label>
                        <label
                            htmlFor="oldPassword"
                            className="text-metal-700 text-sm"
                        >
                            <span
                                className="cursor-pointer hover:text-[#51B765]"
                                onClick={() =>
                                    setShowOldPassword(!showOldPassword)
                                }
                            >
                                {showOldPassword ? (
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
                        color={errors.oldPassword ? "error" : "gray"}
                        sizing="lg"
                        type={showOldPassword ? "text" : "password"}
                        addon={
                            <Lock
                                size={20}
                                color={
                                    errors.oldPassword ? "#E53935" : "#5E718D"
                                }
                            />
                        }
                        addonPosition="left"
                        {...register("oldPassword", { required: true })}
                    />
                    <div className="flex justify-between">
                        <label htmlFor="email" className="text-red-600 text-sm">
                            {errors.oldPassword?.message || (
                                <span className="invisible">Nothing</span>
                            )}
                        </label>
                    </div>
                </div>
                {/* New password */}
                <div>
                    <div className="flex justify-between">
                        <label
                            htmlFor="newPassword"
                            className="text-metal-700 text-lg "
                        >
                            New Password*
                        </label>
                        <label
                            htmlFor="newPassword"
                            className="text-metal-700 text-sm"
                        >
                            <span
                                className="cursor-pointer hover:text-[#51B765]"
                                onClick={() =>
                                    setShowNewPassword(!showNewPassword)
                                }
                            >
                                {showNewPassword ? (
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
                        color={errors.newPassword ? "error" : "gray"}
                        sizing="lg"
                        type={showNewPassword ? "text" : "password"}
                        addon={
                            <Lock
                                size={20}
                                color={
                                    errors.newPassword ? "#E53935" : "#5E718D"
                                }
                            />
                        }
                        addonPosition="left"
                        {...register("newPassword", { required: true })}
                    />
                    <div className="flex justify-between">
                        <label htmlFor="email" className="text-red-600 text-sm">
                            {errors.newPassword?.message || (
                                <span className="invisible">Nothing</span>
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
                                    setShowConfirmPassword(!showConfirmPassword)
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
                        color={errors.confirmPassword ? "error" : "gray"}
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
                                <span className="invisible">Nothing</span>
                            )}
                        </label>
                    </div>
                </div>

                <div className="mt-2">
                    <PrimaryButton>Change Password</PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default ChangePasswordForm;
