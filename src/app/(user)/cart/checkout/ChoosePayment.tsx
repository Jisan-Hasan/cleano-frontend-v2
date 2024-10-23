"use client";
import { Label, Radio } from "keep-react";
import { useEffect, useState } from "react";

export const ChoosePayment = ({
  setValue,
  setError,
  clearErrors,
  errors,
}: any) => {
  const [selected, setSelected] = useState("");

  const handleOptionChange = (event: any) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    setValue("paymentMethod", selected != "" ? selected : null);

    if (selected == "") {
      setError("paymentMethod", {
        type: "manual",
        message: "Please select a payment method",
      });
    } else {
      clearErrors("paymentMethod");
    }
  }, [selected, setValue, setError, clearErrors]);

  return (
    <fieldset className="flex flex-col gap-3" id="radio">
      <legend className="mb-3">Choose your Payment Method</legend>
      {errors && errors?.paymentMethod && (
        <div className="text-sm text-red-400">
          {(errors?.paymentMethod?.message as String) ||
            "*Please select a payment method"}
        </div>
      )}
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="cash"
          name="paymentMethod"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="cash"
        />
        <Label htmlFor="cash">Cash on Pickup</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="card"
          name="paymentMethod"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="card"
          disabled={true}
        />
        <Label htmlFor="card" disabled={true}>
          Credit / Debit Card
        </Label>
      </div>

      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="paypal"
          name="paymentMethod"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="paypal"
          disabled={true}
        />
        <Label htmlFor="paypal" disabled={true}>
          Paypal
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          sizing="lg"
          id="country-4"
          name="paymentMethod"
          selected={selected}
          onOptionChange={handleOptionChange}
          radioShape="square"
          value="ssl"
          disabled={true}
        />
        <Label htmlFor="country-4" disabled={true}>
          SSL Commerz
        </Label>
      </div>
    </fieldset>
  );
};
