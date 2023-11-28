"use client";

import { TextInput } from "keep-react";
import { Envelope, House, IdentificationCard, Phone } from "phosphor-react";

const PickupLocationForm = () => {
    return (
        <div>
            <form className="space-y-4">
                <div className="md:grid grid-cols-2 gap-3 space-y-4 md:space-y-0">
                    <TextInput
                        placeholder="First Name"
                        color="gray"
                        sizing="md"
                        addon={<IdentificationCard size={20} color="#5E718D" />}
                        addonPosition="left"
                    />
                    <TextInput
                        placeholder="Last Name"
                        color="gray"
                        sizing="md"
                        addon={<IdentificationCard size={20} color="#5E718D" />}
                        addonPosition="left"
                    />
                </div>
                <div className="md:grid grid-cols-2 gap-3 space-y-4 md:space-y-0">
                    <TextInput
                        placeholder="Your Email Address"
                        color="gray"
                        sizing="md"
                        addon={<Envelope size={20} color="#5E718D" />}
                        addonPosition="left"
                    />
                    <TextInput
                        placeholder="Your Phone Number"
                        color="gray"
                        sizing="md"
                        addon={<Phone size={20} color="#5E718D" />}
                        addonPosition="left"
                    />
                </div>
                <div className="md:grid grid-cols-2 gap-3 space-y-4 md:space-y-0">
                    <TextInput
                        placeholder="Your Email Address"
                        color="gray"
                        sizing="md"
                        addon={<House size={20} color="#5E718D" />}
                        addonPosition="left"
                    />
                    <TextInput
                        placeholder="Your Phone Number"
                        color="gray"
                        sizing="md"
                        addon={<House size={20} color="#5E718D" />}
                        addonPosition="left"
                    />
                </div>
            </form>
        </div>
    );
};

export default PickupLocationForm;
