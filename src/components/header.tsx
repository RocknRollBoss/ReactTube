import React from "react"
import { SidebarTrigger } from "./ui/sidebar"
import { Youtube } from "lucide-react"
import { Container, Search, UserProfile } from "."
import { Button, Title } from "./ui"
import { Link } from "react-router-dom"
import { RoutesEnum } from "@/Routes"
import { useGetUserQuery } from "@/app/services/authApi"

export const Header: React.FC = () => {
  const { data: user } = useGetUserQuery(null)

  return (
    <Container>
      <header className="pt-5 pb-4 mb-3">
        <nav className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between md:justify-start gap-3">
            <div className="flex items-center gap-3 md:gap-5 min-w-[140px]">
              <SidebarTrigger />
              <Link to={RoutesEnum.HOME}>
                <div className="flex items-center gap-2">
                  <Youtube className="w-6 h-6 md:w-8 md:h-8 bg-red-500 text-white rounded-sm px-1" />
                  <Title
                    className="text-base md:text-xl font-bold"
                    size="xl"
                    text="ReactTube"
                  />
                </div>
              </Link>
            </div>

      
            <div className="md:hidden">
              {user ? (
                <UserProfile user={user} />
              ) : (
                <Link to={RoutesEnum.LOGIN}>
                  <Button size="sm" variant="secondary">
                    Sign-in
                  </Button>
                </Link>
              )}
            </div>
          </div>

    
          <div className="w-full md:w-auto">
            <Search />
          </div>


          <div className="hidden md:flex gap-3 items-center">
            {user ? (
              <UserProfile user={user} />
            ) : (
              <>
                <Link to={RoutesEnum.REGISTER}>
                  <Button variant="secondary" className="px-4 py-2">
                    Sign-Up
                  </Button>
                </Link>
                <Link to={RoutesEnum.LOGIN}>
                  <Button variant="secondary" className="px-4 py-2">
                    Sign-In
                  </Button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </Container>
  )
}
