"use client";

import { useState } from "react";
import ChooseUsComponent from "./ChooseUs";
import OurApproachComponent from "./OurApproach";
import QuestionAnswerComponent from "./QuestionAnswer";

const ImportantInformationSection = () => {
    const [section, setSection] = useState<1 | 2 | 3>(1);

    let content = null;

    if (section == 1) {
        content = <OurApproachComponent />;
    } else if (section == 2) {
        content = <QuestionAnswerComponent />;
    } else if (section == 3) {
        content = <ChooseUsComponent />;
    }

    return (
        <div className="bg-[#F7F7F7]">
            <div className="max-w-screen-xl mx-auto py-20 px-2 lg:px-0">
                <div className="space-y-5 text-center">
                    <h6 className="text-[#52B765] text-lg">
                        [Important Information]
                    </h6>
                    <h1 className="text-4xl font-semibold">
                        Trusted Laundry Service
                    </h1>
                </div>

                <div className="lg:grid grid-cols-3 gap-4 mt-8 text-center">
                    <h3
                        className={`w-full py-8 shadow-sm text-2xl font-semibold rounded-sm cursor-pointer transition-all duration-700  ${
                            section == 1
                                ? "bg-[#51B765] text-white"
                                : "bg-[#FCFCFD] hover:text-[#51B765]"
                        }`}
                        onClick={() => setSection(1)}
                    >
                        Our Approach
                    </h3>
                    <h3
                        className={`w-full py-8 shadow-sm text-2xl font-semibold rounded-sm cursor-pointer transition-all duration-700 ${
                            section == 2
                                ? "bg-[#51B765] text-white"
                                : "bg-[#FCFCFD] hover:text-[#51B765]"
                        }`}
                        onClick={() => setSection(2)}
                    >
                        Question / Answer
                    </h3>
                    <h3
                        className={`w-full py-8 shadow-sm text-2xl font-semibold rounded-sm cursor-pointer transition-all duration-700 ${
                            section == 3
                                ? "bg-[#51B765] text-white"
                                : "bg-[#FCFCFD] hover:text-[#51B765]"
                        }`}
                        onClick={() => setSection(3)}
                    >
                        Why Choose Us
                    </h3>
                </div>
                <div className="mt-16">{content}</div>
            </div>
        </div>
    );
};

export default ImportantInformationSection;
