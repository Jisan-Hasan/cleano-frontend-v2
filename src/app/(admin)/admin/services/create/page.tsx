import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import CreateServiceForm from "./CreateServiceForm";

const items = [
    {
        label: "Services",
        link: "/admin/services",
    },
    {
        label: "Add Service",
        link: "/admin/services/create",
    },
];

const ServiceCreatePage = () => {
    return (
        <div>
            <BreadCrumbComponent
                items={items}
                title="Add Service"
                type="admin"
            />
            <div className="my-5 lg:my-10">
                <CreateServiceForm />
            </div>
        </div>
    );
};

export default ServiceCreatePage;
