import BreadCrumbComponent from "@/components/ui/BreadCrumb";

const items = [
    {
        label: "Services",
        link: "/services",
    },
];

const ServicesPage = () => {
    return (
        <div>
            <BreadCrumbComponent items={items} title="Services" />
            <h1>All Services here</h1>
        </div>
    );
};

export default ServicesPage;
