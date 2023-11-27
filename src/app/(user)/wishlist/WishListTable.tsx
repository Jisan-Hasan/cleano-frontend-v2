"use client";

import { Avatar, Table } from "keep-react";
import Link from "next/link";
import { ArrowsDownUp, ShoppingCart, Trash } from "phosphor-react";
import { useState } from "react";
import userLogo from "../../../assets/images/avatar.png";

const WishListTable = () => {
    const [value, setValue] = useState(1);
    return (
        <Table showCheckbox={false}>
            <Table.Caption>
                <div className="my-5 flex items-center justify-between">
                    <div className="">
                        <p className="text-body-1 font-semibold text-metal-600">
                            My Wishlist
                        </p>
                    </div>
                    <div className="">
                        <Link
                            href="/services"
                            className="hover:text-[#51B765]"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </Table.Caption>
            <Table.Head>
                <Table.HeadCell className="min-w-[150px]">
                    <p className="text-body-6 font-medium text-metal-400">
                        Service
                    </p>
                </Table.HeadCell>
                <Table.HeadCell
                    className="min-w-[80px]"
                    icon={<ArrowsDownUp size={14} color="#8897AE" />}
                >
                    Price
                </Table.HeadCell>

                <Table.HeadCell
                    className="min-w-[40px]"
                    // icon={<ArrowsDownUp size={14} color="#8897AE" />}
                >
                    Action
                </Table.HeadCell>
                {/* <Table.HeadCell className="min-w-[100px]" /> */}
            </Table.Head>
            <Table.Body className="divide-y divide-gray-25">
                <Table.Row className="bg-white">
                    <Table.Cell>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Avatar
                                        shape="square"
                                        img={userLogo.src}
                                        size="md"
                                    />
                                    <div>
                                        <p className="-mb-0.5 text-body-4 font-semibold text-metal-600 lg:text-lg">
                                            Dry Clean
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <p className="text-body-5 font-medium text-metal-500">
                            $652.00
                        </p>
                    </Table.Cell>

                    <Table.Cell>
                        <div className="flex gap-3">
                            <span
                                title="Add to Cart"
                                className="cursor-pointer"
                            >
                                <ShoppingCart size={20} color="green" />
                            </span>
                            <span
                                title="Remove From Wishlist"
                                className="cursor-pointer"
                            >
                                <Trash size={20} color="red" />
                            </span>
                        </div>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

export default WishListTable;
