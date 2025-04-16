import { IId, IVideoItem } from "@/app/services/types"
import { removeVideo } from "@/features/liked"
import { RoutesEnum } from "@/Routes"
import { X } from "lucide-react"
import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
export const defaultYoutubeImg =
  "https://cdn.pixabay.com/photo/2018/03/14/01/03/subscribe-3224137_640.jpg"
type Props = {
  video: IVideoItem
  channel?: boolean
  liked?: boolean
}

export const VideoItem: React.FC<Props> = ({ video, channel, liked }) => {
  const dispatch = useDispatch()
  const { id, snippet } = video

  const removeFromFavourite = (id: IId) => {
    dispatch(removeVideo(id))
  }
  const videoId = typeof id === "string" ? id : id?.videoId
  return (
    <div className="relative flex flex-col gap-2 p-2 rounded-lg duration-300 max-w-[360px] hover:bg-pink-100">
      {liked && (
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition"
          onClick={() => removeFromFavourite(video.id)}
        >
          <X />
        </button>
      )}
      <Link to={`${RoutesEnum.VIDEO}/${videoId}`}>
        <img
          className="w-full rounded-lg"
          src={snippet?.thumbnails?.medium?.url || defaultYoutubeImg}
          alt={snippet.title}
        />
      </Link>
      <div className="flex gap-3 items-center">
        <img
          className="rounded-full h-12 w-12"
          src={defaultYoutubeImg}
          alt="channel avatar"
        />
        <div className="flex flex-col">
          <Link
            to={`${RoutesEnum.VIDEO}/${id.videoId}`}
            className="max-w-[300px] font-medium text-lg truncate"
          >
            {snippet.title}
          </Link>
          {channel && (
            <Link
              to={`${RoutesEnum.CHANNEL}/${snippet.channelId}`}
              className="text-gray-600 hover:text-black"
            >
              {snippet.channelTitle}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
