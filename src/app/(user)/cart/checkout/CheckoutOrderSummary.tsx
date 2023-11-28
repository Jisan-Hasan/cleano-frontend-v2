"use client";

import { NumberInput, TextInput, Textarea } from "keep-react";
import Image from "next/image";
import { useState } from "react";
import userImage from "../../../../assets/images/avatar.png";

const CheckoutOrderSummary = () => {
    const [value, setValue] = useState<number>(1);
    return (
        <div className="bg-[#F5F5F5] p-5 space-y-4">
            <div>
                <h2 className="text-xl font-medium">Order Summary</h2>
                <hr className="mt-1" />
            </div>
            {/* Services */}
            <div>
                <div>
                    <div className="flex gap-3 items-center">
                        <div className="w-20 h-20">
                            <Image src={userImage} alt="product image" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <h4 className="md:text-lg font-medium">
                                Shirt Clean & Laundry
                            </h4>
                            <div className="flex justify-between items-center">
                                <div>
                                    <NumberInput
                                        sizing="sm"
                                        value={value}
                                        setValue={setValue}
                                    />
                                </div>
                                <p className="justify-self-end">$50.00</p>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-2" />
                </div>
            </div>
            {/* Discount Form & Special Note */}
            <div>
                {/* Discount Form */}
                <div className="flex items-center gap-3">
                    <div className="flex-1">
                        <TextInput
                            id="input"
                            placeholder="Apply Discount Code"
                            color="gray"
                            sizing="sm"
                        />
                    </div>
                    <button className="bg-[#F1F1F1] px-3 py-[5px] rounded-md border">
                        Apply
                    </button>
                </div>
                {/* Add Special Note Form */}
                <div className="mt-2">
                    <Textarea
                        placeholder="Add a note for your order"
                        withBg={true}
                        color="gray"
                        border={true}
                        rows={2}
                    />
                </div>
                <hr className="mt-2" />
            </div>

            {/* Total */}
            <div className="space-y-1">
                <div className="flex justify-between">
                    <p>Cart Subtotal</p>
                    <p>$50.00</p>
                </div>
                <div className="flex justify-between">
                    <p>Discount</p>
                    <p>$0.00</p>
                </div>
                <div className="flex justify-between">
                    <p>Order Total</p>
                    <p>$0.00</p>
                </div>
            </div>
            {/* Agree With Terms and Conditions */}
            <div className="flex items-center gap-3">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">
                    I agree with the terms and conditions
                </label>
            </div>
            {/* Place Order Button */}
            <div>
                <button
                    type="submit"
                    className="w-full border-2 border-[#52B765] bg-[#52B765] text-white hover:text-[#52B765] hover:bg-white px-6 py-3 font-xl text-lg rounded-md sm:mb-0 transition-all duration-700"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutOrderSummary;
