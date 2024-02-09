"use client";

import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import PrivateRoute from "@/components/ui/PrivateRoute";
import { Table } from "keep-react";
import Link from "next/link";
import { ArrowsDownUp, Eye } from "phosphor-react";
import MyAccountSidebar from "./MyAccountSidebar";

const items = [
  {
    label: "My Account",
    link: "/account",
  },
];

const MyAccountPage = () => {
  return (
    <PrivateRoute>
      <div>
        <BreadCrumbComponent items={items} title="My Account" />
        <div className="mx-auto max-w-screen-xl px-4 py-5 lg:py-10 2xl:px-0">
          <div className="flex flex-col-reverse gap-5 lg:flex-row">
            {/* Left Sidebar */}

            <MyAccountSidebar />

            <div className="flex-1">
              {/* Account Information */}
              <div>
                <h3 className="border-b bg-[#F1F1F1] px-3 py-2 text-lg tracking-wide">
                  Account Information
                </h3>

                <div className="my-5">
                  <div className="max-w-md space-y-4 border px-5 py-3">
                    <h3 className="text-lg tracking-wide">
                      Contact Information
                    </h3>
                    <div>
                      <p>Jisan Hasan</p>
                      <p>jisan.jh5@gmail.com</p>
                    </div>
                    <div>
                      <Link
                        href="/account/change-password"
                        className="text-sm text-blue-400"
                      >
                        Change Password
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address  Book */}
              <div>
                <h3 className="border-b bg-[#F1F1F1] px-3 py-2 text-lg tracking-wide">
                  Address Book
                </h3>

                <div className="my-5">
                  <div className="max-w-md space-y-4 border px-5 py-3">
                    <h3 className="text-lg tracking-wide">
                      Default Billing Address
                    </h3>
                    <div>
                      <p>Jisan Hasan</p>
                      <p>jisan.jh5@gmail.com</p>
                      <p>+8801951005859</p>
                      <p>39/A, Mahamudkathi</p>
                      <p>Swarupkathi, Nesarabad, Pirojpur</p>
                    </div>
                    <div>
                      <Link href="/account/" className="text-sm text-blue-400">
                        Edit Address
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address  Book */}
              <div>
                <h3 className="flex justify-between border-b bg-[#F1F1F1] px-3 py-2 text-lg tracking-wide">
                  <span>Recent Orders</span>
                  <Link
                    href="/account/orders"
                    className="flex items-center gap-2 text-base hover:text-blue-400"
                  >
                    View All <Eye size="20" />
                  </Link>
                </h3>

                <div className="my-5">
                  <div className="space-y-4  border px-5 py-3">
                    <Table showCheckbox={false}>
                      <Table.Head>
                        <Table.HeadCell className="">
                          <p className="text-body-6 text-metal-400 font-medium">
                            Order #
                          </p>
                        </Table.HeadCell>
                        <Table.HeadCell
                          className="flex justify-center"
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
                        <Table.HeadCell
                          className=""
                          icon={<ArrowsDownUp size={14} color="#8897AE" />}
                        >
                          Status
                        </Table.HeadCell>

                        <Table.HeadCell className="">Action</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y divide-gray-25">
                        <Table.Row className="bg-white">
                          <Table.Cell>
                            <div>0156387</div>
                          </Table.Cell>
                          <Table.Cell className="flex items-center justify-center">
                            {new Date().toLocaleDateString()}
                          </Table.Cell>
                          <Table.Cell>
                            <p className="text-body-5 text-metal-500 font-medium">
                              $652.00
                            </p>
                          </Table.Cell>

                          <Table.Cell>
                            <p className="text-body-5 text-metal-500 font-medium">
                              Pending
                            </p>
                          </Table.Cell>

                          <Table.Cell>
                            <Eye size={20} color="gray" />
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default MyAccountPage;
