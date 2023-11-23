import About from "@/components/About/About";
import AffordablePricesSection from "@/components/AffordablePrices/AffordablePricesSection";
import Banner from "@/components/Banner/Banner";
import ImportantInformationSection from "@/components/ImportantInformationSection/ImportantInformationSection";
import NaturalCleaningProductSection from "@/components/NaturalCleaningProducts/NaturalCleaningProductSection";
import ReasonComponent from "@/components/Reason/Reason";
import Footer from "@/components/ui/footer/Footer";
import NavbarComponent from "@/components/ui/navbar/Navbar";

import Testimonial from "@/components/Testimonial/Testimonial";

const HomePage = () => {
    return (
        <div>
            <NavbarComponent />
            <Banner />
            <About />
            <ReasonComponent />
            <ImportantInformationSection />
            <NaturalCleaningProductSection />
            <AffordablePricesSection />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default HomePage;
