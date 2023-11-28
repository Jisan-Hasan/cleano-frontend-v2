"use client";

import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import { DatePickerComponent } from "@/components/ui/DatePickerComponent";
import { TimePickerComponent } from "@/components/ui/TimePickerComponent";
import { ChoosePayment } from "./ChoosePayment";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import PickupLocationForm from "./PickupLocationForm";

const items = [
    {
        label: "Cart",
        link: "/cart",
    },
    {
        label: "Checkout",
        link: "/cart/checkout",
    },
];

const CheckoutPage = () => {
    return (
        <div>
            <BreadCrumbComponent title="Checkout" items={items} />
            <div className="max-w-screen-xl mx-auto px-4 2xl:px-0 py-5 lg:py-10">
                <div className="lg:grid grid-cols-3 gap-5">
                    <div className="col-span-2">
                        {/* Pickup Location */}
                        <div>
                            <h3 className="bg-[#F1F1F1] border-b px-3 py-2 text-lg tracking-wide">
                                Pickup Location
                            </h3>

                            <div className="my-5">
                                <PickupLocationForm />
                            </div>
                        </div>
                        {/* Pickup time and date */}
                        <div>
                            <h3 className="bg-[#F1F1F1] border-b px-3 py-2 text-lg tracking-wide">
                                Pickup Date and Time
                            </h3>

                            <div className="my-5 flex gap-5">
                                <div>
                                    <label className="block">
                                        Select Pickup Date
                                    </label>
                                    <DatePickerComponent />
                                </div>
                                <div>
                                    <label className="block">
                                        Select Pickup Time
                                    </label>
                                    <TimePickerComponent />
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div>
                            <h3 className="bg-[#F1F1F1] border-b px-3 py-2 text-lg tracking-wide">
                                Choose Payment Method
                            </h3>

                            <div className="my-5 flex gap-5">
                                <ChoosePayment />
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <CheckoutOrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
