"use client";

import { useAppDispatch } from "@/redux/app/hooks";
import { clearToken } from "@/redux/features/authSlice";
import { Sidebar } from "keep-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Chat,
    Handbag,
    ShoppingBagOpen,
    ShoppingCart,
    SquaresFour,
    TreeStructure,
    Users,
} from "phosphor-react";
import cleanoLogo from "../../assets/images/cleano-logo.png";

const AdminSidebar = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleLogout = () => {
        // clear token from local storage and state
        dispatch(clearToken());
        // redirect to login page
        router.push("/login");
    };
    return (
        <Sidebar aria-label="Admin Sidebar">
            <Sidebar.ItemGroup>
                <Link href="/admin">
                    <Image src={cleanoLogo} width={150} alt="Cleano Logo" />
                </Link>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
                <Link href="/admin">
                    <Sidebar.Item icon={<SquaresFour size={24} />}>
                        Dashboard
                    </Sidebar.Item>
                </Link>
                <Sidebar.Collapse
                    icon={<ShoppingCart size={24} />}
                    label="Profile"
                >
                    <Link href="/admin/profile">
                        <Sidebar.Item icon={<Handbag size={24} />}>
                            Profile Details
                        </Sidebar.Item>
                    </Link>
                    <Link href="/admin/change-password">
                        <Sidebar.Item icon={<Handbag size={24} />}>
                            Change Password
                        </Sidebar.Item>
                    </Link>
                </Sidebar.Collapse>
                <Link href="/admin/services">
                    <Sidebar.Item icon={<SquaresFour size={24} />}>
                        Services
                    </Sidebar.Item>
                </Link>
                <Sidebar.Collapse
                    icon={<ShoppingCart size={24} />}
                    label="Booking"
                >
                    <Link href="/admin/booking/pending">
                        <Sidebar.Item icon={<Handbag size={24} />}>
                            Pending
                        </Sidebar.Item>
                    </Link>
                    <Link href="/admin/booking/confirmed">
                        <Sidebar.Item icon={<Handbag size={24} />}>
                            Confirmed
                        </Sidebar.Item>
                    </Link>
                    <Link href="/admin/booking/completed">
                        <Sidebar.Item icon={<Handbag size={24} />}>
                            Completed
                        </Sidebar.Item>
                    </Link>
                    <Link href="/admin/booking/cancelled">
                        <Sidebar.Item icon={<Handbag size={24} />}>
                            Cancelled
                        </Sidebar.Item>
                    </Link>
                </Sidebar.Collapse>
            </Sidebar.ItemGroup>

            <Sidebar.ItemGroup>
                <Link href="/admin/blogs">
                    <Sidebar.Item icon={<Chat size={24} />}>Blogs</Sidebar.Item>
                </Link>
                <Link href="/admin/faq">
                    <Sidebar.Item icon={<Users size={24} />}>FAQ</Sidebar.Item>
                </Link>
                <Link href="/admin/review">
                    <Sidebar.Item icon={<ShoppingBagOpen size={24} />}>
                        Review
                    </Sidebar.Item>
                </Link>
            </Sidebar.ItemGroup>

            <Sidebar.ItemGroup>
                <div className="cursor-pointer" onClick={handleLogout}>
                    <Sidebar.Item icon={<TreeStructure size={24} />}>
                        Sign Out
                    </Sidebar.Item>
                </div>
            </Sidebar.ItemGroup>
        </Sidebar>
    );
};

export default dynamic(() => Promise.resolve(AdminSidebar), {
    ssr: false,
});
