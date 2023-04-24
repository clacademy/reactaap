import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Dieticians",
    "Stewards",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getDieticians: build.query({
      query: () => "api/dieticians",
      providesTags: ["Dieticians"],
    }),
    getStewards: build.query({
      query: () => "api/stewards",
      providesTags: ["Stewards"],
    }),
    getDashboard: build.query({
      query: () => "/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetDieticiansQuery,
  useGetStewardsQuery,
  useGetDashboardQuery,
} = api;