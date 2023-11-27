"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyAccountSidebar = () => {
    const pathName = usePathname();
    console.log(pathName);
    const activePath = pathName.split("/").pop();
    console.log(activePath);

    return (
        <div className="py-5 flex-1 bg-[#F6F7F9] md:max-w-xs font-medium tracking-wide">
            <Link
                href="/account"
                className={`px-4 py-1 block hover:text-[#51B765] hover:bg-[#E8E8E8] cursor-pointer ${
                    activePath?.includes("account") &&
                    "border-l-4 border-[#51B765] text-[#51B765]"
                }`}
            >
                My Account
            </Link>
            <Link
                href="/account/orders"
                className={`px-4 py-1 block hover:text-[#51B765] hover:bg-[#E8E8E8] cursor-pointer ${
                    activePath?.includes("orders") &&
                    "border-l-4 border-[#51B765] text-[#51B765]"
                }`}
            >
                My Orders
            </Link>
            <Link
                href="/account/change-password"
                className={`px-4 py-1 block hover:text-[#51B765] hover:bg-[#E8E8E8] cursor-pointer ${
                    activePath?.includes("change-password") &&
                    "border-l-4 border-[#51B765] text-[#51B765]"
                }`}
            >
                Change Password
            </Link>
        </div>
    );
};

export default MyAccountSidebar;
