import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import { PaginationComponent } from "@/components/ui/PaginationComponent";
import BlogCard from "./BlogCard";

const items = [
  {
    label: "Blogs",
    link: "/blogs",
  },
];

const BlogsPage = () => {
  return (
    <div>
      <BreadCrumbComponent items={items} title="Blogs" />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="py-10">
          <div className="space-y-5 text-center">
            <h6 className="text-lg text-[#52B765]">[Blogs]</h6>
            <h1 className="text-8xl font-bold">
              Learn More About Our Services
            </h1>
            <p className="mx-auto max-w-md leading-7">
              As a leading laundry and dry cleaning service provider, we have a
              wide range of services to offer.
            </p>
          </div>
        </div>
        <div className="my-5 grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
          <BlogCard
            type={"Health"}
            author={"Jisan Hasan"}
            postTime={"17 Nov, 2024"}
            title={"The Ultimate Guide to Maintaining a Clean and Healthy Home"}
            description={
              "In today’s fast-paced world, maintaining a clean and healthy home can sometimes feel like a daunting task. However, a clean environment not only makes your home more pleasant but also contributes significantly to your physical and mental well-being. At Cleano, we are committed to helping you achieve a pristine home with ease. In this guide, we’ll share practical cleaning tips, the importance of hygiene, and how a clean space can enhance your health."
            }
          />
        </div>
        <div className="my-8 flex justify-center">
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
