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

    getUserOrders: build.query({
      query: ({ page = 1, limit = 5 }) => ({
        url: `${ORDER_URL}/get-orders/user?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: [tagType.order],
    }),

    getOrderDetailsById: build.query({
      query: (id) => ({
        url: `${ORDER_URL}/get-order/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: tagType.order, id }],
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetUserOrdersQuery,
  useGetOrderDetailsByIdQuery,
} = orderApi;
