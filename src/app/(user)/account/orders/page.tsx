"use client";

import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import { PaginationComponent } from "@/components/ui/PaginationComponent";
import { Table } from "keep-react";
import { ArrowsDownUp, Eye } from "phosphor-react";
import MyAccountSidebar from "../MyAccountSidebar";

const items = [
    {
        label: "My Account",
        link: "/account",
    },
    {
        label: "My Orders",
        link: "/account/orders",
    },
];

const MyOrderPage = () => {
    return (
        <div>
            <BreadCrumbComponent items={items} title="My Orders" />
            <div className="max-w-screen-xl mx-auto px-4 2xl:px-0 py-5 lg:py-10">
                <div className="flex flex-col-reverse lg:flex-row gap-5">
                    {/* Left Sidebar */}

                    <MyAccountSidebar />

                    <div className="my-5 flex-1">
                        <div className="border  px-5 py-3 space-y-4">
                            <Table showCheckbox={false}>
                                <Table.Head>
                                    <Table.HeadCell className="">
                                        <p className="text-body-6 font-medium text-metal-400">
                                            Order #
                                        </p>
                                    </Table.HeadCell>
                                    <Table.HeadCell
                                        className="flex justify-center"
                                        icon={
                                            <ArrowsDownUp
                                                size={14}
                                                color="#8897AE"
                                            />
                                        }
                                    >
                                        Date
                                    </Table.HeadCell>
                                    <Table.HeadCell
                                        className=""
                                        icon={
                                            <ArrowsDownUp
                                                size={14}
                                                color="#8897AE"
                                            />
                                        }
                                    >
                                        Total
                                    </Table.HeadCell>
                                    <Table.HeadCell
                                        className=""
                                        icon={
                                            <ArrowsDownUp
                                                size={14}
                                                color="#8897AE"
                                            />
                                        }
                                    >
                                        Status
                                    </Table.HeadCell>

                                    <Table.HeadCell className="">
                                        Action
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y divide-gray-25">
                                    <Table.Row className="bg-white">
                                        <Table.Cell>
                                            <div>0156387</div>
                                        </Table.Cell>
                                        <Table.Cell className="flex justify-center items-center">
                                            {new Date().toLocaleDateString()}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <p className="text-body-5 font-medium text-metal-500">
                                                $652.00
                                            </p>
                                        </Table.Cell>

                                        <Table.Cell>
                                            <p className="text-body-5 font-medium text-metal-500">
                                                Pending
                                            </p>
                                        </Table.Cell>

                                        <Table.Cell>
                                            <span
                                                title="View Order"
                                                className="cursor-pointer"
                                            >
                                                <Eye size={20} color="gray" />
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                        <div className="flex justify-center mt-5">
                            <PaginationComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderPage;
