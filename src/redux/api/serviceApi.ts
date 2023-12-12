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

        updateService: build.mutation({
            query: ({ id, data }) => ({
                url: `${SERVICE_URL}/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: [tagType.service],
            // TODO: optimistic cache update in update mutation
        }),

        deleteService: build.mutation({
            query: (id) => ({
                url: `${SERVICE_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagType.service],
            // TODO: optimistic cache update in delete mutation
            // optimistic cache update in delete mutation
            // onQueryStarted(id, { dispatch, queryFulfilled }) {
            //     const patchResult = dispatch(
            //         serviceApi.util.updateQueryData(
            //             "getAllServices",
            //             id,
            //             (draft) => {
            //                 const index = draft.findIndex(
            //                     (item) => item.id === id
            //                 );
            //                 if (index !== -1) draft.splice(index, 1);
            //             }
            //         )
            //     );

            //     queryFulfilled.catch(patchResult.undo);
            // },
        }),
    }),
});

export const {
    useCreateServiceMutation,
    useGetAllServicesQuery,
    useUpdateServiceMutation,
    useDeleteServiceMutation,
} = serviceApi;
