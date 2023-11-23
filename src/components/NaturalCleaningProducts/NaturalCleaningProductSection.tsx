import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import cleaningProducts from "../../assets/images/cleaning-products.jpg";

const NaturalCleaningProductSection = () => {
    return (
        <div className="py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-24 ">
            <div className="max-w-screen-xl mx-auto md:flex flex-row-reverse justify-center gap-16 px-4 space-y-10 md:space-y-0 md:px-0">
                <div className="space-y-9 w-full max-w-lg">
                    <div className="space-y-9">
                        <h2 className="text-4xl font-semibold tracking-wide">
                            <span className="text-[#51B765]">Natural</span>{" "}
                            Cleaning Products
                        </h2>
                        <p className="leading-7 ">
                            We feel good about cleaning with our
                            self-formulated, natural products that are better
                            for the environment
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-7 items-baseline">
                            <div>
                                <FaLeaf color="#6FBF52" size={18} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-xl leading-8">
                                    100% Safe & Organic
                                </h3>
                                <p>
                                    We combine high concentrates of pure organic
                                    essential oils with quality plant-derived
                                    ingredients.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-7 items-baseline">
                            <div>
                                <FaLeaf color="#6FBF52" size={18} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-xl leading-8">
                                    We Care About The Earth
                                </h3>
                                <p>
                                    All of our packaging, bottles, cleaning
                                    equipment, even our uniforms come from
                                    recycled, fairtrade or low impact origins.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        className="w-[100%]"
                        src={cleaningProducts}
                        alt="Cleaning Image"
                    />
                </div>
            </div>
        </div>
    );
};

export default NaturalCleaningProductSection;
