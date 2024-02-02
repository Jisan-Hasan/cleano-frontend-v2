import { tagType } from "../app/tag-types";
import { baseApi } from "./baseApi";

const ORDER_URL = "/order";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    placeOrder: build.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/place-order`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagType.order],
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi;
