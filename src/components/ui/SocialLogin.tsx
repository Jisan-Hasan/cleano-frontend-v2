import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div className="text-center space-y-4">
            <p className="text-metal-700 text-lg">Login with Social Account</p>
            <div className="flex justify-center gap-5">
                <div className="p-3 hover:bg-[#51B765] border-2 border-[#51B765] bg-white  hover:text-white text-[#51B765] rounded-full cursor-pointer transition-all duration-500">
                    <FaGoogle size={22} />
                </div>
                <div className="p-3 hover:bg-[#51B765] border-2 border-[#51B765] bg-white  hover:text-white text-[#51B765] rounded-full cursor-pointer transition-all duration-500">
                    <FaFacebook size={22} />
                </div>
                <div className="p-3 hover:bg-[#51B765] border-2 border-[#51B765] bg-white  hover:text-white text-[#51B765] rounded-full cursor-pointer transition-all duration-500">
                    <FaLinkedin size={22} />
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
