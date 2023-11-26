"use client";

import { Dropdown, Navbar } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    AddressBook,
    Heart,
    ListNumbers,
    ShoppingCart,
    SignIn,
    SignOut,
    User,
} from "phosphor-react";
import cleanoLogo from "../../../assets/images/cleano-logo.png";

const NavbarComponent = () => {
    const pathName = usePathname();

    const isUserLoggedIn = false;

    return (
        <div>
            <div className="max-w-screen-xl mx-auto py-1">
                <Navbar>
                    <Navbar.Container className="flex items-center justify-between">
                        <Navbar.Toggle />
                        <Link href="/">
                            <Image
                                src={cleanoLogo}
                                alt="Cleano Logo"
                                className="w-28 lg:w-48"
                            />
                        </Link>

                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden items-center justify-between gap-8 text-lg font-semibold text-black "
                        >
                            <Link
                                href="/home"
                                className={`hover:text-[#51B765] transition-all duration-300  ${
                                    pathName.includes("/home") &&
                                    "border-[#51B765] border-b-4 rounded text-[#51B765]"
                                }`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className={`hover:text-[#51B765] transition-all duration-300  ${
                                    pathName.includes("/services") &&
                                    "border-[#51B765] border-b-4 rounded text-[#51B765]"
                                }`}
                            >
                                Services
                            </Link>
                            <Link
                                href="/blogs"
                                className={`hover:text-[#51B765] transition-all duration-300  ${
                                    pathName.includes("/blogs") &&
                                    "border-[#51B765] border-b-4 rounded text-[#51B765]"
                                }`}
                            >
                                Blogs
                            </Link>
                            <Link
                                href="/about-us"
                                className={`hover:text-[#51B765] transition-all duration-300  ${
                                    pathName.includes("/about-us") &&
                                    "border-[#51B765] border-b-4 rounded text-[#51B765]"
                                }`}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact-us"
                                className={`hover:text-[#51B765] transition-all duration-300  ${
                                    pathName.includes("/contact-us") &&
                                    "border-[#51B765] border-b-4 rounded text-[#51B765]"
                                }`}
                            >
                                Contact Us
                            </Link>
                        </Navbar.Container>

                        <Navbar.Collapse collapseType="sidebar">
                            <Navbar.Container
                                tag="ul"
                                className="flex flex-col gap-5"
                            >
                                <Link href="/home">Home</Link>
                                <Link href="/services">Services</Link>
                                <Link href="/blogs">Blogs</Link>
                                <Link href="/about-us">About Us</Link>
                                <Link href="/contact-us">Contact Us</Link>
                            </Navbar.Container>
                        </Navbar.Collapse>

                        <Navbar.Container className="flex items-center gap-2 lg:gap-3">
                            <Link
                                href="/cart"
                                className="flex items-center border px-2 py-1 rounded hover:text-white hover:bg-[#51B765] hover:b-[#51B765] transition-all duration-300"
                            >
                                <span>
                                    <ShoppingCart size={20} />
                                </span>
                                <span className="ml-1 text-metal-600">
                                    $0.00
                                </span>
                            </Link>
                            <Navbar.Container
                                tag="ul"
                                className="flex items-center justify-between lg:gap-3"
                            >
                                <Navbar.Link
                                    icon={<Heart size={20} color="#444" />}
                                    iconAnimation={false}
                                />

                                <Dropdown
                                    label={<User size={20} color="#444" />}
                                    type=""
                                    size="sm"
                                    dismissOnClick={true}
                                    arrowIcon={false}
                                >
                                    {isUserLoggedIn && (
                                        <>
                                            <Link href="/account">
                                                <Dropdown.Item
                                                    icon={
                                                        <User
                                                            size={20}
                                                            color="#444"
                                                        />
                                                    }
                                                >
                                                    My Account
                                                </Dropdown.Item>
                                            </Link>
                                            <Link href="/orders">
                                                <Dropdown.Item
                                                    icon={
                                                        <ListNumbers
                                                            size={20}
                                                            color="#5E718D"
                                                        />
                                                    }
                                                >
                                                    My Orders
                                                </Dropdown.Item>
                                            </Link>
                                        </>
                                    )}

                                    {/* My Wishlist */}
                                    <Link href="/wishlist">
                                        <Dropdown.Item
                                            icon={
                                                <Heart
                                                    size={20}
                                                    color="#5E718D"
                                                />
                                            }
                                        >
                                            My Wishlist
                                        </Dropdown.Item>
                                    </Link>
                                    {/* My Cart */}
                                    <Link href="/cart">
                                        <Dropdown.Item
                                            icon={
                                                <ShoppingCart
                                                    size={20}
                                                    color="#5E718D"
                                                />
                                            }
                                        >
                                            My Cart
                                        </Dropdown.Item>
                                    </Link>

                                    {!isUserLoggedIn ? (
                                        <>
                                            <Link href="/register">
                                                <Dropdown.Item
                                                    icon={
                                                        <AddressBook
                                                            size={20}
                                                            color="#5E718D"
                                                        />
                                                    }
                                                >
                                                    Register
                                                </Dropdown.Item>
                                            </Link>

                                            <Link href="/login">
                                                <Dropdown.Item
                                                    icon={
                                                        <SignIn
                                                            size={20}
                                                            color="#5E718D"
                                                        />
                                                    }
                                                >
                                                    Login
                                                </Dropdown.Item>
                                            </Link>
                                        </>
                                    ) : (
                                        <Dropdown.Item
                                            icon={
                                                <SignOut
                                                    size={20}
                                                    color="#5E718D"
                                                />
                                            }
                                        >
                                            Logout
                                        </Dropdown.Item>
                                    )}
                                </Dropdown>
                            </Navbar.Container>
                        </Navbar.Container>
                    </Navbar.Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavbarComponent;
