const PrimaryButton = ({children}: {children: React.ReactNode}) => {
    return (
        <button
            type="submit"
            className="text-white font-bold text-lg py-3 px-6 rounded-md w-full bg-gradient-to-r from-[#63b492] to-[#51B765]"
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
