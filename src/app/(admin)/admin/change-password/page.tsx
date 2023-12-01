import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import ChangePasswordForm from "@/components/ui/ChangePasswordForm";

const items = [
    {
        label: "Profile",
        link: "/profile",
    },
    {
        label: "Change Password",
        link: "/change-password",
    },
];

const ChangePasswordPage = () => {
    return (
        <div>
            <BreadCrumbComponent
                items={items}
                title="Change Password"
                type="admin"
            />
            <div className="max-w-md mx-auto p-4 border my-4 rounded-sm">
                <ChangePasswordForm />
            </div>
        </div>
    );
};

export default ChangePasswordPage;
