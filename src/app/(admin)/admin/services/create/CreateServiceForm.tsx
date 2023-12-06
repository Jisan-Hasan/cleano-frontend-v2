"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { TextInput, Textarea, Upload } from "keep-react";
import { useState } from "react";

const CreateServiceForm = () => {
    const [fileName, setFileName] = useState("");
    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };
    return (
        <div className="max-w-2xl mx-auto">
            <form className="space-y-3">
                <div className="lg:grid grid-cols-2 gap-3 space-y-3 lg:space-y-0">
                    <TextInput placeholder="Service Title" color="gray" />
                    <TextInput placeholder="Price" color="gray" type="number" />
                </div>
                <div>
                    <Textarea
                        id="comment"
                        placeholder="Write a short description about the service"
                        withBg={true}
                        color="gray"
                        border={true}
                        rows={4}
                    />
                </div>
                <div>
                    <Upload
                        onFileChange={handleFileChange}
                        file={fileName}
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
