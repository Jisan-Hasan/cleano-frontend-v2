import banner1 from "../../assets/images/banner1.jpg";

const Banner1 = () => {
    return (
        <div
            className="bg-no-repeat bg-cover bg-center py-10 lg:py-28 xl:py-36 2xl:py-44"
            style={{
                backgroundImage: `url(${banner1.src})`,
            }}
        >
            <div className="max-w-screen-xl mx-auto space-y-3 lg:space-y-5 px-4 lg:px-0">
                <h3 className="text-xl lg:text-6xl font-semibold font-serif text-[#52B864]">
                    We clean. A lot.
                </h3>
                <h1 className="text-3xl lg:text-10xl font-serif tracking-normal font-medium text-[#293F5B]">
                    Clean Clothes.
                    <br />
                    Professional Service.
                    <br />
                    Fair Price.
                </h1>
                <p className="lg:text-2xl">
                    Our professional and experienced cleaning
                    <br />
                    staff does the job right the first time.
                </p>
                <div className="flex gap-4">
                    <button className="py-2 px-5 bg-[#52B864] text-white rounded text-md transition-all duration-300 ease-in-out transform hover:scale-110">
                        Book Service
                    </button>
                    <button className="py-2 px-5 border-2 border-[#52B864] text-[#52B864] rounded text-md transition-all duration-300 ease-in-out transform hover:scale-110">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner1;
