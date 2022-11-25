import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_URL } from 'services/constants/constants';
import paramsSerializer from 'services/utils/paramsSerializer';
import { GetStatisticsParams, GetStatisticsResponse } from 'services/queries/statisticsQueries';

export const statisticsApi = createApi({
  reducerPath: 'statisticsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    paramsSerializer,
  }),
  endpoints: (builder) => ({
    getStatistics: builder.query<GetStatisticsResponse, GetStatisticsParams>({
      query: (params: GetStatisticsParams) => ({
        url: '/statistics/manga',
        params,
      }),
    }),
  }),
});

export const { useGetStatisticsQuery } = statisticsApi;
