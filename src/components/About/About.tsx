"use client";

import Image from "next/image";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import laundry_girl_image from "../../assets/images/laundry-girl-right-img.png";

const About = () => {
    const [section, setSection] = useState<number>(2);

    // decide which section to show
    let content = null;
    if (section === 1) {
        content = (
            <>
                <div>
                    <p className="text-[#677d8f] leading-7">
                        Cleaning can be a chore and we know you have many
                        choices when you consider hiring a maid service. Because
                        of that, we are constantly thriving to improve our
                        already high standards to have you see us as the
                        absolute best in the industry. It’s not enough to have
                        trust in the cleaning crew that you let into your home…
                        you also have to trust that they will perform a
                        first-class cleaning job for you.
                    </p>
                </div>
                <h4 className="text-[#4B5B68] font-semibold text-xl mt-8 mb-5">
                    We Provide
                </h4>
                <div className="md:flex gap-24 space-y-2 md:space-y-0 text-[#677d8f] leading-7">
                    <div className="space-y-2">
                        <p className="flex items-center gap-3">
                            <BiCheck size={26} color="#6FBF78" />
                            One-off, weekly or fortnightly visits
                        </p>
                        <p className="flex items-center gap-3">
                            <BiCheck size={26} color="#6FBF78" />
                            Vetted & background-checked cleaners
                        </p>
                        <p className="flex items-center gap-3">
                            <BiCheck size={26} color="#6FBF78" />
                            Online booking and payment
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="flex items-center gap-3">
                            <BiCheck size={26} color="#6FBF78" />
                            Keep the same cleaner for every visit
                        </p>
                        <p className="flex items-center gap-3">
                            <BiCheck size={26} color="#6FBF78" />
                            All cleaning materials and equipment
                        </p>
                        <p className="flex items-center gap-3">
                            <BiCheck size={26} color="#6FBF78" />
                            100% satisfaction guarantee
                        </p>
                    </div>
                </div>
            </>
        );
    } else if (section === 2) {
        content = (
            <>
                <div className="md:flex gap-10">
                    <div className="space-y-6 w-[95%]">
                        <h4 className="text-[#4B5B68] font-semibold text-xl leading-8">
                            How Cleano Works
                        </h4>
                        <p className="text-[#677d8f] leading-7">
                            When the weekend finally arrives, you’d much rather
                            put your feet up while a cleaning service does the
                            work, rather than spend your precious downtime on
                            your hands and knees scrubbing.
                        </p>
                        <p className="text-[#677d8f] leading-7">
                            Taking the stress out of any aspect of cleaning is
                            what we specialise in. We will come to your premises
                            and offer a free quote, so you know exactly what
                            you’ll be spending
                        </p>
                    </div>
                    <div className="space-y-5 mt-10 md:mt-0">
                        <div className="space-y-3">
                            <h5 className="text-[#4b5b68] leading-6 font-semibold">
                                Book online in{" "}
                                <span className="text-[#51B765]">
                                    60 seconds
                                </span>
                            </h5>
                            <p className="text-[#677d8f] leading-7">
                                Book & pay online. We’ll match you with a
                                trusted, experienced house cleaner
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h5 className="text-[#4b5b68] leading-6 font-semibold">
                                Get a{" "}
                                <span className="text-[#51B765]">
                                    5 star cleaner
                                </span>
                            </h5>
                            <p className="text-[#677d8f] leading-7">
                                Every cleaner is friendly and reliable. They’ve
                                been background-checked & rated 5-stars
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h5 className="text-[#4b5b68] leading-6 font-semibold">
                                Manage everything{" "}
                                <span className="text-[#51B765]">online</span>
                            </h5>
                            <p className="text-[#677d8f] leading-7">
                                Add visits, skip visits, leave notes, and book
                                extra services laundry and oven cleaning
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (section === 3) {
        content = (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 md:gap-y-12">
                    <div className="flex gap-3">
                        <div className="text-2xl font-bold text-[#6fbf52] leading-7">
                            1.
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-xl leading-8">
                                We Treat Your Homes Like Ours
                            </h4>
                            <p>
                                At The Cleaning Company, we are fully bonded and
                                insured, meaning you can have peace of mind when
                                we enter your home.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="text-2xl font-bold text-[#6fbf52] leading-7">
                            2.
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-xl leading-8">
                                Satisfaction Guaranteed
                            </h4>
                            <p>
                                Our cleaning crew are professionally trained,
                                and if you’re ever unhappy with any area we’ve
                                cleaned, we’ll and reclean it next day.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="text-2xl font-bold text-[#6fbf52] leading-7">
                            3.
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-xl leading-8">
                                Immediate Online Quotes
                            </h4>
                            <p>
                                Upcoming party? Expecting guests? We’ll give an
                                immediate price quote so you can enjoy your time
                                rather than worry about the mess.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="text-2xl font-bold text-[#6fbf52] leading-7">
                            4.
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-xl leading-8">
                                We Are Experts
                            </h4>
                            <p>
                                We are dominate the industry in scale and scope
                                with an adaptable, extensive network that
                                consistently delivers exceptional results.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="bg-[#F7F7F7]">
            <div className="max-w-screen-xl mx-auto md:grid grid-cols-7 px-3 xl:px-0">
                <div className="py-24 col-span-4">
                    <div>
                        <h2 className="text-[#4B5B68] font-semibold text-2xl md:text-4xl lg:text-6xl">
                            About Our Company
                        </h2>
                        <div className="font-semibold md:text-xl flex gap-3 md:gap-7 items-center  text-[#4B5B68] my-7 ">
                            <h4
                                className={`${
                                    section === 1
                                        ? "text-[#51B765]"
                                        : "text-[#4B5B68]"
                                } hover:text-[#51B765] cursor-pointer transition-all duration-700`}
                                onClick={() => setSection(1)}
                            >
                                We Provide
                            </h4>
                            <span className="border h-4 border-gray-400"></span>
                            <h4
                                className={`${
                                    section === 2
                                        ? "text-[#51B765]"
                                        : "text-[#4B5B68]"
                                } hover:text-[#51B765] cursor-pointer transition-all duration-700`}
                                onClick={() => setSection(2)}
                            >
                                How it Works
                            </h4>
                            <span className="border h-4 border-gray-400"></span>
                            <h4
                                className={`${
                                    section === 3
                                        ? "text-[#51B765]"
                                        : "text-[#4B5B68]"
                                } hover:text-[#51B765] cursor-pointer transition-all duration-700`}
                                onClick={() => setSection(3)}
                            >
                                With Us
                            </h4>
                        </div>
                    </div>
                    {content}
                </div>
                <div className="col-span-3 md:mt-10 md:ml-20 md:mr-[-300px]">
                    <Image src={laundry_girl_image} alt="Laundry girl image" />
                </div>
            </div>
        </div>
    );
};

export default About;
