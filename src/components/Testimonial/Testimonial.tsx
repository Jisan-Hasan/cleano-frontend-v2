"use client";

import { Carousel } from "keep-react";
import { SkipBack, SkipForward } from "phosphor-react";
import userAvatar1 from "../../assets/images/avatar.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
    const testimonialData1 = {
        comment:
            "Cleano has transformed my living space! The team's attention to detail is unmatched, leaving my home spotless and refreshed. Their professionalism and efficiency make them my go-to cleaning service. I highly recommend Cleano for a sparkling clean experience!",
        name: "Micheal Gough",
        position: "CEO at Google",
        image: userAvatar1.src,
    };

    const testimonialData2 = {
        comment:
            "I can't express how grateful I am for Cleano's exceptional service. From the first contact to the final dusting, every step was seamless. The crew's dedication and commitment to cleanliness exceeded my expectations. Cleano is a game-changer for anyone seeking top-notch cleaning.",
        name: "Micheal Gough",
        position: "CEO at Google",
        image: userAvatar1.src,
    };

    const testimonialData3 = {
        comment:
            "Cleano is a lifesaver! Their team not only tackled the toughest stains but also left my home smelling fresh. The level of service and care they provide is unparalleled. With Cleano, you can trust that your space will be impeccably clean, creating a healthier and happier environment.",
        name: "Micheal Gough",
        position: "CEO at Google",
        image: userAvatar1.src,
    };

    const testimonialData4 = {
        comment:
            "Choosing Cleano was the best decision I made for my home. Their skilled professionals are not just cleaners; they are true wizards who magically transform spaces. The attention to detail and commitment to customer satisfaction make Cleano stand out. I wouldn't trust anyone else with my cleaning needs.",
        name: "Micheal Gough",
        position: "CEO at Google",
        image: userAvatar1.src,
    };

    const testimonialData5 = {
        comment:
            "Cleano has become an integral part of maintaining a clean and organized home for me. The team is reliable, thorough, and friendly. They consistently deliver a level of cleanliness that goes beyond expectations. If you want a cleaning service that truly cares about your space, Cleano is the answer.",
        name: "Micheal Gough",
        position: "CEO at Google",
        image: userAvatar1.src,
    };

    return (
        <div className="py-10 md:py-14 lg:py-18 xl:py-20 2xl:py-24 px-3 ">
            <div className="space-y-5 text-center">
                <h6 className="text-[#52B765] text-lg">[Feedback]</h6>
                <h1 className="text-2xl lg:text-4xl font-semibold">
                    Customer Thoughts & Feedback
                </h1>
            </div>
            <div className="mt-10 cursor-auto">
                <Carousel
                    slide={true}
                    slideInterval={2000}
                    showControls={true}
                    indicators={false}
                    className="cursor-auto"
                    leftControl={
                        <span className="hidden lg:flex">
                            <SkipBack size={32} />
                        </span>
                    }
                    rightControl={
                        <span className="hidden lg:flex">
                            <SkipForward size={32} />
                        </span>
                    }
                >
                    <TestimonialCard data={testimonialData1} />
                    <TestimonialCard data={testimonialData2} />
                    <TestimonialCard data={testimonialData3} />
                    <TestimonialCard data={testimonialData4} />
                    <TestimonialCard data={testimonialData5} />
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonial;
