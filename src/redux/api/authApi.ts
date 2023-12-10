import { tagType } from "../app/tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagType.user],
        }),
    }),
});

export const { useLoginMutation } = authApi;
