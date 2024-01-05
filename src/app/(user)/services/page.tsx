"use client";

import Loading from "@/app/loading";
import BreadCrumbComponent from "@/components/ui/BreadCrumb";
import ServiceCard from "@/components/ui/ServiceCard";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { useRouter } from "next/navigation";

const items = [
  {
    label: "Services",
    link: "/services",
  },
];

const ServicesPage = () => {
  // hooks
  const router = useRouter();

  // get all services query hook
  const { data, isLoading, isError, error, isSuccess } = useGetAllServicesQuery(
    {
      page: 1,
      limit: 100,
    },
  );

  //   decide what to render based on query status
  let content = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (isError) {
    // show a generic error message and a refresh button
    content = (
      <div className="w-full">
        <div className="mx-auto flex w-full flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Something went wrong</h1>
          <p className="text-lg text-[#52B765]">{(error as Error)?.message}</p>
          <button
            onClick={() => router.refresh()}
            className="mt-4 rounded-sm border border-[#52B765] px-6 py-2 text-[#52B765] transition-all duration-200 hover:bg-[#52B765] hover:text-white"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  if (isSuccess && data?.data?.length > 0) {
    content = (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.data?.map((service: any) => <ServiceCard key={service?.id} service={service} />)}
      </div>
    );
  }

  return (
    <div>
      <BreadCrumbComponent items={items} title="Services" />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="py-10">
          <div className="space-y-5 text-center">
            <h6 className="text-lg text-[#52B765]">[Our Services]</h6>
            <h1 className="text-4xl font-bold lg:text-8xl">
              Our Cleaning & Laundry Services
            </h1>
            <p className="mx-auto max-w-md leading-7">
              Our prices are simple and affordable which are easy on pocket in
              comparison with the high street prices
            </p>
          </div>
        </div>
        <div className="mb-10">
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
