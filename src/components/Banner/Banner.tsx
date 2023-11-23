"use client";
import { Carousel } from "keep-react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";

const Banner = () => {
    return (
        <Carousel
            slideInterval={5000}
            // showControls={true}
            indicators={true}
            indicatorsType="bar"
        >
            <Banner2 />
            <Banner1 />
            <Banner2 />
            <Banner1 />
        </Carousel>
    );
};

export default Banner;
