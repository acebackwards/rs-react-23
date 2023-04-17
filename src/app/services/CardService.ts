import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IApiResults } from 'app/models/ICard';

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (build) => ({
    fetchAllCards: build.query<IApiResults, string>({
      query: (search: string) => ({
        url: `/character`,
        params: {
          name: search,
        },
      }),
    }),
  }),
});
