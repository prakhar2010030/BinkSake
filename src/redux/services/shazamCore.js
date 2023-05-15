import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // utility function from redux toolkit for api call

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f08119ec51mshd434135a9890db4p1c84fdjsn6a7df6a8fbe1",
//     "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
//   },
// };

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// ****API CALL IN REDUX TOOLKIT**** //

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key", `${import.meta.env.VITE_RAPID_API_KEY}`,
        "X-RapidAPI-Host", `${import.meta.env.VITE_HOST}`,
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
//  to use this api end point when call is made .
