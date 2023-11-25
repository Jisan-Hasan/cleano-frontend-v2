"use client";

import { Card } from "keep-react";
import { Heart, ShoppingCart } from "phosphor-react";
import dryCleanImage from "../../assets/images/dry-clean.png";

const ServiceCard = () => {
    return (
        <Card
            className="max-w-xs overflow-hidden rounded-md mr-3"
            imgSrc={dryCleanImage.src}
            imgSize=""
        >
            <Card.Container className="p-6">
                <Card.Container className="my-3">
                    <Card.Title>Men Nike Shoe</Card.Title>
                    <Card.Description>
                        This can save time and effort, and it can also help to
                        reduce the risk of errors.
                    </Card.Description>
                </Card.Container>
                <Card.Container className="flex items-center justify-between">
                    <button className="border-2 border-[#52B765] text-[#52B765] hover:text-white py-2 px-2 rounded-md hover:bg-[#51B765] transition-all duration-700 flex items-center">
                        <span className="pr-2">
                            <ShoppingCart size={24} />
                        </span>
                        Add To Cart
                    </button>
                    <div className="cursor-pointer items-center justify-center p-3 rounded-full shadow-2xl bg-[#F0F4F8] hover:bg-[#52B765] transition-all duration-500 group">
                        <Heart
                            className="text-[#52B765] group-hover:text-white transition-all duration-500"
                            size={20}
                        />
                    </div>
                    <Card.Title>$9.99</Card.Title>
                </Card.Container>
            </Card.Container>
        </Card>
    );
};

export default ServiceCard;
