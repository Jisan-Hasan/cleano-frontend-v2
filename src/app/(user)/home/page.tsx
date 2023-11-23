// import About from "@/components/About/About";
// import AffordablePricesSection from "@/components/AffordablePrices/AffordablePricesSection";
// import ImportantInformationSection from "@/components/ImportantInformationSection/ImportantInformationSection";
// import NaturalCleaningProductSection from "@/components/NaturalCleaningProducts/NaturalCleaningProductSection";
// import ReasonComponent from "@/components/Reason/Reason";
// import Footer from "@/components/ui/footer/Footer";
import Banner from "@/components/Banner/Banner";
import NavbarComponent from "@/components/ui/navbar/Navbar";

const HomePage = () => {
    return (
        <div>
            <NavbarComponent />
            <Banner />
            {/* <About />
            <ReasonComponent />
            <ImportantInformationSection />
            <NaturalCleaningProductSection />
            <AffordablePricesSection />
            <Footer /> */}
        </div>
    );
};

export default HomePage;
