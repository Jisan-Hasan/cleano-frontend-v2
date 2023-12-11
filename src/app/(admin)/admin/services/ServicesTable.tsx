"use client";

import Toggle from "@/components/ui/Toggle";
import { Avatar, Badge, Button, Table } from "keep-react";
import Link from "next/link";
import { ArrowsDownUp, Cube, Pencil, Star, Trash } from "phosphor-react";
import serviceImage from "../../../../assets/images/avatar.png";

export const ServiceTable = () => {
    return (
        <Table showCheckbox={false}>
            <Table.Caption>
                <div className="my-5 flex items-center justify-between px-6">
                    <div className="flex items-center gap-5">
                        <p className="text-body-1 font-semibold text-metal-600">
                            Services
                        </p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link href="/admin/services/create">
                            <Button type="outlineGray" size="sm">
                                <span className="pr-2">
                                    <Cube size={24} />
                                </span>
                                Add New Service
                            </Button>
                        </Link>
                    </div>
                </div>
            </Table.Caption>
            <Table.Head>
                <Table.HeadCell className="min-w-[80px]">
                    <p className="text-body-6 font-medium text-metal-400">
                        Image
                    </p>
                </Table.HeadCell>
                <Table.HeadCell
                    className="min-w-[120px]"
                    icon={<ArrowsDownUp size={14} color="#8897AE" />}
                >
                    Title
                </Table.HeadCell>
                <Table.HeadCell
                    className="min-w-[80px]"
                    icon={<ArrowsDownUp size={14} color="#8897AE" />}
                >
                    Price
                </Table.HeadCell>
                <Table.HeadCell
                    className="min-w-[80px]"
                    icon={<ArrowsDownUp size={14} color="#8897AE" />}
                >
                    Rating
                </Table.HeadCell>
                <Table.HeadCell
                    className="min-w-[80px]"
                    icon={<ArrowsDownUp size={14} color="#8897AE" />}
                >
                    Availability
                </Table.HeadCell>
                <Table.HeadCell className="min-w-[100px]">
                    Action
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-gray-25">
                <Table.Row className="bg-white">
                    <Table.Cell>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-4">
                                <div>
                                    <Avatar
                                        shape="square"
                                        img={serviceImage.src}
                                        size="xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <p className="text-body-5 lg:text-lg font-medium text-metal-500">
                            Shirt Clean
                        </p>
                    </Table.Cell>
                    <Table.Cell>
                        <p className="text-body-5 font-medium text-metal-500">
                            $652.00
                        </p>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="inline-block">
                            <Badge
                                colorType="light"
                                color="success"
                                icon={<Star size={16} weight="light" />}
                                iconPosition="left"
                            >
                                4.4
                            </Badge>
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div>
                            <Toggle />
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex gap-3">
                            <Pencil size={20} color="green" />
                            <Trash size={20} color="red" />
                        </div>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};
