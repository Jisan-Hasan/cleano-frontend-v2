"use client";

import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "../ui/ServiceCard";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";

const AffordablePricesSection = () => {
  // get all services query hook
  const { data, isLoading, isError, error, isSuccess } = useGetAllServicesQuery(
    {
      page: 1,
      limit: 100,
    },
  );

  //   decide what to render based on query status
  let content = null;

  if (!isSuccess) {
    return;
  }

  if (isSuccess && data?.data?.length > 0) {
    content = (
      <>
        {data?.data?.map((service: any) => (
          <SwiperSlide key={service?.id}>
            <ServiceCard service={service} />
          </SwiperSlide>
        ))}
      </>
    );
  }
  return (
    <div className="bg-[#F7F7F7]">
      <div className="mx-auto max-w-screen-xl px-2 py-20 lg:px-0">
        <div className="space-y-5 text-center">
          <h6 className="text-lg text-[#52B765]">[Affordable Prices]</h6>
          <h1 className="text-8xl font-bold">
            Our Dry Cleaning & Laundry Prices
          </h1>
          <p className="mx-auto max-w-md leading-7">
            Our prices are simple and affordable which are easy on pocket in
            comparison with the high street prices
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
            {content}
          </Swiper>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="rounded-md border-2 border-[#52B765] bg-[#51B765] px-5 py-2 text-white transition-all duration-700 hover:bg-inherit hover:text-[#52B765]"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AffordablePricesSection;
