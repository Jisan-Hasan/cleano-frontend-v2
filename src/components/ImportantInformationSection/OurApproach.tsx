import Image from "next/image";
import { PiShirtFolded } from "react-icons/pi";
import { SlTrophy } from "react-icons/sl";
import ourApproachImage from "../../assets/images/our-approach.jpg";

const OurApproachComponent = () => {
    return (
        <div className="space-y-16">
            <div className="flex justify-between">
                <div className="space-y-7 max-w-[480px] mt-5">
                    <h3 className="text-3xl font-semibold">Our Approach</h3>
                    <p className="leading-7">
                        We approach workforce accommodations with a property
                        development mindset. Our “Develop. Own. Operate.”
                        business model produces integrated solutions that enable
                        clients to focus on their core business.
                    </p>
                    <p className="leading-7">
                        Clients benefit from consistent service delivery with
                        greater cost and quality control as well as more
                        efficient use of their operational and financial
                        resources.
                    </p>
                </div>
                <div>
                    <Image src={ourApproachImage} alt="Our Approach Image" />
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-4 max-w-sm group">
                    <div>
                        <div className="p-5 rounded-full shadow-2xl bg-[#F0F4F8] group-hover:bg-[#52B765] transition-all duration-500">
                            <SlTrophy className="text-[#52B765] group-hover:text-white transition-all duration-500" size={35} />
                        </div>
                    </div>
                    <div className="space-y-3 mt-2 ">
                        <h3 className="text-xl font-semibold leading-8 cursor-pointer relative  inline-block">
                            <span className="relative z-10 group-hover:text-[#52b765] transition-colors duration-500">
                                High Quality
                            </span>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#52b765] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 w-max-content"></span>
                        </h3>
                        <p className="leading-6">
                            We work hard to make sure that the clothes you get
                            back are spotless and ready for action.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 max-w-sm group">
                    <div>
                        <div className="p-5 rounded-full shadow-2xl bg-[#F0F4F8] group-hover:bg-[#52B765] transition-all duration-500">
                            <PiShirtFolded className="text-[#52B765] group-hover:text-white transition-all duration-500" size={35} />
                        </div>
                    </div>
                    <div className="space-y-3 mt-2 ">
                        <h3 className="text-xl font-semibold leading-8 cursor-pointer relative inline-block">
                            <span className="relative z-10 group-hover:text-[#52b765] transition-colors duration-500">
                                Cleaner & Greener
                            </span>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#52b765] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 w-max-content"></span>
                        </h3>
                        <p className="leading-6">
                            We work with the environment in mind. No harsh
                            chemical.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 max-w-sm group">
                    <div>
                        <div className="p-5 rounded-full shadow-2xl bg-[#F0F4F8] group-hover:bg-[#52B765] transition-all duration-500">
                            <SlTrophy className="text-[#52B765] group-hover:text-white transition-all duration-500" size={35} />
                        </div>
                    </div>
                    <div className="space-y-3 mt-2 ">
                        <h3 className="text-xl font-semibold leading-8 cursor-pointer relative inline-block">
                            <span className="relative z-10 group-hover:text-[#52b765] transition-colors duration-500">
                                Happiness Guarantee
                            </span>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#52b765] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 w-max-content"></span>
                        </h3>
                        <p className="leading-6">
                            If you&apos;re not completely satisfied with the
                            wash or dry cleaning, we will re-process your
                            clothes for free!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurApproachComponent;
