import { authKey } from "@/constants/global";
import { decodedToken } from "./jwt";
import { getFromLocalStorage } from "./local-storage";

export const isTokenExpired = (token: string) => {
    const { exp = 0 } = decodedToken(token);
    if (!token) {
        return true;
    }

    const currentTime = Math.floor(Date.now() / 1000);

    return currentTime >= exp;
};

export const getUserInfo = (): any => {
    const authToken = getFromLocalStorage(authKey);

    if (authToken) {
        const decodedData = decodedToken(authToken);
        return decodedData;
    } else {
        return "";
    }
};

export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey);
    return !!authToken;
};
