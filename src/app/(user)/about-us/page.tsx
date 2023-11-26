import About from "@/components/About/About";
import DataSection from "@/components/DataSection/DataSection";
import ImportantInformationSection from "@/components/ImportantInformationSection/ImportantInformationSection";
import NaturalCleaningProductSection from "@/components/NaturalCleaningProducts/NaturalCleaningProductSection";
import BreadCrumbComponent from "@/components/ui/BreadCrumb";

const items = [
    {
        label: "About Us",
        link: "/about-us",
    },
];

const AboutUsPage = () => {
    return (
        <div>
            <BreadCrumbComponent items={items} title="About Us" />
            <div>
                <div>
                    <ImportantInformationSection />
                    <DataSection />
                    <NaturalCleaningProductSection />
                    <About />
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
