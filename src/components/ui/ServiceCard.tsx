"use client";

import { Card } from "keep-react";
import { Heart, ShoppingCart } from "phosphor-react";
import dryCleanImage from "../../assets/images/dry-clean.png";

const ServiceCard = ({ service }: { service: any }) => {
  const { id, image, title, description, price, isAvailable } = service;

  return (
    <Card
      className="max-w-sm overflow-hidden rounded-md lg:mr-3"
      imgSrc={image || dryCleanImage}
      imgSize="lg"
    >
      <Card.Container className="p-6">
        <Card.Container className="my-3">
          <Card.Title>{title}</Card.Title>
          <div className="flex items-center justify-between">
            <div className="my-2 text-xl font-semibold text-[#52B765] lg:text-3xl">
              ${price}
            </div>
            <div className="mb-5 mt-2.5 flex items-center justify-end">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="h-4 w-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span className=" ms-3 rounded bg-[#52B765] px-2.5 py-0.5 text-xs font-semibold  text-white">
                5.0
              </span>
            </div>
          </div>
          {/* <Card.Description>
                        This can save time and effort, and it can also help to
                        reduce the risk of errors.
                    </Card.Description> */}
        </Card.Container>
        <Card.Container className="flex items-center justify-between">
          <button className="flex items-center rounded-md border-2 border-[#52B765] px-4 py-2 text-[#52B765] transition-all duration-700 hover:bg-[#51B765] hover:text-white">
            <span className="pr-2">
              <ShoppingCart size={24} />
            </span>
            Add To Cart
          </button>
          <div className="group cursor-pointer items-center justify-center rounded-full bg-[#F0F4F8] p-3 shadow-2xl transition-all duration-500 hover:bg-[#52B765]">
            <Heart
              className="text-[#52B765] transition-all duration-500 group-hover:text-white"
              size={20}
            />
          </div>
        </Card.Container>
      </Card.Container>
    </Card>
  );
};

export default ServiceCard;
