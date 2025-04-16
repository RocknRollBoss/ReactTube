import { ApiRoutes } from "./api-routes"
import { baseApi } from "./baseApi"
import { IChannel, IVideoItem, IVideos } from "./types"

export const youtubeApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getVideoByCategories: builder.query<IVideos, string>({
      query: category => ({
        url: ApiRoutes.SEARCH,
        method: "GET",
        params: {
          q: category,
          part: "id,snippet",
        },
      }),
      providesTags: ["Youtube"],
    }),
    getChannel: builder.query<IChannel, string>({
      query: channelId => ({
        url: ApiRoutes.CHANNEL,
        method: "GET",
        params: {
          id: channelId,
          part: "snippet,contentDetails,statistics",
        },
      }),
      providesTags: ["Youtube"],
    }),
    getChannelVideos: builder.query<IVideos, string>({
      query: (channelId: string) => ({
        url: ApiRoutes.SEARCH,
        method: "GET",
        params: {
          channelId: channelId,
          part: "id,snippet",
        },
      }),
      providesTags: ["Youtube"],
    }),
    getSearchVideos: builder.query<IVideos, string>({
      query: searchValue => ({
        url: ApiRoutes.SEARCH,
        method: "GET",
        params: {
          q: searchValue,
          part: "id,snippet",
        },
      }),
      providesTags: ["Youtube"],
    }),
    getRelatedVideos: builder.query<IVideos, string>({
      query: id => ({
        url: ApiRoutes.SEARCH,
        method: "GET",
        params: {
          relatedToVideoId: id,
          part: "id,snippet",
          type: "video",
        },
      }),
      providesTags: ["Youtube"],
    }),
   
  }),
})

export const {
  useGetVideoByCategoriesQuery,
  useGetChannelQuery,
  useGetChannelVideosQuery,
  useGetSearchVideosQuery,
  useGetRelatedVideosQuery,

} = youtubeApi
