"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { TextInput, Textarea, Upload } from "keep-react";
import { useState } from "react";

type Inputs = {
    title: string;
    price: number;
    description: string;
};

const CreateServiceForm = () => {
    const [formData, setFormData] = useState<Inputs>({
        title: "",
        price: 0,
        description: "",
    });

    const [imgSrc, setImgSrc] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const image = event?.target?.files?.[0];

        if (image) {
            convertBase64(image).then((res) => {
                setImgSrc(res);
            });
        }
    };

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Assuming you want to send the form data to an API
        const data = {
            ...formData,
            image: imgSrc,
        };

        // Perform your API request or any other actions here

        console.log("Form data:", data);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="max-w-2xl mx-auto">
            <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="lg:grid grid-cols-2 gap-3 space-y-3 lg:space-y-0">
                    <TextInput
                        placeholder="Service Title"
                        value={formData.title}
                        onChange={handleInputChange}
                        name="title"
                    />
                    <TextInput
                        placeholder="Price"
                        type="number"
                        value={formData.price.toString()}
                        onChange={handleInputChange}
                        name="price"
                    />
                </div>
                <div>
                    <Textarea
                        id="comment"
                        placeholder="Write a short description about the service"
                        withBg={true}
                        color="gray"
                        border={true}
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        name="description"
                    />
                </div>
                <div>
                    <Upload
                        onFileChange={handleFileChange}
                        horizontal={true}
                        uploadBtnType="dashed"
                    />
                </div>

                <div></div>
                <div>
                    <PrimaryButton>Add New Service</PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default CreateServiceForm;
