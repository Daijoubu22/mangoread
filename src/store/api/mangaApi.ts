import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'services/constants/constants';
import { GetMangaListResponse, SearchMangaParams } from 'services/queries/mangaQueries';
import paramsSerializer from 'services/utils/paramsSerializer';

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    paramsSerializer,
  }),
  endpoints: (builder) => ({
    getMangaList: builder.query<GetMangaListResponse, SearchMangaParams>({
      query: (params: SearchMangaParams) => ({
        url: '/manga',
        params,
      }),
    }),
  }),
});

export const { useGetMangaListQuery } = mangaApi;
