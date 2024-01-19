"use client";

import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";
import { Avatar, Table } from "keep-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowsDownUp, Trash } from "phosphor-react";

const CartTable = () => {
  // hooks
  const dispatch = useAppDispatch();

  // get cart items from redux store
  const { cart } = useAppSelector((state) => state.cart);

  //   console.log(cart);

  return (
    <Table showCheckbox={false}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 text-metal-600 font-semibold">
              My Service Cart
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/services" className="px-3 py-2 hover:text-[#51B765]">
              Add New Service to Cart
            </Link>
          </div>
        </div>
      </Table.Caption>
      <Table.Head>
        <Table.HeadCell className="min-w-[150px]">
          <p className="text-body-6 text-metal-400 font-medium">Service</p>
        </Table.HeadCell>
        <Table.HeadCell
          className="flex min-w-[100px] justify-center"
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
        {cart &&
          cart?.length > 0 &&
          cart?.map((item: any) => (
            <Table.Row className="bg-white" key={item.id}>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar shape="square" img={item.image} size="md" />
                      <div>
                        <p className="text-body-4 text-metal-600 -mb-0.5 font-semibold lg:text-lg">
                          {item.title}
                        </p>
                        <span className="text-body-6 text-metal-500 font-normal">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell className="flex items-center justify-center">
                <div className="mt-1 flex h-10 w-28 items-center rounded border border-gray-200">
                  <button
                    // tabIndex="-1"
                    // for="show_more"
                    className="cursor-pointer border-r border-gray-200 text-gray-500 outline-none transition-all hover:text-blue-600 focus:outline-none"
                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                    disabled={item.quantity === 1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-2 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <input
                    name="soda"
                    id="soda"
                    className="w-full appearance-none bg-transparent px-2 text-center text-gray-800 outline-none"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    // tabIndex="-1"
                    // for="show_more"
                    className="cursor-pointer border-l border-gray-200 text-gray-500 outline-none transition-all hover:text-blue-600 focus:outline-none"
                    onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                    disabled={item.quantity === 99}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-2 h-4 w-4 fill-current"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 text-metal-500 font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </Table.Cell>

              <Table.Cell>
                <Trash
                  size={20}
                  color="red"
                  className="cursor-pointer"
                  onClick={() => dispatch(removeFromCart({ id: item?.id }))}
                />
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};

export default dynamic(() => Promise.resolve(CartTable), { ssr: false });
