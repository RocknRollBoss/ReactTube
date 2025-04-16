import React, { useState } from "react"
import { Container } from "./container"
import { Button } from "./ui"
import { cn } from "@/lib/utils"
export const categories = [
  "All",
  "Games",
  "News",
  "Codding",
  "Music",
  "Sport",
  "Football",
  "Dogs",
  "Cats",
  "Movie",
  "Humor",
  "Education",
  "Animals",
]
type Props = {
  selectCategory: (name: string) => void
  activeCategory: string
}
export const Categories: React.FC<Props> = ({
  selectCategory,
  activeCategory,
}) => {
  return (
    <div className="mb-10 overflow-x-auto">
      <Container>
        <div className="flex flex-nowrap gap-2 md:gap-3 lg:gap-4 overflow-x-auto scrollbar-hide">
          {categories.map(catName => (
            <Button
              key={catName}
              className={cn(
                "px-3 py-2 text-sm md:text-base whitespace-nowrap",
                activeCategory === catName
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black",
              )}
              variant="secondary"
              onClick={() => selectCategory(catName)}
            >
              {catName}
            </Button>
          ))}
        </div>
      </Container>
    </div>
  )
}
