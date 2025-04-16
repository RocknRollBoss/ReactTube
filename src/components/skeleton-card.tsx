import React from "react"
import { Skeleton } from "./ui/skeleton"

export const SkeletonCard: React.FC = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2 flex items-start gap-2">
        <div>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-[200px] shrink-0" />
          <Skeleton className="h-4 w-[150px] shrink-0" />
        </div>
      </div>
    </div>
  )
}
