import { tagType } from "../app/tag-types";
import { baseApi } from "./baseApi";

const SERVICE_URL = "/service";

export const serviceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createService: build.mutation({
            query: (data) => ({
                url: `${SERVICE_URL}`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagType.service],
        }),

        getAllServices: build.query({
            query: (args: Record<string, any>) => ({
                url: `${SERVICE_URL}`,
                method: "GET",
                params: args,
            }),
            providesTags: [tagType.service],
        }),
    }),
});

export const { useCreateServiceMutation, useGetAllServicesQuery } = serviceApi;
