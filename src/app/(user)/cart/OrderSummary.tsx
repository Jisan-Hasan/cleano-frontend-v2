"use client";

import { useAppSelector } from "@/redux/app/hooks";
import Link from "next/link";

const subTotal = 0;

const OrderSummary = () => {
  // get cart items from redux store
  const { cart } = useAppSelector((state) => state.cart);

  // calculate total price of cart items
  const totalPrice = cart
    .reduce((total: number, item: any) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="border px-3 py-5 shadow-md">
      <h4 className="mb-8 mt-2 text-center text-xl font-bold">Bill Details</h4>
      <div className="space-y-4">
        {/* <!-- sub total --> */}
        <div className="flex items-center justify-between">
          <p>Sub Total</p>
          <p>
            $ <span className="">{totalPrice}</span>
          </p>
        </div>
        {/* <!-- Discount --> */}
        <div className="flex items-center justify-between">
          <p>Discount</p>
          <p>
            $ <span className="">{(0).toFixed(2)}</span>
          </p>
        </div>
        {/* <!-- Total --> */}
        <div className="flex items-center justify-between pb-4">
          <p className="font-bold">TOTAL</p>
          <p className="font-bold">
            $ <span className="">{totalPrice}</span>
          </p>
        </div>
        <Link href="/cart/checkout">
          <button
            type="submit"
            className="font-xl w-full rounded-md border-2 border-[#52B765] bg-white px-6 py-3 text-lg text-[#52B765] transition-all duration-700 hover:bg-[#52B765] hover:text-white sm:mb-0"
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
