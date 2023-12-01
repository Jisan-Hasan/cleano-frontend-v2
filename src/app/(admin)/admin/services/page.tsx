import BreadCrumbComponent from "@/components/ui/BreadCrumb";

const items = [
    {
        label: "Services",
        link: "/services",
    },
];
const AdminServicesPage = () => {
    return (
        <div>
            <BreadCrumbComponent items={items} title="Services" type="admin" />
            <div>
                <h1>Admin Services Page</h1>
            </div>
        </div>
    );
};

export default AdminServicesPage;
