"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import Spinner from "@/components/ui/Spinner";
import { useCreateServiceMutation } from "@/redux/api/serviceApi";
import { createServiceSchema } from "@/schemas/service.schema";
import { useYupValidationResolver } from "@/utils/schema-validator";
import { TextInput, Textarea, Upload } from "keep-react";
import { HelperText } from "keep-react/lib/esm/components/FormControls/HelperText";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
    title: string;
    price: number;
    description: string;
};

const CreateServiceForm = () => {
    const [fileName, setFileName] = useState<string>("");

    const resolver = useYupValidationResolver(createServiceSchema);

    const [imgSrc, setImgSrc] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const image = event?.target?.files?.[0];

        if (image) {
            setFileName(image.name);
            convertBase64(image).then((res) => {
                setImgSrc(res);
            });
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>({ resolver });

    const convertBase64 = async (file: File) => {
        return new Promise<string | null>((resolve) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result as string);
            };

            fileReader.onerror = () => {
                resolve(null);
            };
        });
    };

    const [createService, { isLoading }] = useCreateServiceMutation();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (!imgSrc || !fileName) {
            toast.error("Please select an image");
            return;
        }
        const serviceData = {
            ...data,
            image: imgSrc,
        };
        try {
            await createService(serviceData)
                .unwrap()
                .then((res) => {
                    toast.success(res.message || "Service created");
                })
                .catch((err) => {
                    toast.error("Can't create service. Try again");
                });
        } catch (error) {
            toast.error("Can't create service. Try again");
        }
        setFileName("");
        reset();
    };

    return (
        <div className="max-w-3xl mx-auto border px-6 py-8 rounded">
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:grid grid-cols-2 gap-3 space-y-3 lg:space-y-0">
                    <div>
                        <TextInput
                            placeholder="Service Title"
                            {...register("title")}
                        />
                        <div className="mt-[-8px]">
                            <HelperText color="error">
                                {errors?.title?.message || ""}
                            </HelperText>
                        </div>
                    </div>
                    <div>
                        <TextInput
                            placeholder="Price"
                            type="text"
                            {...register("price")}
                        />
                        <div className="mt-[-8px]">
                            <HelperText color="error">
                                {errors?.price?.message || ""}
                            </HelperText>
                        </div>
                    </div>
                </div>
                <div>
                    <Textarea
                        id="comment"
                        placeholder="Write a short description about the service"
                        withBg={true}
                        color="gray"
                        border={true}
                        rows={4}
                        {...register("description")}
                    />
                    <div className="mt-[-8px]">
                        <HelperText color="error">
                            {errors?.description?.message || ""}
                        </HelperText>
                    </div>
                </div>
                <div>
                    <Upload
                        onFileChange={handleFileChange}
                        horizontal={true}
                        uploadBtnType="dashed"
                        file={fileName}
                    />
                </div>

                <div></div>
                <div>
                    <PrimaryButton disabled={isLoading}>
                        {isLoading ? <Spinner /> : "Add New Service"}
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default CreateServiceForm;
