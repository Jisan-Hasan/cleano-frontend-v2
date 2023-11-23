"use client";

import { Button, Dropdown, Navbar } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import {
    CaretRight,
    Gear,
    Heart,
    Money,
    ShoppingCart,
    SignOut,
    User,
} from "phosphor-react";
import cleanoLogo from "../../../assets/images/cleano-logo.png";

const NavbarComponent = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-1">
            <Navbar>
                <Navbar.Container className="flex items-center justify-between">
                    <Navbar.Brand>
                        <Image
                            src={cleanoLogo}
                            alt="Cleano Logo"
                            className="w-28 lg:w-48"
                        />
                    </Navbar.Brand>

                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8"
                    >
                        <Link href="/home">Home</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/blogs">Blogs</Link>
                        <Link href="/about-us">About Us</Link>
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
                        </Navbar.Container>
                    </Navbar.Collapse>

                    <Navbar.Container className="flex items-center gap-2 lg:gap-3">
                        <Button size="xs" type="outlineGray">
                            <span>
                                <ShoppingCart size={20} color="#444" />
                            </span>
                            <span className="ml-1 text-metal-600">
                                 $0.00
                            </span>
                        </Button>
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
                                <Dropdown.Item
                                    icon={<User size={20} color="#444" />}
                                >
                                    Dashboard
                                    <span className="ml-auto">
                                        <CaretRight size={20} color="#5E718D" />
                                    </span>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    icon={<Gear size={20} color="#5E718D" />}
                                >
                                    Settings
                                    <span className="ml-auto">
                                        <CaretRight size={20} color="#5E718D" />
                                    </span>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    icon={<Money size={20} color="#5E718D" />}
                                >
                                    Earnings
                                    <span className="ml-auto">
                                        <CaretRight size={20} color="#5E718D" />
                                    </span>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    icon={<SignOut size={20} color="#5E718D" />}
                                >
                                    Sign out
                                    <span className="ml-auto">
                                        <CaretRight size={20} color="#5E718D" />
                                    </span>
                                </Dropdown.Item>
                            </Dropdown>
                        </Navbar.Container>

                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
