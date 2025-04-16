import { ApiRoutes } from "@/app/services/api-routes"
import { IComments } from "@/app/services/types"
import { useFetch } from "@/hooks/use-fetch"
import { Title } from "./ui"
import { ThumbsUp, ThumbsDown } from "lucide-react"
type Props = {
  id?: string
  commentsList?: string
}
export const Comments: React.FC<Props> = ({ id, commentsList }) => {
  const { data: comments } = useFetch<IComments>(
    `${import.meta.env.VITE_YOUTUBE_DATA_API_URL}${ApiRoutes.COMMENTS}?part=snippet&videoId=${id}&key=${import.meta.env.VITE_YOUTUBE_DATA_API_KEY}`,
    "Comments error",
  )

  return (
    <div className="w-full">
      <p className="mb-7 font-bold text-xl">{commentsList} comments</p>
      {comments?.items?.map(item => (
        <div key={item.id} className="mb-6 flex flex-col sm:flex-row gap-4">
          <img
            className="rounded-full w-10 h-10 flex-shrink-0"
            src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
            alt="comment"
          />
          <div className="text-sm flex flex-col gap-2 w-full">
            <Title
              text={item.snippet.topLevelComment.snippet.authorDisplayName}
              size="md"
              className="font-bold"
            />
            <p className="text-gray-700">
              {item.snippet.topLevelComment.snippet.textDisplay}
            </p>
            <p className="text-gray-500 text-xs">
              {new Date(
                item.snippet.topLevelComment.snippet.publishedAt,
              ).toLocaleString()}
            </p>
            <div className="flex gap-4 pt-2 items-center">
              <div className="flex items-center gap-2 text-gray-600">
                <ThumbsUp className="w-4 h-4" />
                {item.snippet.topLevelComment.snippet.likeCount}
              </div>
              <ThumbsDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
