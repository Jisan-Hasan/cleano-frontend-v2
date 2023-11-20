"use client";

import Image from "next/image";
import dryCleanImage from "../../assets/images/dry-clean.png";

const ServiceCard = () => {
    return (
        <div className="max-w-[300px] bg-white py-4 px-3 shadow-sm rounded-md text-center space-y-3 cursor-pointer group w-full mx-auto">
            <div className="relative">
                <Image
                    src={dryCleanImage}
                    alt=""
                    className="w-[150px] mx-auto"
                />
            </div>
            <div className="space-y-2">
                <h3 className="text-3xl font-bold text-[#323232]">
                    Dry Cleaning
                </h3>
                <p className="leading-7">Wash, Dry and Fold</p>
                <h2 className="text-[#52B765] text-7xl font-bold">$1.99</h2>
            </div>
            <div className="w-full transition-all duration-1000 ease-in-out">
                <button className="border-2 border-[#52B765] text-[#52B765] hover:text-white py-2 px-5 rounded-md hover:bg-[#51B765] transition-all duration-700">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
