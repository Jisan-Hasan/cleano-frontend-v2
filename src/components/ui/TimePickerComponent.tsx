"use client";

import { DatePicker } from "keep-react";
import { useState } from "react";

export const TimePickerComponent = () => {
    const [time, setTime] = useState<string | Date | undefined | null>(null);
    return (
        <DatePicker timePicker={setTime}>
            <DatePicker.Time />
        </DatePicker>
    );
};
