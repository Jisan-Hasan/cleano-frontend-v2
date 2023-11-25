"use client";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "../ui/ServiceCard";

const AffordablePricesSection = () => {
    return (
        <div className="bg-[#F7F7F7]">
            <div className="max-w-screen-xl mx-auto py-20 px-2 lg:px-0">
                <div className="space-y-5 text-center">
                    <h6 className="text-[#52B765] text-lg">
                        [Affordable Prices]
                    </h6>
                    <h1 className="text-8xl font-bold">
                        Our Dry Cleaning & Laundry Prices
                    </h1>
                    <p className="max-w-md mx-auto leading-7">
                        Our prices are simple and affordable which are easy on
                        pocket in comparison with the high street prices
                    </p>
                </div>
                <div className="mt-14">
                    <Swiper
                        slidesPerView={4}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay]}
                        allowTouchMove={true}
                        allowSlideNext={true}
                        allowSlidePrev={true}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        
                    >
                        <SwiperSlide>
                            <ServiceCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ServiceCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="flex justify-center mt-12">
                    <button className="border-2 border-[#52B765] hover:text-[#52B765] text-white py-2 px-5 rounded-md bg-[#51B765] hover:bg-inherit transition-all duration-700">
                        Explore All Services
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AffordablePricesSection;
