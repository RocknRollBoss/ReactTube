import { RootState } from "@/app/store"
import { Container, Layout, VideoItem } from "@/components"
import { Title } from "@/components/ui"
import React from "react"
import { useSelector } from "react-redux"

export const Liked: React.FC = () => {
  const likedVideos = useSelector((state: RootState) => state.liked.likedVideos)

  return (
    <Layout>
      <Container>
        {likedVideos.length < 1 ? (
          <Title
            size="md"
            text="You don't have any liked videos"
            className="text-center font-semibold text-xl"
          />
        ) : (
          <div className="flex flex-wrap gap-5">
            {likedVideos.map((video) => (
        <VideoItem key={video.id?.videoId ?? video.id} video={video} channel liked />
            ))}
          </div>
        )}
      </Container>
    </Layout>
  )
}
