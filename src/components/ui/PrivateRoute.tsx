"use client";

import Loading from "@/app/loading";
import { useVerifyTokenQuery } from "@/redux/api/authApi";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { clearToken } from "@/redux/features/authSlice";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const currentPath = usePathname();

    const token = useAppSelector((state) => state.auth.token);

    const { data, isLoading } = useVerifyTokenQuery(token);

    if (isLoading) {
        return <Loading />;
    }

    if (data?.success) {
        return <>{children}</>;
    } else {
        dispatch(clearToken());
    }

    router.push(`/login?redirect=${currentPath}`);
};

// export default PrivateRoute;

export default dynamic(() => Promise.resolve(PrivateRoute), {
    ssr: false,
});
