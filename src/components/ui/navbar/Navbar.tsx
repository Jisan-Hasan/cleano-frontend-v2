"use client";

import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { Dropdown, Navbar } from "keep-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingCart, User } from "phosphor-react";
import cleanoLogo from "../../../assets/images/cleano-logo.png";
import NavbarProfileDropDown from "./NavbarProfileDropDown";

const NavbarComponent = () => {
  // hooks
  const pathName = usePathname();
  const dispatch = useAppDispatch();

  // get cart value from redux store
  const { cart } = useAppSelector((state) => state.cart);

  // calculate total price of cart items
  const totalPrice = cart.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <div className="mx-auto max-w-screen-xl py-1">
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
              className="hidden items-center justify-between gap-8 font-semibold text-black lg:flex "
            >
              <Link
                href="/home"
                className={`transition-all duration-300 hover:text-[#51B765]  ${
                  pathName.includes("/home") &&
                  "rounded border-b-4 border-[#51B765] text-[#51B765]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`transition-all duration-300 hover:text-[#51B765]  ${
                  pathName.includes("/services") &&
                  "rounded border-b-4 border-[#51B765] text-[#51B765]"
                }`}
              >
                Services
              </Link>
              <Link
                href="/blogs"
                className={`transition-all duration-300 hover:text-[#51B765]  ${
                  pathName.includes("/blogs") &&
                  "rounded border-b-4 border-[#51B765] text-[#51B765]"
                }`}
              >
                Blogs
              </Link>
              <Link
                href="/about-us"
                className={`transition-all duration-300 hover:text-[#51B765]  ${
                  pathName.includes("/about-us") &&
                  "rounded border-b-4 border-[#51B765] text-[#51B765]"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className={`transition-all duration-300 hover:text-[#51B765]  ${
                  pathName.includes("/contact-us") &&
                  "rounded border-b-4 border-[#51B765] text-[#51B765]"
                }`}
              >
                Contact Us
              </Link>
            </Navbar.Container>

            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
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
                className="hover:b-[#51B765] flex items-center rounded border px-2 py-1 transition-all duration-300 hover:bg-[#51B765] hover:text-white"
              >
                <span>
                  <ShoppingCart size={20} />
                </span>
                <span className="text-metal-600 ml-1">${totalPrice}</span>
              </Link>
              <div>
                <Navbar.Container
                  tag="ul"
                  className="flex items-center justify-between"
                >
                  <Link
                    href="/wishlist"
                    className="rounded-full bg-gray-50 p-2 hover:bg-[#51B765] hover:text-white"
                  >
                    <Heart size={20} className="" />
                  </Link>

                  {/* Dynamic options for users */}
                  <Dropdown
                    label={
                      <div className="rounded-full bg-gray-50 p-2 hover:bg-[#51B765] hover:text-white">
                        <User size={20} className="" />
                      </div>
                    }
                    type=""
                    size="sm"
                    dismissOnClick={true}
                    arrowIcon={false}
                  >
                    <NavbarProfileDropDown />
                  </Dropdown>
                </Navbar.Container>
              </div>
            </Navbar.Container>
          </Navbar.Container>
        </Navbar>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(NavbarComponent), {
  ssr: false,
});
