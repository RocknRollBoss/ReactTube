import React, { useState } from "react"
import { Button, Title } from "./ui"
import { ThumbsUp } from "lucide-react"
import { RoutesEnum } from "@/Routes"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addSubscription, removeSubscription } from "@/features/subscriptions"
import { defaultYoutubeImg } from "./video-item"
import { addVideo, removeVideo } from "@/features/liked"
import { IVideoItem } from "@/app/services/types"
import { toast } from "sonner"
import { RootState } from "@/app/store"
type Props = {
  video: IVideoItem
  id: string
  title: string
  channelTitle: string
  channelId: string
  url?: string
  subscriberCount?: number
  likes?: string
}
export const FullVideoProfile: React.FC<Props> = ({
  video,
  channelId,
  id,
  title,
  channelTitle,
  url,
  subscriberCount,
  likes,
}) => {
  const isSubscribed = useSelector((state: RootState) =>
    state.subscriptions.subscriptions.subscribers.some(
      sub => sub.id === channelId,
    ),
  )
  const isFavourite = useSelector((state: RootState) =>
    state.liked.likedVideos.some(vid => vid.id === video.id),
  )

  const dispatch = useDispatch()
  const toggleSubscribe = () => {
    if (!isSubscribed) {
      dispatch(
        addSubscription({
          id: channelId,
          channelName: channelTitle,
          avatarUrl: url || defaultYoutubeImg,
        }),
      )
      toast("Subscription completed")
    } else {
      dispatch(removeSubscription(channelId))
      toast("Subscription canceled")
    }
  }
  const toggleFavourite = () => {
    if (!isFavourite) {
      dispatch(addVideo(video))
      toast("Added to favourite")
    } else {
      dispatch(removeVideo(video.id))
      toast("Removed from favourites")
    }
  }

  return (
    <div className="flex flex-col gap-4 mt-5">
      <Title size="md" text={title} className="font-bold text-xl" />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex gap-4 items-center">
          <Link to={`${RoutesEnum.CHANNEL}/${id}`}>
            <img
              className="rounded-full w-10 h-10"
              src={url}
              alt="Channel Thumbnail"
            />
          </Link>
          <Link to={`${RoutesEnum.CHANNEL}/${id}`}>
            <div>
              <Title text={channelTitle} size="md" className="font-bold" />
              <p className="text-gray-600 text-sm">
                {subscriberCount} subscribers
              </p>
            </div>
          </Link>
          <Button
            className="w-[120px] sm:w-[150px] rounded-2xl"
            onClick={toggleSubscribe}
          >
            {!isSubscribed ? " Subscribe" : "Unsubscribe"}
          </Button>
        </div>
        <Button
          onClick={toggleFavourite}
          className="w-[120px] sm:w-[150px] rounded-2xl font-semibold hover:bg-gray-200 duration-300"
          variant={isFavourite ? "destructive" : "secondary"}
        >
          <ThumbsUp style={{ width: "20px", height: "20px" }} />
          <span>{likes}</span>
        </Button>
      </div>
    </div>
  )
}
