"use client";

import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import PrivateRoute from "@/components/ui/PrivateRoute";
import Spinner from "@/components/ui/Spinner";
import { useGetOrderDetailsByIdQuery } from "@/redux/api/orderApi";
import { Avatar, Badge, Button, Table } from "keep-react";
import toast from "react-hot-toast";
import MyAccountSidebar from "../../../MyAccountSidebar";

const items = [
  {
    label: "My Account",
    link: "/account",
  },
  {
    label: "My Orders",
    link: "/account/orders",
  },
  {
    label: "Order Details",
    link: "/account/orders",
  },
];

const ViewOrderPage = ({ params }: any) => {
  // destructure order_id from params
  const { order_id } = params;

  // get order details query
  const {
    data: orderDetailsResponse,
    isLoading: isOrderDetailsLoading,
    isError: isOrderDetailsError,
  } = useGetOrderDetailsByIdQuery(order_id);

  const { data: orderDetails } = orderDetailsResponse || {};

  return (
    <PrivateRoute>
      <div>
        <BreadCrumbComponent
          items={items}
          title={`Order - ${orderDetails?.orderNumber}`}
        />
        <div className="mx-auto max-w-screen-xl px-4 py-5 lg:py-10 2xl:px-0">
          <div className="flex flex-col-reverse gap-5 lg:flex-row">
            {/* Left Sidebar */}

            <MyAccountSidebar />

            <div className="my-5 flex-1">
              <div className="space-y-4  border px-5 py-3">
                {/* Table Goes Here */}
                {isOrderDetailsError && (
                  // something went wrong reload the page
                  <div className="text-center text-red-500">
                    Something went wrong! Please reload the page
                  </div>
                )}
                {orderDetailsResponse && (
                  <div className="my-5">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">
                          Order # {orderDetails?.orderNumber}
                        </h3>
                        <p>
                          Order Date:{" "}
                          {new Date(orderDetails?.createdAt).toDateString()}
                        </p>
                        <div>
                          <span className="flex items-center gap-3">
                            Status:
                            <Badge size="xs" colorType="light" color="info">
                              {orderDetails?.status[0].toUpperCase() +
                                orderDetails?.status.slice(1)}
                            </Badge>
                          </span>
                        </div>
                      </div>

                      <div>
                        <div>
                          <span className="flex items-center gap-3">
                            Total:{" "}
                            <span className="font-semibold">
                              ${orderDetails?.total.toFixed(2)}
                            </span>
                          </span>
                        </div>

                        <div>
                          <span className="flex items-center gap-1">
                            Method:{" "}
                            <span className="flex gap-3">
                              {orderDetails?.payment?.method[0].toUpperCase() +
                                orderDetails?.payment?.method.slice(1)}

                              {orderDetails?.payment?.method !== "cash" &&
                                orderDetails?.payment?.is_paid === false && (
                                  <div className="cursor-pointer text-red-600">
                                    Pay
                                  </div>
                                )}
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Print Invoice Button */}
                      <Button
                        size="md"
                        type="outlinePrimary"
                        onClick={() =>
                          toast.success(
                            "This feature is unavailable right now. will be added soon",
                          )
                        }
                      >
                        Print Invoice
                      </Button>
                    </div>

                    <hr className="mb-5 mt-8" />

                    {/* Services Ordered */}
                    <div>
                      <Table showCheckbox={false}>
                        <Table.Caption>
                          <div className="my-5 flex items-center justify-between ">
                            <div className="flex items-center gap-5">
                              <p className="text-body-1 text-metal-600 font-semibold">
                                Services Ordered
                              </p>
                            </div>
                          </div>
                        </Table.Caption>
                        <Table.Head>
                          <Table.HeadCell className="min-w-[150px]">
                            <p className="text-body-6 text-metal-400 font-medium">
                              Service
                            </p>
                          </Table.HeadCell>
                          <Table.HeadCell className=" min-w-[100px]">
                            Price
                          </Table.HeadCell>
                          <Table.HeadCell className="min-w-[80px]">
                            Quantity
                          </Table.HeadCell>

                          <Table.HeadCell
                            className="min-w-[40px]"
                            // icon={<ArrowsDownUp size={14} color="#8897AE" />}
                          >
                            Total
                          </Table.HeadCell>
                          {/* <Table.HeadCell className="min-w-[100px]" /> */}
                        </Table.Head>
                        <Table.Body className="divide-y divide-gray-25">
                          {orderDetails?.orderItems &&
                            orderDetails?.orderItems?.length > 0 &&
                            orderDetails?.orderItems?.map((item: any) => (
                              <Table.Row className="bg-white" key={item.id}>
                                <Table.Cell>
                                  <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-4">
                                      <div className="flex  gap-2">
                                        <Avatar
                                          shape="square"
                                          img={item?.service?.image}
                                          size="md"
                                        />
                                        <div>
                                          <p className="text-body-4 text-metal-600 -mb-0.5 font-semibold lg:text-lg">
                                            {item.name}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Table.Cell>
                                <Table.Cell>
                                  <p className="text-body-5 text-metal-500 font-medium">
                                    ${item.price.toFixed(2)}
                                  </p>
                                </Table.Cell>
                                <Table.Cell>
                                  <p className="text-body-5 text-metal-500 font-medium">
                                    {item.quantity}
                                  </p>
                                </Table.Cell>

                                <Table.Cell>
                                  <p className="text-body-5 text-metal-500 font-medium">
                                    ${(item.price * item.quantity).toFixed(2)}
                                  </p>
                                </Table.Cell>
                              </Table.Row>
                            ))}
                        </Table.Body>
                      </Table>
                    </div>
                  </div>
                )}
                {isOrderDetailsLoading && <Spinner />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default ViewOrderPage;
