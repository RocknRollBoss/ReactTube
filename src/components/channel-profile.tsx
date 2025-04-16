import React from "react"
import { Button, Title } from "./ui"
import { IChannelSnippet, IChannelstatistics } from "@/app/services/types"
import { useDispatch, useSelector } from "react-redux"
import { addSubscription, removeSubscription } from "@/features/subscriptions"
import { RootState } from "@/app/store"
import { toast } from "sonner"

type Props = {
  id?: string
  snippet: IChannelSnippet
  statistics: IChannelstatistics
}

export const ChannelProfile: React.FC<Props> = ({
  snippet,
  statistics,
  id,
}) => {
  const dispatch = useDispatch()
  addSubscription
  const isSubscribers = useSelector((state: RootState) =>
    state.subscriptions.subscriptions.subscribers.some(sub => sub.id === id),
  )

  const handleSubsribe = () => {
    if (!isSubscribers) {
      dispatch(
        addSubscription({
          id: id || "",
          avatarUrl: snippet?.thumbnails?.default?.url,
          channelName: snippet.title,
        }),
      )
      toast("Subscription completed")
    } else {
      dispatch(removeSubscription(id || ""))
      toast("Subscription canceled")
    }
  }

  return (
    <div className="flex flex-wrap gap-3 mb-10">
      <div>
        <img
          className="rounded-full w-20 h-20 md:w-[120px] md:h-[120px]"
          src={snippet?.thumbnails?.default?.url}
          alt="Channel Thumbnail"
        />
      </div>
      <div className="flex flex-col gap-2 max-w-[600px]">
        <Title
          className="text-lg md:text-2xl font-bold"
          size="md"
          text={snippet.title}
        />
        <div className="flex flex-wrap gap-3 md:gap-4 items-center">
          <p className="font-bold text-sm md:text-md">{snippet.customUrl}</p>
          <p className="text-gray-600 text-sm md:text-base">
            {statistics.subscriberCount} subscribers
          </p>
          <p className="text-gray-600 text-xs md:text-sm">
            {statistics.videoCount} videos
          </p>
        </div>
        <p className="text-sm md:text-base">
          {snippet.description.slice(0, 80)}...
        </p>
        <Button
          className="w-[130px] md:w-[150px] rounded-2xl"
          onClick={() => handleSubsribe()}
        >
          {!isSubscribers ? " Subscribe" : "Unsubscribe"}
        </Button>
      </div>
    </div>
  )
}
