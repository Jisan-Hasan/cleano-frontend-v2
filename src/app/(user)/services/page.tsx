import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import ServiceCard from "@/components/ui/ServiceCard";

const items = [
    {
        label: "Services",
        link: "/services",
    },
];

const ServicesPage = () => {
    return (
        <div className="px-4">
            <BreadCrumbComponent items={items} title="Services" />
            <div className="py-10">
                <div className="space-y-5 text-center">
                    <h6 className="text-[#52B765] text-lg">[Our Services]</h6>
                    <h1 className="text-8xl font-bold">
                        Our Cleaning & Laundry Services
                    </h1>
                    <p className="max-w-md mx-auto leading-7">
                        Our prices are simple and affordable which are easy on
                        pocket in comparison with the high street prices
                    </p>
                </div>
            </div>
            <div className="mb-10">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
