"use client";

import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cartSlice";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Trash } from "phosphor-react";

const CartTable = () => {
  // hooks
  const dispatch = useAppDispatch();

  // get cart items from redux store
  const { cart } = useAppSelector((state) => state.cart);

  //   console.log(cart);
  // calculate total price of cart items
  const totalPrice = cart
    .reduce((total: number, item: any) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="bg-gray-250 space-y-6 p-8 shadow-md">
      {/* top part  */}
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium capitalize text-slate-800">
          Total Cost: <span className="text-[#52B765]">${totalPrice}</span>
        </h4>
        <Link
          href="/services"
          className="text-sm font-medium capitalize text-gray-400"
        >
          Explore Other Services
        </Link>
      </div>
      <hr />
      {/*  Cart  map */}
      {cart.map((item: any, idx: number) => (
        <div
          key={item?.id}
          className="flex items-center justify-between border-b pb-6"
        >
          <div className="flex max-w-[300px] flex-wrap items-center gap-4">
            <Image
              className=" rounded-lg bg-slate-500"
              width={75}
              height={75}
              src={item.image}
              alt=""
            />
            <div>
              <h5 className="text-lg font-medium">{item?.title}</h5>
              <p className="text-md text-gray-400">${item.price.toFixed(2)}</p>
            </div>
          </div>
          {/* item increase decrees  */}
          <div>
            <div className="flex flex-wrap items-center gap-4 md:gap-10">
              <div className="min-w-[80px] space-x-3 self-end">
                <button
                  className="cursor-pointer px-2 py-1 text-xl duration-200 hover:text-[#52B765]"
                  onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="rounded-sm border px-2.5 py-1 duration-300 ease-in-out hover:border-[#52B765] hover:bg-[#52B765] hover:text-white">
                  {item?.quantity}
                </span>
                <button
                  className="cursor-pointer px-2 py-1 text-xl duration-200 hover:text-[#52B765]"
                  onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                  disabled={item.quantity === 99}
                >
                  +
                </button>
              </div>
              <h6 className="min-w-[80px] text-xl font-medium text-slate-800">
                ${(item?.price * item?.quantity).toFixed(2)}
              </h6>

              {/* Delete Button */}
              <div>
                <Trash
                  size={20}
                  color="red"
                  className="cursor-pointer"
                  onClick={() => dispatch(removeFromCart({ id: item?.id }))}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* calculation part  */}
      <div className="space-y-10">
        {/* <div className="flex items-center justify-between py-6 gap-6 md:gap-14 lg:gap-28">
          <span className="flex-grow"></span>
          <h5 className="text-xl capitalize text-slate-800">total Price :</h5>
          <h4 className="text-xl font-medium text-slate-800">${totalPrice}</h4>
        </div> */}
        <Link href="/cart/checkout">
          <button className="w-full rounded border border-[#52B765] py-4 text-md font-semibold capitalize transition-all duration-500 hover:bg-[#52B765] hover:text-white active:bg-[#278b76]">
            proceed to checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CartTable), { ssr: false });
