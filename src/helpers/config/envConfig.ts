export const getBaseUrl = (): string => {
    return (
        process.env.NEXT_PUBLIC_API_BASE_URL || "https://clean-iota.vercel.app/api/v1"
    );
};
