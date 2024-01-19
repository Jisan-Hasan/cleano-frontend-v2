"use client";

import { TextInput } from "keep-react";
import { Envelope, House, IdentificationCard, Phone } from "phosphor-react";

const PickupLocationForm = ({ register, errors }: any) => {
  return (
    <div>
      <div className="space-y-4">
        <div className="grid-cols-2 gap-3 space-y-4 md:grid md:space-y-0">
          <div>
            <TextInput
              placeholder="First Name"
              color="gray"
              sizing="md"
              addon={<IdentificationCard size={20} color="#5E718D" />}
              addonPosition="left"
              {...register("firstName", {
                required: "*First Name is required",
              })}
            />
            {errors && errors?.firstName && (
              <span className="text-sm text-red-400">
                {errors?.firstName?.message || "*Invalid First Name"}
              </span>
            )}
          </div>
          <div>
            <TextInput
              placeholder="Last Name"
              color="gray"
              sizing="md"
              addon={<IdentificationCard size={20} color="#5E718D" />}
              addonPosition="left"
              {...register("lastName", { required: "*Last Name is Required" })}
            />
            {errors && errors?.lastName && (
              <span className="text-sm text-red-400">
                {errors?.lastName?.message || "*Invalid Last Name"}
              </span>
            )}
          </div>
        </div>
        <div className="grid-cols-2 gap-3 space-y-4 md:grid md:space-y-0">
          <div>
            <TextInput
              placeholder="Your Email Address"
              color="gray"
              sizing="md"
              addon={<Envelope size={20} color="#5E718D" />}
              addonPosition="left"
              {...register("email", { required: "*Email is required" })}

              // control={control}
            />
            {errors && errors?.email && (
              <span className="text-sm text-red-400">
                {errors?.email?.message || "*Invalid Email Input"}
              </span>
            )}
          </div>
          <div>
            <TextInput
              placeholder="Your Phone Number"
              color="gray"
              sizing="md"
              addon={<Phone size={20} color="#5E718D" />}
              addonPosition="left"
              {...register("phone", { required: "*Phone is required" })}
            />
            {errors && errors?.phone && (
              <span className="text-sm text-red-400">
                {errors?.phone?.message || "*Invalid Phone Input"}
              </span>
            )}
          </div>
        </div>
        <div className="grid-cols-2 gap-3 space-y-4 md:grid md:space-y-0">
          <div>
            <TextInput
              placeholder="Address Line 1"
              color="gray"
              sizing="md"
              addon={<House size={20} color="#5E718D" />}
              addonPosition="left"
              {...register("address1", {
                required: "*Address Line 1 is required",
              })}
            />
            {errors && errors?.address1 && (
              <span className="text-sm text-red-400">
                {errors?.address1?.message || "*Invalid Address Input"}
              </span>
            )}
          </div>
          <div>
            <TextInput
              placeholder="Address Line 2"
              color="gray"
              sizing="md"
              addon={<House size={20} color="#5E718D" />}
              addonPosition="left"
              {...register("address2", { required: false })}
            />
            {errors && errors?.address2 && (
              <span className="text-sm text-red-400">
                {errors?.address2?.message || "*Invalid Address Input"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupLocationForm;
