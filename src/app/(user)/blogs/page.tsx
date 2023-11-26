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
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="py-10">
                    <div className="space-y-5 text-center">
                        <h6 className="text-[#52B765] text-lg">[Blogs]</h6>
                        <h1 className="text-8xl font-bold">
                            Learn More About Our Services
                        </h1>
                        <p className="max-w-md mx-auto leading-7">
                            As a leading laundry and dry cleaning service
                            provider, we have a wide range of services to offer.
                        </p>
                    </div>
                </div>
                <div className="my-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className="flex justify-center my-8">
                    <PaginationComponent />
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
