"use client";

import { DatePicker } from "keep-react";
import { useState } from "react";

export const DatePickerComponent = () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
        <DatePicker singleDatePicker={setDate}>
            <DatePicker.SingleDate />
        </DatePicker>
    );
};
