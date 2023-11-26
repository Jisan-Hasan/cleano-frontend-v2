"use client";

import { Breadcrumb } from "keep-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CaretRight, House } from "phosphor-react";
import breadcrumbBanner from "../../assets/images/breadcrumb-bg.jpg";

type IProps = {
    items: {
        label: string;
        link: string;
    }[];
    title: string;
};

const BreadCrumbComponent = ({ items, title }: IProps) => {
    const router = useRouter();
    return (
        <div
            className="bg-no-repeat bg-cover bg-center py-5 md:py-10 lg:py-16 xl:py-18 2xl:py-20 cursor-auto overflow-hidden"
            style={{
                backgroundImage: `url(${breadcrumbBanner.src})`,
            }}
        >
            <div className="max-w-screen-xl mx-auto px-4 2xl:px-0">
                <Breadcrumb
                    breadCrumbWithBorder={false}
                    aria-label="Default breadcrumb example"
                    separatorIcon={<CaretRight size={20} color="#ffffff" />}
                >
                    <Breadcrumb.Item
                        icon={
                            <House
                                size={24}
                                color="#ffffff"
                                onClick={() => router.push("/")}
                                className="cursor-pointer"
                            />
                        }
                    >
                        <Link href="/home" className="text-white lg:text-xl">
                            Home
                        </Link>
                    </Breadcrumb.Item>
                    {items.map((item, index) => {
                        if (index === items.length - 1) {
                            return (
                                <Breadcrumb.Item
                                    key={index}
                                    active="bar"
                                    aria-current="page"
                                >
                                    <span className="lg:text-xl">
                                        {item.label}
                                    </span>
                                </Breadcrumb.Item>
                            );
                        } else {
                            return (
                                <Breadcrumb.Item key={index}>
                                    <Link
                                        href={item.link}
                                        className="text-white  lg:text-xl"
                                    >
                                        {item.label}
                                    </Link>
                                </Breadcrumb.Item>
                            );
                        }
                    })}
                </Breadcrumb>

                <div>
                    <h1 className="mt-3 md:mt-6 lg:mt-8 text-3xl lg:text-6xl 2xl:text-8xl font-semibold tracking-normal text-[#ffffff]">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumbComponent;
