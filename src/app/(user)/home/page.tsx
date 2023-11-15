import About from "@/components/About/About";
import ImportantInformationSection from "@/components/ImportantInformationSection/ImportantInformationSection";
import ReasonComponent from "@/components/Reason/Reason";
// import laundry_experience_image from "../../../assets/images/laundry-image-experience.jpg";

const HomePage = () => {
    return (
        <div>
            <About />
            <ReasonComponent />
            <ImportantInformationSection />
        </div>
    );
};

export default HomePage;
