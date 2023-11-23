import About from "@/components/About/About";
import AffordablePricesSection from "@/components/AffordablePrices/AffordablePricesSection";
import Banner from "@/components/Banner/Banner";
import ImportantInformationSection from "@/components/ImportantInformationSection/ImportantInformationSection";
import NaturalCleaningProductSection from "@/components/NaturalCleaningProducts/NaturalCleaningProductSection";
import ReasonComponent from "@/components/Reason/Reason";

import DataSection from "@/components/DataSection/DataSection";
import Testimonial from "@/components/Testimonial/Testimonial";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <AffordablePricesSection />
            <ReasonComponent />
            <ImportantInformationSection />
            <DataSection />
            <NaturalCleaningProductSection />
            <About />
            <Testimonial />
        </div>
    );
};

export default HomePage;
