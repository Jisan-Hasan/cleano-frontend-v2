"use client";

import { DatePicker } from "keep-react";
import { useEffect, useState } from "react";

// get only the date
const getOnlyDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const DatePickerComponent = ({
  setValue,
  setError,
  clearErrors,
}: any) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setValue("date", date != null ? getOnlyDate(date) : null);

    if (date == null) {
      setError("date", {
        type: "manual",
        message: "Please select a date",
      });
    }
    // if date is less than today set error but not if date is today
    else if (
      date < new Date(new Date().setDate(new Date().getDate() - 1)) &&
      date != new Date()
    ) {
      setError("date", {
        type: "manual",
        message: "Date must be in the future",
      });
    }
    // if date is more than 7 days from now set error
    else if (date > new Date(new Date().setDate(new Date().getDate() + 7))) {
      setError("date", {
        type: "manual",
        message: "Date must be within 7 days",
      });
    }
    // if date is valid clear error
    else {
      clearErrors("date");
    }
  }, [date]);

  return (
    <DatePicker singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
};
