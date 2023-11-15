import About from "@/components/About/About";
import ImportantInformationSection from "@/components/ImportantInformationSection/ImportantInformationSection";
import NaturalCleaningProductSection from "@/components/NaturalCleaningProducts/NaturalCleaningProductSection";
import ReasonComponent from "@/components/Reason/Reason";
// import laundry_experience_image from "../../../assets/images/laundry-image-experience.jpg";

const HomePage = () => {
    return (
        <div>
            <About />
            <ReasonComponent />
            <ImportantInformationSection />
            <NaturalCleaningProductSection />
        </div>
    );
};

export default HomePage;
