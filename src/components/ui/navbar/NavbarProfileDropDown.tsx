import { useAppDispatch } from "@/redux/app/hooks";
import { clearToken } from "@/redux/features/authSlice";
import { isLoggedIn } from "@/utils/auth";
import { Dropdown } from "keep-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    AddressBook,
    Heart,
    ListNumbers,
    ShoppingCart,
    SignIn,
    SignOut,
    User,
} from "phosphor-react";

const NavbarProfileDropDown = () => {
    const pathName = usePathname();
    const dispatch = useAppDispatch();
    const router = useRouter();

    const isUserLoggedIn = isLoggedIn();

    const handleLogout = () => {
        // clear token from local storage and state
        dispatch(clearToken());
        // reload the page
        if (typeof window !== "undefined") {
            window.location.reload();
        } else {
            router.push("/");
        }
    };
    return (
        <>
            {isUserLoggedIn && (
                <>
                    <Link href="/account">
                        <Dropdown.Item icon={<User size={20} color="#444" />}>
                            My Account
                        </Dropdown.Item>
                    </Link>
                    <Link href="/account/orders">
                        <Dropdown.Item
                            icon={<ListNumbers size={20} color="#5E718D" />}
                        >
                            My Orders
                        </Dropdown.Item>
                    </Link>
                </>
            )}

            {/* My Wishlist */}
            <Link href="/wishlist">
                <Dropdown.Item icon={<Heart size={20} color="#5E718D" />}>
                    My Wishlist
                </Dropdown.Item>
            </Link>
            {/* My Cart */}
            <Link href="/cart">
                <Dropdown.Item
                    icon={<ShoppingCart size={20} color="#5E718D" />}
                >
                    My Cart
                </Dropdown.Item>
            </Link>

            {!isUserLoggedIn ? (
                <>
                    <Link href="/register">
                        <Dropdown.Item
                            icon={<AddressBook size={20} color="#5E718D" />}
                        >
                            Register
                        </Dropdown.Item>
                    </Link>

                    <Link href="/login">
                        <Dropdown.Item
                            icon={<SignIn size={20} color="#5E718D" />}
                        >
                            Login
                        </Dropdown.Item>
                    </Link>
                </>
            ) : (
                <Dropdown.Item
                    icon={<SignOut size={20} color="#5E718D" />}
                    onClick={handleLogout}
                >
                    Logout
                </Dropdown.Item>
            )}
        </>
    );
};

// dynamic export
export default dynamic(() => Promise.resolve(NavbarProfileDropDown), {
    ssr: false,
});
