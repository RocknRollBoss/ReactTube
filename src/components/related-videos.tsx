import { useGetRelatedVideosQuery } from "@/app/services/youtubeApi"
import { skipToken } from "@reduxjs/toolkit/query"
import { VideoItem } from "./video-item"
import { Container, Loading } from "."

type Props = {
  id?: string
}
export const RelatedVideos: React.FC<Props> = ({ id }) => {
  const { data: videos, isLoading } = useGetRelatedVideosQuery(id ?? skipToken)

  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {videos?.items?.map(video => (
        <VideoItem key={video.id.videoId} video={video} channel />
      ))}
    </div>
  )
}
