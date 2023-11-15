"use client";

import { Accordion } from "keep-react";
import Image from "next/image";
import questionAnswerImage from "../../assets/images/question-answer.jpg";

const QuestionAnswerComponent = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-5">
                <Image src={questionAnswerImage} alt="" />
            </div>
            <div className="col-span-7">
                <div>
                    <h2 className="text-5xl font-bold mb-5">
                        Question / Answer
                    </h2>
                    <div>
                        <Accordion className="space-y-2 bg-[#FDFEFE] border-none">
                            <Accordion.Panel className="bg-[#F0F3F9]">
                                <Accordion.Title className="hover:text-[#51B765] group">
                                    <h5 className="group-hover:text-[#51B765] font-medium">
                                        What if my clothes are heavily stained?
                                    </h5>
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="leading-7">
                                        We try our best to remove the stains by
                                        adapting the best washing cycle,
                                        detergent, temperature suitable for the
                                        garment, however in case of tough
                                        stains, we would recommend you to use
                                        our stain removal or dry cleaning
                                        service.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel className="bg-[#F0F3F9]">
                                <Accordion.Title className="hover:text-[#51B765] group">
                                    <h5 className="group-hover:text-[#51B765] font-medium">
                                        How long you take to return the
                                        garments?
                                    </h5>
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="leading-7">
                                        We try our best to remove the stains by
                                        adapting the best washing cycle,
                                        detergent, temperature suitable for the
                                        garment, however in case of tough
                                        stains, we would recommend you to use
                                        our stain removal or dry cleaning
                                        service.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel className="bg-[#F0F3F9]">
                                <Accordion.Title className="hover:text-[#51B765] group">
                                    <h5 className="group-hover:text-[#51B765] font-medium">
                                        How can I pay for the services?
                                    </h5>
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="leading-7">
                                        We try our best to remove the stains by
                                        adapting the best washing cycle,
                                        detergent, temperature suitable for the
                                        garment, however in case of tough
                                        stains, we would recommend you to use
                                        our stain removal or dry cleaning
                                        service.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>

                            <Accordion.Panel className="bg-[#F0F3F9]">
                                <Accordion.Title className="hover:text-[#51B765] group">
                                    <h5 className="group-hover:text-[#51B765] font-medium">
                                        Does Dry cleaning process removes all
                                        the stains?
                                    </h5>
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="leading-7">
                                        We try our best to remove the stains by
                                        adapting the best washing cycle,
                                        detergent, temperature suitable for the
                                        garment, however in case of tough
                                        stains, we would recommend you to use
                                        our stain removal or dry cleaning
                                        service.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswerComponent;
