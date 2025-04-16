import { Categories, Layout, Videos } from "@/components"
import React, { useState } from "react"
export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const selectCategory = (name: string) => {
    setActiveCategory(name)
  }

  return (
    <Layout>
      <Categories
        activeCategory={activeCategory}
        selectCategory={selectCategory}
      />
      <Videos searchCategory={activeCategory} />
    </Layout>
  )
}
