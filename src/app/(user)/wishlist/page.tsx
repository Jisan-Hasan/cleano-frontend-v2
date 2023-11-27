import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import WishListTable from "./WishListTable";

const items = [
    {
        label: "Wishlist",
        link: "/wishlist",
    },
];

const WishListPage = () => {
    return (
        <div>
            <BreadCrumbComponent items={items} title="Wishlist" />
            <div className="px-4 2xl:px-0 max-w-screen-xl mx-auto py-8 lg:py-16">
                <div>
                    <WishListTable />
                </div>
            </div>
        </div>
    );
};

export default WishListPage;
