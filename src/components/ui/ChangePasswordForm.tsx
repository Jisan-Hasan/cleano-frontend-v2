"use client";

import { useChangePasswordMutation } from "@/redux/api/authApi";
import { changePasswordSchema } from "@/schemas/auth.schema";
import { useYupValidationResolver } from "@/utils/schema-validator";
import { TextInput } from "keep-react";
import { Eye, EyeSlash, Lock } from "phosphor-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
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

  // react-hook-form stuff
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ resolver });

  // change password mutation hook
  const [changePassword, { data, isSuccess, isLoading, isError, error }] =
    useChangePasswordMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // check if new password and confirm password are same
    if (data.newPassword !== data.confirmPassword) {
      toast.error("New password and confirm password must be same");
      return;
    }

    // call change password mutation
    await changePassword({
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    });

    // reset form
    reset();
  };

  //  change password mutation hook effects handling
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Password changed successfully");
    }
    if (isError) {
      // @ts-ignore
      toast.error(error?.data?.message || "Something went wrong");
    }
  }, [isSuccess, isError, data, error]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* old password */}
        <div>
          <div className="flex justify-between">
            <label htmlFor="oldPassword" className="text-metal-700 text-lg ">
              Old Password*
            </label>
            <label htmlFor="oldPassword" className="text-metal-700 text-sm">
              <span
                className="cursor-pointer hover:text-[#51B765]"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
              </span>
            </label>
          </div>
          <TextInput
            placeholder="*************"
            color={errors.oldPassword ? "error" : "gray"}
            sizing="lg"
            type={showOldPassword ? "text" : "password"}
            addon={
              <Lock
                size={20}
                color={errors.oldPassword ? "#E53935" : "#5E718D"}
              />
            }
            addonPosition="left"
            {...register("oldPassword", { required: true })}
          />
          <div className="flex justify-between">
            <label htmlFor="email" className="text-sm text-red-600">
              {errors.oldPassword?.message || (
                <span className="invisible">Nothing</span>
              )}
            </label>
          </div>
        </div>
        {/* New password */}
        <div>
          <div className="flex justify-between">
            <label htmlFor="newPassword" className="text-metal-700 text-lg ">
              New Password*
            </label>
            <label htmlFor="newPassword" className="text-metal-700 text-sm">
              <span
                className="cursor-pointer hover:text-[#51B765]"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
              </span>
            </label>
          </div>
          <TextInput
            placeholder="*************"
            color={errors.newPassword ? "error" : "gray"}
            sizing="lg"
            type={showNewPassword ? "text" : "password"}
            addon={
              <Lock
                size={20}
                color={errors.newPassword ? "#E53935" : "#5E718D"}
              />
            }
            addonPosition="left"
            {...register("newPassword", { required: true })}
          />
          <div className="flex justify-between">
            <label htmlFor="email" className="text-sm text-red-600">
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
            <label htmlFor="confirmPassword" className="text-metal-700 text-sm">
              <span
                className="cursor-pointer hover:text-[#51B765]"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
            placeholder="*************"
            color={errors.confirmPassword ? "error" : "gray"}
            sizing="lg"
            type={showConfirmPassword ? "text" : "password"}
            addon={
              <Lock
                size={20}
                color={errors.confirmPassword ? "#E53935" : "#5E718D"}
              />
            }
            addonPosition="left"
            {...register("confirmPassword", {
              required: true,
            })}
          />
          <div className="flex justify-between">
            <label htmlFor="confirmPassword" className="text-sm text-red-600">
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
