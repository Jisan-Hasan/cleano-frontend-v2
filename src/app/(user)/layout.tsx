import Footer from "@/components/ui/footer/Footer";
import NavbarComponent from "@/components/ui/navbar/Navbar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>
                <NavbarComponent />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default UserLayout;
