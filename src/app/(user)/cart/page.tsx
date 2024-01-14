import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import CartTable from "./CartTable";
import OrderSummary from "./OrderSummary";

const items = [
    {
        label: "Cart",
        link: "/cart",
    },
];

const CartPage = () => {
    return (
        <div>
            <BreadCrumbComponent items={items} title="My Cart" />
            <div className="max-w-screen-xl mx-auto py-10">
                {/* <div className="lg:grid grid-cols-6 gap-4 lg:space-x-0"> */}
                    {/* <div className="col-span-4 border"> */}
                        <CartTable />
                    {/* </div> */}
                    {/* <div className="col-span-2 mt-5 lg:mt-0"> */}
                        {/* <OrderSummary /> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default CartPage;
