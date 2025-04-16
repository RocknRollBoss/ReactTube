import React from "react"
type Props = {
  children: React.ReactNode
  className?: string
}
export const Container: React.FC<Props> = ({ children }) => {
  return <div className="max-w-[1600px] mx-auto ">{children}</div>
}
