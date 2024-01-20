"use client";

import { DatePicker } from "keep-react";
import { useEffect, useState } from "react";

// get only the hours from the time string -> ex: '11:55pm' -> 23 , '11:55am' -> 11, '11:00pm' -> 23
const getHours = (time: string) => {
  // get the hour
  const hour = parseInt(time.split(":")[0]);
  // get the am or pm
  const amOrPm = time.split(":")[1].slice(-2);
  // if pm add 12 to the hour
  if (amOrPm === "pm") {
    return hour + 12;
  }
  // if am and hour is 12 set hour to 0
  else if (amOrPm === "am" && hour === 12) {
    return 0;
  }
  // if am and hour is not 12 set hour to hour
  else {
    return hour;
  }
};

interface IPageProps {
  setValue: any;
  setError: any;
  clearErrors: any;
  getValues: any;
}

export const TimePickerComponent = ({
  setValue,
  setError,
  clearErrors,
  getValues,
}: IPageProps) => {
  const [time, setTime] = useState<string | Date | undefined | null>(null);

  //   get the date from the date picker component
  const date = getValues("date");


  //   check if date is today
  const isToday =
    new Date(date).getDate() == new Date().getDate() ? true : false;

  useEffect(() => {
    setValue("time", time != null ? time : null);

    if (time == null) {
      setError("time", {
        type: "manual",
        message: "Please select a time",
      });
    }
    // if time is not between 9am and 9pm set error -> time example '11:55pm'
    else if (getHours(time as string) < 9 || getHours(time as string) > 21) {
      setError("time", {
        type: "manual",
        message: "Time must be between 9am and 10pm",
      });
    } else {
      clearErrors("time");
    }
  }, [time, setValue, setError, clearErrors]);

  return (
    <DatePicker timePicker={setTime}>
      <DatePicker.Time />
    </DatePicker>
  );
};
