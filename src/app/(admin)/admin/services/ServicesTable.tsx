"use client";

import Loading from "@/app/loading";
import {
    useDeleteServiceMutation,
    useGetAllServicesQuery,
    useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import { Switch } from "@headlessui/react";
import { Avatar, Badge, Button, Modal, Table } from "keep-react";
import Link from "next/link";
import { ArrowsDownUp, Cube, Pencil, Star, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ServiceTable = () => {
    // state for delete modal
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    // state for selected service id , it will be used for deletion and updation
    const [selectService, setSelectService] = useState<string>("");

    // get all services from api
    const { data, isLoading } = useGetAllServicesQuery({});

    // mutation for update service
    const [updateService, { isError }] = useUpdateServiceMutation();
    // mutation for delete service
    const [
        deleteService,
        { isError: isDeletionError, isSuccess: isDeleteSuccessful },
    ] = useDeleteServiceMutation();

    // show toast message on delete service error
    useEffect(() => {
        // show toast message on delete service error
        if (isDeletionError) {
            toast.dismiss();
            toast.error("Can't delete service. Try again.");
        }
        // show toast message on delete service success
        if (isDeleteSuccessful) {
            toast.dismiss();
            toast.success("Service deleted successfully.");
        }
        // show toast message on update service error
        if (isError) {
            toast.error("Can't update service. Try again.");
        }
    }, [isDeletionError, isDeleteSuccessful, isError]);

    // confirm deletion of service -> it will invoke when user click on the delete button in modal
    const onClickDelete = async () => {
        setShowDeleteModal(false);
        try {
            toast.loading("Deleting service...");
            await deleteService(selectService);
        } catch (error) {
            toast.error("Can't delete service. Try again.");
        }
    };

    // close modal -> it will invoke when user click on the cancel button in modal
    const closeModal = () => {
        setShowDeleteModal(false);
        setSelectService("");
    };

    // handle delete button click -> it will invoke when user click on the delete icon in table
    const handleDeleteButtonClick = (id: string) => {
        setSelectService(id);
        setShowDeleteModal(true);
    };

    // handle is available switch -> it will invoke when user click on the switch in table
    const handleIsAvailableSwitch = async (
        id: string,
        isAvailable: boolean
    ) => {
        await updateService({ id, data: { isAvailable } });
        if (isError) {
            toast.error("Can't update service availability. Try again.");
        }
    };

    // show loading component when data is fetching from api
    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
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
                    {data?.data.map((service: any, idx: number) => (
                        <Table.Row className="bg-white" key={idx}>
                            <Table.Cell>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <Avatar
                                                shape="square"
                                                img={service.image}
                                                size="xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <p className="text-body-5 lg:text-lg font-medium text-metal-500">
                                    {service.title}
                                </p>
                            </Table.Cell>
                            <Table.Cell>
                                <p className="text-body-5 font-medium text-metal-500">
                                    ${service.price}
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
                                    <Switch
                                        checked={service?.isAvailable}
                                        onChange={() =>
                                            handleIsAvailableSwitch(
                                                service?.id,
                                                !service?.isAvailable
                                            )
                                        }
                                        className={`${
                                            service?.isAvailable
                                                ? "bg-blue-600"
                                                : "bg-gray-200"
                                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                                    >
                                        <span className="sr-only">
                                            Enable notifications
                                        </span>
                                        <span
                                            className={`${
                                                service?.isAvailable
                                                    ? "translate-x-6"
                                                    : "translate-x-1"
                                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                        />
                                    </Switch>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex gap-3">
                                    <Link
                                        href={`/admin/services/edit/${service?.id}`}
                                    >
                                        <div className="cursor-pointer">
                                            <Pencil size={20} color="green" />
                                        </div>
                                    </Link>

                                    <div
                                        className="cursor-pointer"
                                        onClick={() =>
                                            handleDeleteButtonClick(service?.id)
                                        }
                                    >
                                        <Trash size={20} color="red" />
                                    </div>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            {/* render modal here */}
            {showDeleteModal && selectService && (
                <Modal
                    icon={<Trash size={28} color="#E92215" />}
                    size="md"
                    show={showDeleteModal}
                    onClose={closeModal}
                >
                    <Modal.Header>
                        Do you want to delete this file?
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-body-4 leading-relaxed text-metal-500">
                                Once you delete, it won&apos;t be possible to
                                undo this action. Are you sure you want to
                                delete it?
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="outlineGray" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            color="error"
                            onClick={onClickDelete}
                        >
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};
