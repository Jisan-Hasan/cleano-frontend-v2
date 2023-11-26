import Link from "next/link";

const subTotal = 0;

const OrderSummary = () => {
    return (
        <div className="border px-3 py-5 shadow-md">
            <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                Bill Details
            </h4>
            <div className="space-y-4">
                {/* <!-- sub total --> */}
                <div className="flex items-center justify-between">
                    <p>Sub Total</p>
                    <p>
                        $ <span className="">{subTotal.toFixed(2)}</span>
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
                        $ <span className="">{subTotal.toFixed(2)}</span>
                    </p>
                </div>
                <Link href="/checkout">
                    <button
                        type="submit"
                        className="w-full border-2 border-[#52B765] bg-[#52B765] text-white hover:text-[#52B765] hover:bg-white px-6 py-3 font-xl text-lg rounded-md sm:mb-0 transition-all duration-700"
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OrderSummary;
