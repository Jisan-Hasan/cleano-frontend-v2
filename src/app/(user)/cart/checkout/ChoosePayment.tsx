"use client";
import { Label, Radio } from "keep-react";
import { useState } from "react";

export const ChoosePayment = () => {
    const [selected, setSelected] = useState("");

    const handleOptionChange = (event: any) => {
        setSelected(event.target.value);
    };

    return (
        <fieldset className="flex flex-col gap-3" id="radio">
            <legend className="mb-3">Choose your Payment Method</legend>
            <div className="flex items-center gap-2">
                <Radio
                    sizing="lg"
                    id="card"
                    name="paymentMethod"
                    selected={selected}
                    onOptionChange={handleOptionChange}
                    radioShape="square"
                    value="card"
                />
                <Label htmlFor="card">Credit / Debit Card</Label>
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
                />
                <Label htmlFor="paypal">Paypal</Label>
            </div>
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
                    id="country-4"
                    name="paymentMethod"
                    selected={selected}
                    onOptionChange={handleOptionChange}
                    radioShape="square"
                    value="China"
                    disabled={true}
                />
                <Label htmlFor="country-4" disabled={true}>
                    SSL Commerz
                </Label>
            </div>
        </fieldset>
    );
};
