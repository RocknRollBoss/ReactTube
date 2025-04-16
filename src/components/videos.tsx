import React from "react"
import { Container } from "./container"
import { useGetVideoByCategoriesQuery } from "@/app/services/youtubeApi"
import { VideoItem } from "./video-item"
import { SkeletonCard } from "./skeleton-card"
type Props = {
  searchCategory: string
}

export const Videos: React.FC<Props> = ({ searchCategory }) => {
  const { data: videos, isLoading } =
    useGetVideoByCategoriesQuery(searchCategory)

  const skeletonCard = [...Array(30)].map((_, idx) => (
    <SkeletonCard key={idx} />
  ))
  return (
    <Container>
      <div className="flex gap-5 flex-wrap">
        {isLoading
          ? skeletonCard
          : videos?.items.map(video => (
              <VideoItem key={video.id.videoId} video={video} channel />
            ))}
      </div>
    </Container>
  )
}
