import { IChannelSnippet, IChannelstatistics } from "@/app/services/types"
import {
  useGetChannelQuery,
  useGetChannelVideosQuery,
} from "@/app/services/youtubeApi"
import {
  ChannelProfile,
  Container,
  Layout,
  Loading,
  VideoItem,
} from "@/components"

import { skipToken } from "@reduxjs/toolkit/query"
import React from "react"
import { useParams } from "react-router-dom"

export const Channel: React.FC = () => {
  const { channelId } = useParams()
  const { data: channel, isLoading } = useGetChannelQuery(
    channelId ?? skipToken,
  )
  const { data: channelVideos } = useGetChannelVideosQuery(
    channelId ?? skipToken,
  )

  if (isLoading) {
    return (
      <Layout>
        <Container>
          <Loading />
        </Container>
      </Layout>
    )
  }
  const snippet = channel?.items?.snippet ?? ({} as IChannelSnippet)
  const statistics = channel?.items?.statistics ?? ({} as IChannelstatistics)

  return (
    <Layout>
      <Container>
        <div className="mt-12 max-w-[800px] mx-auto">
          <ChannelProfile
            snippet={snippet}
            statistics={statistics}
            id={channelId}
          />
          <hr className="mb-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
          {channelVideos?.items.map(video => <VideoItem video={video} />)}
        </div>
      </Container>
    </Layout>
  )
}
