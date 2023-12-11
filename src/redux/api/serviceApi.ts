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
    }),
});

export const { useCreateServiceMutation } = serviceApi;
