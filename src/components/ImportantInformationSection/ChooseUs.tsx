import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci";
import { FaWheelchair } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SlTrophy } from "react-icons/sl";

const ChooseUsComponent = () => {
    return (
        <div className="grid grid-cols-3 gap-6 my-14">
            <div className="space-y-6">
                <div className="space-y-4">
                    <h2 className="text-4xl font-semibold">Why Choose Us</h2>
                    <p className="leading-7">
                        We know that a strong, client-focused business is a
                        smart business. We have a 20,000-square-foot,
                        state-of-the-art workshop where all cleaning,
                        specialized spot removal, pressing, inspection and
                        packaging of your items take place.
                    </p>
                </div>
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold">
                        Values & Experience
                    </h4>
                    <p className="leading-7">
                        We know that a strong, client-focused business is a
                        smart business. We have a 20,000-square-foot,
                        state-of-the-art workshop where all cleaning,
                        specialized spot removal, pressing, inspection and
                        packaging of your items take place.
                    </p>
                </div>
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex gap-4 group">
                        <div>
                            <div className="p-5 rounded-full shadow-2xl bg-[#F0F4F8]  group-hover:bg-[#52B765] transition-all duration-500">
                                <HiOutlineLightBulb
                                    className="text-[#52B765] group-hover:text-white transition-all duration-500"
                                    size={35}
                                />
                            </div>
                        </div>
                        <div className="space-y-3 mt-2 ">
                            <h3 className="text-xl font-semibold leading-8 cursor-pointer relative inline-block">
                                <span className="relative z-10 group-hover:text-[#52b765] transition-colors duration-500">
                                    Personalized Experience
                                </span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#52b765] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 w-max-content"></span>
                            </h3>
                            <p className="leading-6">
                                We take utmost care of your clothes, segregating
                                based on the cloth type and giving you instant
                                clothes to make a statement.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 group">
                        <div>
                            <div className="p-5 rounded-full shadow-2xl bg-[#F0F4F8] group-hover:bg-[#52B765] transition-all duration-500">
                                <CiDiscount1
                                    className="text-[#52B765] group-hover:text-white transition-all duration-500"
                                    size={35}
                                />
                            </div>
                        </div>
                        <div className="space-y-3 mt-2 ">
                            <h3 className="text-xl font-semibold leading-8 cursor-pointer relative inline-block">
                                <span className="relative z-10 group-hover:text-[#52b765] transition-colors duration-500">
                                    Affordable Pricing
                                </span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#52b765] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 w-max-content"></span>
                            </h3>
                            <p className="leading-6">
                                Prices that suits your pocket is one of our USP.
                                An option of choosing between 2 types of pricing
                                is available.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 group">
                        <div>
                            <div className="p-5 rounded-full shadow-2xl bg-[#F0F4F8] group-hover:bg-[#52B765] transition-all duration-500">
                                <FaWheelchair
                                    className="text-[#52B765] group-hover:text-white transition-all duration-500"
                                    size={35}
                                />
                            </div>
                        </div>
                        <div className="space-y-3 mt-2 ">
                            <h3 className="text-xl font-semibold leading-8 cursor-pointer relative inline-block">
                                <span className="relative z-10 group-hover:text-[#52b765] transition-colors duration-500">
                                    Convenience
                                </span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#52b765] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 w-max-content"></span>
                            </h3>
                            <p className="leading-6">
                                With just a tap of a button, your laundry gets
                                done, giving your leisure time to spend with
                                family and friends.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 group">
                        <div>
                            <div className="p-5 rounded-full shadow-2xl bg-[#F0F4F8] group-hover:bg-[#52B765] transition-all duration-500">
                                <SlTrophy
                                    className="text-[#52B765] group-hover:text-white transition-all duration-500"
                                    size={35}
                                />
                            </div>
                        </div>
                        <div className="space-y-3 mt-2 ">
                            <h3 className="text-xl font-semibold leading-8 cursor-pointer relative inline-block">
                                <span className="relative z-10 group-hover:text-[#52b765] transition-colors duration-500">
                                    Quality
                                </span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#52b765] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 w-max-content"></span>
                            </h3>
                            <p className="leading-6">
                                We use the best in class products, to assure
                                that your favorite clothes are always there for
                                you to wear.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 group">
                        <div>
                            <div className="p-5 rounded-full shadow-2xl bg-[#F0F4F8] group-hover:bg-[#52B765] transition-all duration-500">
                                <CiDeliveryTruck
                                    className="text-[#52B765] group-hover:text-white transition-all duration-500"
                                    size={35}
                                />
                            </div>
                        </div>
                        <div className="space-y-3 mt-2 ">
                            <h3 className="text-xl font-semibold leading-8 cursor-pointer relative inline-block">
                                <span className="relative z-10 group-hover:text-[#52b765] transition-colors duration-500">
                                    Express Delivery
                                </span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#52b765] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 w-max-content"></span>
                            </h3>
                            <p className="leading-6">
                                With our super express delivery, we would get
                                your laundry done in less than 8 hours.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 group">
                        <div>
                            <div className="p-5 rounded-full shadow-2xl bg-[#F0F4F8] group-hover:bg-[#52B765] transition-all duration-500">
                                <GoChecklist
                                    className="text-[#52B765] group-hover:text-white transition-all duration-500"
                                    size={35}
                                />
                            </div>
                        </div>
                        <div className="space-y-3 mt-2 ">
                            <h3 className="text-xl font-semibold leading-8 cursor-pointer relative inline-block">
                                <span className="relative z-10 group-hover:text-[#52b765] transition-colors duration-500">
                                    Instant Order Update
                                </span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#52b765] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 w-max-content"></span>
                            </h3>
                            <p className="leading-6">
                                Regular updates of your order, to help you keep
                                a track of your laundry and plan accordingly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsComponent;
