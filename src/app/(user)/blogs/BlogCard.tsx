"use client";

import { Avatar, Badge, Card } from "keep-react";
import { IoShareSocialOutline } from "react-icons/io5";
import blogCardImage from "../../../assets/images/clean-blog-image.jpg";

const BlogCard = () => {
    return (
        <Card
            className="max-w-sm overflow-hidden rounded-md"
            imgSrc={blogCardImage.src}
            imgSize="md"
        >
            <Card.Container className="absolute left-3.5 top-3.5 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
                <Badge size="xs" colorType="light" color="error">
                    Entertainment
                </Badge>
            </Card.Container>

            <Card.Container className="px-4">
                <div className="flex gap-5 items-center my-3">
                    <div className="flex gap-3 items-center">
                        <Avatar
                            shape="circle"
                            size="md"
                            img={blogCardImage.src}
                        />
                        <span>Katen Doe</span>
                    </div>
                    <span className="bg-[#52B765] p-1 font-bold w-[1px] h-[1px] rounded-full"></span>
                    <span>30 Aug 2023</span>
                </div>
                <Card.Container className="my-3 cursor-pointer">
                    <Card.Title>Men Nike Shoe</Card.Title>
                    <Card.Description>
                        This can save time and effort, and it can also help to
                        reduce the risk of errors.
                    </Card.Description>
                </Card.Container>
                {/* <Card.Container className="flex items-center justify-start gap-5"></Card.Container> */}
                <hr className="my-3" />
                <div className="flex justify-between items-center mb-2">
                    <IoShareSocialOutline
                        className="cursor-pointer"
                        size="20px"
                    />
                    <span className="cursor-pointer">Read More</span>
                </div>
            </Card.Container>
        </Card>
    );
};

export default BlogCard;
