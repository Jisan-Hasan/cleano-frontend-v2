const PrimaryButton = ({
    children,
    type = "submit",
    classes = "",
    disabled = false,
}: {
    children: React.ReactNode;
    type?: "submit" | "reset" | "button" | undefined;
    classes?: string;
    disabled?: boolean;
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`text-white font-bold text-lg py-3 px-6 rounded-md w-full bg-gradient-to-r from-[#63b492] to-[#51B765] ${classes}`}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
