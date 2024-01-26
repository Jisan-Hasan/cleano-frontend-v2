import BreadCrumbComponent from "@/components/ui/BreadCrumb";

import ContactForm from "./ContactForm";

const items = [
  {
    label: "Contact Us",
    link: "/contact-us",
  },
];

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactUsPage = () => {
  return (
    <>
      <div>
        <BreadCrumbComponent items={items} title="Contact Us" />

        <div>
          <section className="" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
              <div className="mb-4">
                <div className="space-y-5 text-center">
                  <h6 className="text-lg text-[#52B765]">[Contact Us]</h6>
                  <h1 className="text-8xl font-bold">Get in Touch With Us</h1>
                </div>
              </div>
              <div className="flex items-stretch justify-center">
                <div className="grid md:grid-cols-2">
                  <div className="h-full pr-6">
                    <p className="mb-12 mt-3 text-lg">
                      Are you looking for a reliable laundry and dry cleaning
                      service provider? We are here to help you. We are a
                      professional laundry and dry cleaning service provider
                      with years of experience in the industry.
                    </p>
                    <ul className="mb-6 md:mb-0">
                      <li className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-[#52B765] text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                          </svg>
                        </div>
                        <div className="mb-4 ml-4">
                          <h3 className="mb-2 text-lg font-medium leading-6">
                            Our Address
                          </h3>
                          <p className="">39/A, Muktijudda Road</p>
                          <p className="">Vatara, Badda</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-[#52B765] text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                          </svg>
                        </div>
                        <div className="mb-4 ml-4">
                          <h3 className="mb-2 text-lg font-medium leading-6">
                            Contact
                          </h3>
                          <p>Mobile: (+88) 01951-005859</p>
                          <p>Mail: info@cleano.com</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-[#52B765] text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                            <path d="M12 7v5l3 3"></path>
                          </svg>
                        </div>
                        <div className="mb-4 ml-4">
                          <h3 className="mb-2 text-lg font-medium leading-6 ">
                            Working hours
                          </h3>
                          <p>Monday - Friday: 08:00 - 17:00</p>
                          <p>Saturday &amp; Sunday: 08:00 - 12:00</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
