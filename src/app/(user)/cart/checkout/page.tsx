"use client";

import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import { DatePickerComponent } from "@/components/ui/DatePickerComponent";
import PrivateRoute from "@/components/ui/PrivateRoute";
import { TimePickerComponent } from "@/components/ui/TimePickerComponent";
import { usePlaceOrderMutation } from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/app/hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import { ChoosePayment } from "./ChoosePayment";
import PickupLocationForm from "./PickupLocationForm";

const items = [
  {
    label: "Cart",
    link: "/cart",
  },
  {
    label: "Checkout",
    link: "/cart/checkout",
  },
];

const CheckoutPage = () => {
  // hooks
  const router = useRouter();

  // react hook form
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue,
    setError,
    clearErrors,
    getValues,
  } = useForm();

  // get cart items from redux store
  const { cart } = useAppSelector((state) => state.cart);

  // iterate through cart items and get product ids and quantities
  const services = cart?.map((item: any) => ({
    id: item?.id,
    quantity: item?.quantity,
  }));

  // place order mutation hook
  const [
    placeOrder,
    {
      data: placeOrderData,
      isLoading: isPlaceOrderLoading,
      isError: isPlaceOrderError,
      error: placeOrderError,
      isSuccess: isPlaceOrderSuccess,
    },
  ] = usePlaceOrderMutation();

  const onSubmit = async (data: any) => {
    const { paymentMethod, ...othersData } = data;
    // console.log({ pickup_details: othersData, services, paymentMethod });

    // check if cart is empty
    if (!services.length) {
      toast.error("Cart is empty");
      return;
    }

    // check if payment method is selected
    if (!paymentMethod) {
      toast.error("Please select a payment method");
      return;
    }

    await placeOrder({
      pickup_details: othersData,
      services,
      paymentMethod,
    })
      .unwrap()
      .then((res) => {
        // console.log(res);

        if (paymentMethod === "cash") {
          toast.success("Order placed successfully");
          router.push("/account/orders");
        } else if (paymentMethod === "card") {
          toast.success("Order placed successfully");
        }
      });
  };

  return (
    <PrivateRoute>
      <div>
        <BreadCrumbComponent title="Checkout" items={items} />
        <form
          className="mx-auto max-w-screen-xl px-4 py-5 lg:py-10 2xl:px-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid-cols-3 gap-5 lg:grid">
            <div className="col-span-2">
              {/* Pickup Location */}
              <div>
                <h3 className="border-b bg-[#F1F1F1] px-3 py-2 text-lg tracking-wide">
                  Pickup Location
                </h3>

                <div className="my-5">
                  <PickupLocationForm register={register} errors={errors} />
                </div>
              </div>
              {/* Pickup time and date */}
              <div>
                <h3 className="border-b bg-[#F1F1F1] px-3 py-2 text-lg tracking-wide">
                  Pickup Date and Time
                </h3>

                <div className="my-5 flex gap-5">
                  <div>
                    <label className="block">Select Pickup Date</label>
                    <div>
                      <DatePickerComponent
                        setValue={setValue}
                        setError={setError}
                        clearErrors={clearErrors}
                      />
                      {errors && errors?.date && (
                        <div className="text-sm text-red-400">
                          {(errors?.date?.message as String) ||
                            "*Invalid Date Input"}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block">Select Pickup Time</label>
                    <TimePickerComponent
                      setValue={setValue}
                      setError={setError}
                      clearErrors={clearErrors}
                      getValues={getValues}
                    />
                    {errors && errors?.time && (
                      <div className="text-sm text-red-400">
                        {(errors?.time?.message as String) ||
                          "*Invalid Time Input"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="border-b bg-[#F1F1F1] px-3 py-2 text-lg tracking-wide">
                  Choose Payment Method
                </h3>

                <div className="my-5 flex gap-5">
                  <ChoosePayment
                    setValue={setValue}
                    setError={setError}
                    clearErrors={clearErrors}
                    errors={errors}
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <CheckoutOrderSummary register={register} />
            </div>
          </div>
        </form>
      </div>
    </PrivateRoute>
  );
};

// export default CheckoutPage;

export default dynamic(() => Promise.resolve(CheckoutPage), {
  ssr: false,
});
