import { useGetSearchVideosQuery } from "@/app/services/youtubeApi"
import { Container, Layout, Loading, VideoItem } from "@/components"
import { skipToken } from "@reduxjs/toolkit/query/react"
import { useParams } from "react-router-dom"

export const Search: React.FC = () => {
  const { searchValue } = useParams()
  const { data: videos, isLoading } = useGetSearchVideosQuery(
    searchValue ?? skipToken,
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
  return (
    <Layout>
      <Container>
        <div className="flex gap-5 flex-wrap">
          {videos?.items.map(video => <VideoItem video={video} />)}
        </div>
      </Container>
    </Layout>
  )
}
