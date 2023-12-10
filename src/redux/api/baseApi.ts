import { authKey } from "@/constants/global";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { getFromLocalStorage } from "@/utils/local-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../app/tag-types";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrl(),
        prepareHeaders: (headers) => {
            const token = getFromLocalStorage(authKey);

            if (token) {
                headers.set("authorization", `${token}`);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: tagTypesList,
});
