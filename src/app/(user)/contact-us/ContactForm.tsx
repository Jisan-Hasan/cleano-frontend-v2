"use client";

import { contactUsSchema } from "@/schemas/contact.schema";
import { useYupValidationResolver } from "@/utils/schema-validator";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
    name: string;
    email: string;
    message: string;
};

const ContactForm = () => {
    const resolver = useYupValidationResolver(contactUsSchema);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>({ resolver });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // console.log(data);

        toast.success("Our team will be in touch shortly");
        reset();
    };
    return (
        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
            <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                        <div className="mx-0 mb-1 sm:mb-4">
                            <label
                                htmlFor="name"
                                className="pb-1 text-xs uppercase tracking-wider"
                            ></label>
                            <input
                                type="text"
                                id="name"
                                autoComplete="given-name"
                                placeholder="Your name"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-800 sm:mb-0"
                                {...register("name", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                            <label
                                htmlFor="email"
                                className="pb-1 text-xs uppercase tracking-wider"
                            ></label>
                            <input
                                type="email"
                                id="email"
                                autoComplete="email"
                                placeholder="Your email address"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  text-gray-800 sm:mb-0"
                                {...register("email", {
                                    required: true,
                                })}
                            />
                        </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                        <label
                            htmlFor="textarea"
                            className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <textarea
                            id="textarea"
                            cols={30}
                            rows={5}
                            placeholder="Write your message..."
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-800 sm:mb-0"
                            {...register("message", {
                                required: true,
                            })}
                        ></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-[#52B765] text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
