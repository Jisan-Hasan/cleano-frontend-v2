"use client";

import { Avatar, NumberInput, Table } from "keep-react";
import Link from "next/link";
import { ArrowsDownUp, Trash } from "phosphor-react";
import { useState } from "react";
import userLogo from "../../../assets/images/avatar.png";

const CartTable = () => {
    const [value, setValue] = useState(1);
    return (
        <Table showCheckbox={false}>
            <Table.Caption>
                <div className="my-5 flex items-center justify-between px-6">
                    <div className="flex items-center gap-5">
                        <p className="text-body-1 font-semibold text-metal-600">
                            My Service Cart
                        </p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link
                            href="/services"
                            className="hover:text-[#51B765] px-3 py-2"
                        >
                            Add New Service to Cart
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
                    className="min-w-[100px] flex justify-center"
                    icon={<ArrowsDownUp size={14} color="#8897AE" />}
                >
                    Quantity
                </Table.HeadCell>
                <Table.HeadCell
                    className="min-w-[80px]"
                    icon={<ArrowsDownUp size={14} color="#8897AE" />}
                >
                    Total
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
                                        <span className="text-body-6 font-normal text-metal-500">
                                            $10.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell className="flex justify-center items-center">
                        <NumberInput
                            sizing="sm"
                            value={value}
                            setValue={setValue}
                        />
                    </Table.Cell>
                    <Table.Cell>
                        <p className="text-body-5 font-medium text-metal-500">
                            $652.00
                        </p>
                    </Table.Cell>

                    <Table.Cell>
                        <Trash size={20} color="red" />
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

export default CartTable;
