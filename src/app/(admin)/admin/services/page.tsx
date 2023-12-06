import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import { ServiceTable } from "./ServicesTable";

const items = [
    {
        label: "Services",
        link: "/admin/services",
    },
];
const AdminServicesPage = () => {
    return (
        <div>
            <BreadCrumbComponent items={items} title="Services" type="admin" />
            <div>
                <ServiceTable />
            </div>
        </div>
    );
};

export default AdminServicesPage;
