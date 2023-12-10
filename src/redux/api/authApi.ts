import { tagType } from "../app/tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagType.user],
        }),

        verifyToken: build.query({
            query: (token: string) => ({
                url: `${AUTH_URL}/verify-token/${token}`,
                method: "GET",
            }),
        }),

        signup: build.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/signup`,
                method: "POST",
                body: data,
            }),
        }),

        verifyEmail: build.query({
            query: (token) => ({
                url: `${AUTH_URL}/verify-email/${token}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useVerifyTokenQuery,
    useSignupMutation,
    useVerifyEmailQuery,
} = authApi;
