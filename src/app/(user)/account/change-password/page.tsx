import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import MyAccountSidebar from "../MyAccountSidebar";
import ChangePasswordForm from "./ChangePasswordForm";

const items = [
    {
        label: "My Account",
        link: "/account",
    },
    {
        label: "Change Password",
        link: "/account/change-password",
    },
];

const ChangePasswordPage = () => {
    return (
        <div>
            <BreadCrumbComponent title="Change Password" items={items} />
            <div className="max-w-screen-xl mx-auto px-4 2xl:px-0 py-10 flex gap-5">
                <MyAccountSidebar />
                <div className="border flex-1 max-w-md px-5 py-5">
                    <ChangePasswordForm />
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPage;
