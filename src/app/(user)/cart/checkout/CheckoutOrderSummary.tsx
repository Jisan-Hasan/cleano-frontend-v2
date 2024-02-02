"use client";

import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { decreaseQuantity, increaseQuantity } from "@/redux/features/cartSlice";
import { TextInput, Textarea } from "keep-react";
// import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const CheckoutOrderSummary = ({ register }: any) => {
  // hooks
  const dispatch = useAppDispatch();

  const [isAgree, setIsAgree] = useState(false);

  // get cart items from redux store
  const { cart } = useAppSelector((state) => state.cart);

  // calculate total price
  const totalPrice = cart
    ?.reduce(
      (total: number, item: any) => total + item?.price * item?.quantity,
      0,
    )
    .toFixed(2);

  return (
    <div className="space-y-4 bg-[#F5F5F5] p-5">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <Link href="/services" className="px-3 py-2 hover:text-[#51B765]">
            Add Service
          </Link>
        </div>
        <hr className="mt-1" />
      </div>
      {/* Services */}
      <div>
        {cart?.length === 0 && (
          <div className="flex items-center justify-center">
            <p className="text-lg text-gray-500">No service in cart</p>
          </div>
        )}
        {cart?.map((item: any, index: number) => (
          <div key={index}>
            <div className="flex items-center gap-3">
              <div className="h-20 w-20">
                <Image
                  src={item?.image}
                  alt="product image"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="font-medium md:text-lg">{item?.title}</h4>
                <div className="flex items-center justify-between">
                  <div className="mt-1 flex h-8 w-28 items-center rounded border border-gray-200">
                    <button
                      // tabIndex="-1"
                      // for="show_more"
                      className="cursor-pointer border-r border-gray-200 text-gray-500 outline-none transition-all hover:text-blue-600 focus:outline-none"
                      onClick={() =>
                        dispatch(decreaseQuantity({ id: item.id }))
                      }
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
                      onClick={() =>
                        dispatch(increaseQuantity({ id: item.id }))
                      }
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
                  <p className="justify-self-end">
                    ${(item?.quantity * item?.price).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <hr className="my-2" />
          </div>
        ))}
      </div>
      {/* Discount Form & Special Note */}
      <div>
        {/* Discount Form */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <TextInput
              id="input"
              placeholder="Apply Discount Code"
              color="gray"
              sizing="sm"
            />
          </div>
          <button
            className="rounded-md border bg-[#F1F1F1] px-3 py-[5px]"
            type="button"
            onClick={() => toast.error("Invalid Discount Code")}
          >
            Apply
          </button>
        </div>
        {/* Add Special Note Form */}
        <div className="mt-2">
          <Textarea
            placeholder="Add a note for your order"
            withBg={true}
            color="gray"
            border={true}
            rows={2}
            {...register("note", { required: false })}
          />
        </div>
        <hr className="mt-2" />
      </div>

      {/* Total */}
      <div className="space-y-1">
        <div className="flex justify-between">
          <p>Cart Subtotal</p>
          <p>${totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between">
          <p>Order Total</p>
          <p>${totalPrice}</p>
        </div>
      </div>
      {/* Agree With Terms and Conditions */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={isAgree}
          onChange={() => setIsAgree(!isAgree)}
        />
        <label htmlFor="terms">I agree with the terms and conditions</label>
      </div>
      {/* Place Order Button */}
      <div>
        <button
          type="submit"
          className="font-xl hover:translate- w-full rounded-md border-2 border-[#52B765] bg-[#52B765] px-6 py-3 text-lg text-white transition-all   duration-700 disabled:cursor-not-allowed disabled:opacity-30 sm:mb-0"
          disabled={cart?.length === 0 || !isAgree}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutOrderSummary;

// export default dynamic(() => Promise.resolve(CheckoutOrderSummary), {
//   ssr: false,
// });
