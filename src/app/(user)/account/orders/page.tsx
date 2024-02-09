"use client";

import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import { PaginationComponent } from "@/components/ui/PaginationComponent";
import PrivateRoute from "@/components/ui/PrivateRoute";
import { useGetUserOrdersQuery } from "@/redux/api/orderApi";
import { Table } from "keep-react";
import { ArrowsDownUp, Eye } from "phosphor-react";
import { useState } from "react";
import MyAccountSidebar from "../MyAccountSidebar";
import { useRouter } from "next/navigation";

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
  // local state
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  const limit = 5;
  // get user orders query
  const { data: orderDataResponse } = useGetUserOrdersQuery({
    page: currentPage,
    limit: limit,
  });

  // destructure response
  const { data: ordersData, meta } = orderDataResponse || {};

  // calculate total pages
  const totalPages = Math.ceil(meta?.total / meta?.limit);

  return (
    <PrivateRoute>
      <div>
        <BreadCrumbComponent items={items} title="My Orders" />
        <div className="mx-auto max-w-screen-xl px-4 py-5 lg:py-10 2xl:px-0">
          <div className="flex flex-col-reverse gap-5 lg:flex-row">
            {/* Left Sidebar */}

            <MyAccountSidebar />

            <div className="my-5 flex-1">
              <div className="space-y-4  border px-5 py-3">
                <Table showCheckbox={false}>
                  <Table.Head>
                    <Table.HeadCell>
                      <p className="text-body-6 text-metal-400 font-medium">
                        Serial #
                      </p>
                    </Table.HeadCell>
                    <Table.HeadCell className="">
                      <p className="text-body-6 text-metal-400 font-medium">
                        Order #
                      </p>
                    </Table.HeadCell>
                    <Table.HeadCell
                      icon={<ArrowsDownUp size={14} color="#8897AE" />}
                    >
                      Date
                    </Table.HeadCell>
                    <Table.HeadCell
                      className=""
                      icon={<ArrowsDownUp size={14} color="#8897AE" />}
                    >
                      Total
                    </Table.HeadCell>

                    <Table.HeadCell className="">Payment</Table.HeadCell>

                    <Table.HeadCell
                      className=""
                      icon={<ArrowsDownUp size={14} color="#8897AE" />}
                    >
                      Status
                    </Table.HeadCell>

                    <Table.HeadCell className="">Action</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y divide-gray-25">
                    {ordersData?.map((order: any, index: number) => (
                      <Table.Row className="bg-white" key={index}>
                        <Table.Cell>
                          <div>{limit * (currentPage - 1) + (index + 1)}</div>
                        </Table.Cell>
                        <Table.Cell>
                          <div>{order?.orderNumber}</div>
                        </Table.Cell>
                        <Table.Cell>
                          {order?.createdAt?.split("T")[0]}
                        </Table.Cell>
                        <Table.Cell>
                          <p className="text-body-5 text-metal-500 font-medium">
                            ${order?.total?.toFixed(2)}
                          </p>
                        </Table.Cell>

                        <Table.Cell>
                          <p className="text-body-5 text-metal-500 font-medium">
                            {order?.payment?.method}
                          </p>
                          <p className="text-body-5 text-metal-500 font-medium">
                            {order?.payment?.method !== "cash" &&
                              order?.payment?.is_paid === false && (
                                <div className="cursor-pointer text-red-600">
                                  Pay
                                </div>
                              )}
                          </p>
                        </Table.Cell>

                        <Table.Cell>
                          <p className="text-body-5 text-metal-500 font-medium">
                            {order?.status.charAt(0).toUpperCase() +
                              order?.status.slice(1)}
                          </p>
                        </Table.Cell>

                        <Table.Cell>
                          <span title="View Order" className="cursor-pointer">
                            <Eye size={20} color="gray" onClick={() => router.push(`/account/orders/view/${order?.id}`)} />
                          </span>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
              <div className="mt-5 flex justify-center">
                <PaginationComponent
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default MyOrderPage;
