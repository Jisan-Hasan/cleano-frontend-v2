import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import reasonImage from "../../assets/images/reason-1.jpg";

const ReasonComponent = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-32 md:flex flex-row-reverse justify-center gap-16 px-3 space-y-10 md:space-y-0 md:px-0">
            <div className="space-y-9 w-full max-w-lg">
                <div className="space-y-9">
                    <h2 className="text-4xl font-normal ">
                        Reasons to{" "}
                        <span className="text-[#4ba0e8]">Choose Us</span>
                    </h2>
                    <p className="leading-7">
                        Behind our commitment to excellence are few key
                        attributes that define who we are and what makes us
                        different from any other.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="flex gap-7 items-baseline">
                        <div>
                            <FaLeaf color="#6FBF52" size={18} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-xl leading-8">
                                Top-Rated Company
                            </h3>
                            <p>
                                We hold a successful track record of satisfying
                                our customers and getting back their bond money.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-7 items-baseline">
                        <div>
                            <FaLeaf color="#6FBF52" size={18} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-xl leading-8">
                                Top-Rated Company
                            </h3>
                            <p>
                                We hold a successful track record of satisfying
                                our customers and getting back their bond money.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-7 items-baseline">
                        <div>
                            <FaLeaf color="#6FBF52" size={18} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-xl leading-8">
                                Top-Rated Company
                            </h3>
                            <p>
                                We hold a successful track record of satisfying
                                our customers and getting back their bond money.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    className="w-[100%]"
                    src={reasonImage}
                    alt="Cleaning Image"
                />
            </div>
        </div>
    );
};

export default ReasonComponent;
