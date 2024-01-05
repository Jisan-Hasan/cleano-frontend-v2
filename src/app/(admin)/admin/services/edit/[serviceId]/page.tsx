import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import CreateServiceForm from "../../create/CreateServiceForm";

const items = [
  {
    label: "Services",
    link: "/admin/services",
  },
  {
    label: "Edit Service",
    link: "/admin/services/edit",
  },
];

const ServiceEditPage = () => {
  return (
    <div>
      <BreadCrumbComponent items={items} title="Edit Service" type="admin" />
      <div className="my-5 lg:my-10">
        <CreateServiceForm />
      </div>
    </div>
  );
};

export default ServiceEditPage;
