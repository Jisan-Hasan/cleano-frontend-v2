"use client";

import AdminSidebar from "@/components/ui/AdminSidebar";
import { List, X } from "phosphor-react";

// Import necessary libraries and components
import { useState } from "react";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
    // State to track the visibility of the sidebar
    const [sidebarVisible, setSidebarVisible] = useState(false);

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="lg:flex px-4 lg:px-0 mt-5 lg:mt-0">
            {/* Sidebar Toggle Button (visible on small screens) */}
            <button
                className="lg:hidden text-gray-600 focus:outline-none"
                onClick={toggleSidebar}
            >
                {/* You can use an icon here (e.g., a hamburger icon) */}
                {!sidebarVisible ? <List size={32} /> : <X size={32} />}
            </button>

            {/* Sidebar (visible on larger screens) */}
            <div
                className={`lg:w-[280px] ${
                    sidebarVisible ? "block" : "hidden"
                } lg:block`}
            >
                <AdminSidebar />
            </div>

            {/* Main Content */}
            <div className={`flex-1 ${sidebarVisible && "hidden"}`}>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;
