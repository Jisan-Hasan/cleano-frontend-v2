"use client";

import { TextInput } from "keep-react";
import { BiEnvelope } from "react-icons/bi";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa6";
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-[#323232] pt-24 pb-16 px-5">
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 justify-between gap-3 space-y-5 lg:space-y-0">
                <div className="space-y-5">
                    <h1 className="text-8xl font-bold text-[#52B864]">
                        Cleano
                    </h1>
                    <p className="leading-7 text-[#E7E7E7]">
                        We are professionals in the laundry and dry cleaning
                        business, which means we always stay up to date on the
                        latest technologies and cleaning methods.
                    </p>
                    <div className="flex gap-3">
                        <div className="p-3 rounded-full cursor-pointer bg-white group hover:bg-[#52B864] transition-all duration-300">
                            <FaTwitter className="text-black group-hover:text-white transition-all duration-300" />
                        </div>
                        <div className="p-3 rounded-full cursor-pointer bg-white group hover:bg-[#52B864] transition-all duration-300">
                            <FaFacebook className="text-black group-hover:text-white transition-all duration-300" />
                        </div>
                        <div className="p-3 rounded-full cursor-pointer bg-white group hover:bg-[#52B864] transition-all duration-300">
                            <FaLinkedin className="text-black group-hover:text-white transition-all duration-300" />
                        </div>
                        <div className="p-3 rounded-full cursor-pointer bg-white group hover:bg-[#52B864] transition-all duration-300">
                            <FaInstagram className="text-black group-hover:text-white transition-all duration-300" />
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <h2 className="text-white text-3xl font-bold">Contacts</h2>
                    <div className="space-y-3">
                        <p className="flex items-center gap-3">
                            <IoLocationSharp
                                className="text-[#52B864]"
                                size={20}
                            />
                            <span className="text-[#E7E7E7]">
                                39/A, Muktijudda Road, Vatara, Badda
                            </span>
                        </p>
                        <p className="flex items-center gap-3">
                            <IoTimeOutline
                                className="text-[#52B864]"
                                size={20}
                            />
                            <span className="text-[#E7E7E7]">
                                Mon-Fri: 8am - 5pm
                            </span>
                        </p>
                        <p className="flex items-center gap-3">
                            <MdOutlineMailOutline
                                className="text-[#52B864]"
                                size={20}
                            />
                            <span className="text-[#E7E7E7]">
                                info@cleano.com
                            </span>
                        </p>
                        <p className="flex items-center gap-3">
                            <MdLocalPhone
                                className="text-[#52B864]"
                                size={20}
                            />
                            <span className="text-[#E7E7E7]">
                                (+88) 01951-005859
                            </span>
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-white text-3xl font-bold">
                        Newsletter Subscribe
                    </h2>
                    <p className="leading-7 text-[#E7E7E7]">
                        Sign up and receive our special offers.
                    </p>
                    <form>
                        <TextInput
                            placeholder="example@gmail.com"
                            color="white"
                            sizing="md"
                            addon={<BiEnvelope size={20} color="#5E718D" />}
                            addonPosition="left"
                        />
                        <button className="bg-[#52B864] text-white hover:bg-inherit border-2 border-[#52B864] hover:text-[#52B864] py-3 px-6 mt-4 font-medium text-md transition-all duration-500">
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
            <hr className="max-w-screen-xl mx-auto mt-10" />

            <div className="mt-10 space-y-2">
                <p className="text-center text-[#E7E7E7]">
                    © 2021 Cleano. All rights reserved.
                </p>
                {/* Develop By Jisan Hasan */}
                <p className="text-center text-[#E7E7E7]">
                    Develop By{" "}
                    <a
                        href="https://jisanh.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#52B864]"
                    >
                        Jisan Hasan
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
