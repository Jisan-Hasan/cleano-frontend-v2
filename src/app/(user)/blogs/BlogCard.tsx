"use client";

import { Avatar, Badge, Card } from "keep-react";
import { useRouter } from "next/navigation";
import { IoShareSocialOutline } from "react-icons/io5";
import blogCardImage from "../../../assets/images/clean-blog-image.jpg";

const BlogCard = ({
  type = "Health",
  author = "Unknown",
  postTime = "30 Aug 2023",
  title = "",
  description = "",
}: any) => {
  const { push } = useRouter();
  return (
    <Card
      className="max-w-sm overflow-hidden rounded-md"
      imgSrc={blogCardImage.src}
      imgSize="md"
      onClick={() =>
        push(
          "/blogs/the-ultimate-guide-to-maintaining-a-clean-and-healthy-home",
        )
      }
    >
      <Card.Container className="bg-metal-50/50 absolute left-3.5 top-3.5 cursor-pointer items-center justify-center rounded-full">
        <Badge size="xs" colorType="light" color="error">
          {type}
        </Badge>
      </Card.Container>

      <Card.Container className="px-4">
        <div className="my-3 flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Avatar shape="circle" size="md" img={blogCardImage.src} />
            <span>{author}</span>
          </div>
          <span className="h-[1px] w-[1px] rounded-full bg-[#52B765] p-1 font-bold"></span>
          <span>30 Aug 2023</span>
        </div>
        <Card.Container className="my-3 cursor-pointer">
          <Card.Title>{title}</Card.Title>
          <Card.Description
            className="
            line-clamp-3
          "
          >
            {description}
          </Card.Description>
        </Card.Container>
        {/* <Card.Container className="flex items-center justify-start gap-5"></Card.Container> */}
        <hr className="my-3" />
        <div className="mb-2 flex items-center justify-between">
          <IoShareSocialOutline className="cursor-pointer" size="20px" />
          <span className="cursor-pointer">Read More</span>
        </div>
      </Card.Container>
    </Card>
  );
};

export default BlogCard;
