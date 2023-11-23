"use client";

import { CalendarCheck, ThumbsUp, Users, UsersFour } from "phosphor-react";
import CountUp from "react-countup";

const DataSection = () => {
    return (
        <div className="bg-[#52b865e1] py-16">
            <div className="max-w-screen-xl mx-auto lg:flex justify-between px-4 space-y-10 lg:space-y-0 gap-2">
                <div className="flex flex-col items-center">
                    <Users size={60} color="white" />
                    <h1 className="mt-6 mb-1 text-8xl text-white font-semibold">
                        <CountUp end={18} suffix="+" enableScrollSpy={true} />
                    </h1>
                    <h6 className="text-2xl font-medium text-white">
                        Professional Cleaner
                    </h6>
                </div>
                <hr className="border lg:hidden border-white" />
                <div className="flex flex-col items-center">
                    <UsersFour size={60} color="white" />
                    <h1 className="mt-6 mb-1 text-8xl text-white font-semibold">
                        <CountUp end={1500} suffix="+" enableScrollSpy={true} />
                    </h1>
                    <h6 className="text-2xl font-medium text-white">
                        Happy Clients
                    </h6>
                </div>
                <hr className="border lg:hidden border-white" />
                <div className="flex flex-col items-center">
                    <CalendarCheck size={60} color="white" />
                    <h1 className="mt-6 mb-1 text-8xl text-white font-semibold">
                        <CountUp end={12} suffix="+" enableScrollSpy={true} />
                    </h1>
                    <h6 className="text-2xl font-medium text-white">
                        Years of Experience
                    </h6>
                </div>
                <hr className="border lg:hidden border-white" />
                <div className="flex flex-col items-center">
                    <ThumbsUp size={60} color="white" />
                    <h1 className="mt-6 mb-1 text-8xl text-white font-semibold">
                        <CountUp end={100} suffix="%" enableScrollSpy={true} />
                    </h1>
                    <h6 className="text-2xl font-medium text-white">Quality</h6>
                </div>
            </div>
        </div>
    );
};

export default DataSection;
