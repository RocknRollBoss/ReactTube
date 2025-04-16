import { IVideos } from "@/app/services/types"
import {
  Comments,
  Container,
  FullVideoProfile,
  Layout,
  Loading,
  RelatedVideos,
} from "@/components"

import { useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { useGetChannelQuery } from "@/app/services/youtubeApi"
import { skipToken } from "@reduxjs/toolkit/query"
import { useFetch } from "@/hooks/use-fetch"
import { ApiRoutes } from "@/app/services/api-routes"

export const FullVideo: React.FC = () => {
  const { videoId } = useParams()
  const { data: videos, loading } = useFetch<IVideos>(
    `${import.meta.env.VITE_YOUTUBE_DATA_API_URL}${ApiRoutes.VIDEOS}?part=snippet,statistics&id=${videoId}&key=${import.meta.env.VITE_YOUTUBE_DATA_API_KEY}`,
    "Error loading video",
  )
  const video = videos?.items?.[0]
  const { data: channel } = useGetChannelQuery(
    video?.snippet?.channelId ?? skipToken,
  )

  const title = video?.snippet?.title
  const channelTitle = video?.snippet?.channelTitle
  const channelId = video?.snippet?.channelId
  const desc = video?.snippet?.description
  const likesCount = video?.statistics?.likeCount
  const viewsCount = video?.statistics?.viewCount
  const subscriberCount = channel?.items?.statistics?.subscriberCount
  const url = channel?.items.snippet?.thumbnails?.default?.url
  const comments = video?.statistics?.commentCount
  if (loading) {
    return (
      <Layout>
        <Container>
          <Loading />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-1">
            <div className="w-full aspect-video">
              <ReactPlayer
                width="100%"
                height="100%"
                url={`${import.meta.env.VITE_YOUTUBE_URL}/watch?v=${videoId}`}
                controls
              />
            </div>
            <div className="max-w-full mt-4">
              <FullVideoProfile
                id={channelId}
                title={title}
                channelTitle={channelTitle}
                url={url}
                subscriberCount={subscriberCount}
                likes={likesCount}
                channelId={channelId}
                video={video}
              />
              <div className="mt-5 bg-gray-200 rounded-lg p-5">
                <p className="font-bold">{viewsCount} views</p>
                {desc.slice(0, 250)}
              </div>
            </div>
            <div className="w-full border-t border-gray-300 mt-5" />
            <div className="mt-5">
              <Comments id={videoId} commentsList={comments} />
            </div>
          </div>
          <div className="w-full lg:w-[350px]">
            <RelatedVideos id={videoId} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}
