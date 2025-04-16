import { useState } from "react"
import { Home, Youtube, ThumbsUp, Moon, ChevronDown, X } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { RoutesEnum } from "@/Routes"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/app/store"
import { removeSubscription } from "@/features/subscriptions"
import { ModeToggle } from "../mode-toggle"

const items = [
  {
    title: "Home",
    url: RoutesEnum.HOME,
    icon: Home,
  },

  {
    title: "Liked videos",
    url: RoutesEnum.LIKE,
    icon: ThumbsUp,
  },
]

export function AppSidebar() {
  const dispatch = useDispatch()
  const subscriptions = useSelector(
    (state: RootState) => state.subscriptions.subscriptions,
  )
  const [openDropdown, setOpenDropdown] = useState(false)
  const removeSub = (id: string) => {
    dispatch(removeSubscription(id))
  }
  return (
    <Sidebar className="pt-3">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem className="py-3" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon style={{ width: "24px", height: "24px" }} />
                      <span className="px-5 text-[17px]">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem className="py-3">
                <SidebarMenuButton asChild>
                  <ModeToggle />
                </SidebarMenuButton>
                <span className="px-5 text-[17px]">Change theme</span>
              </SidebarMenuItem>
              <SidebarMenuItem className="py-3 px-2">
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex items-center w-full"
                >
                  <Youtube size={26} />
                  <span className="px-5 text-[17px] pb-2">
                    {subscriptions.title}
                  </span>
                  <ChevronDown className="ml-auto" />
                </button>
                {openDropdown && (
                  <div className="ml-10 mt-2 flex flex-col space-y-5 w-full">
                    {subscriptions.subscribers.map(sub => (
                      <div key={sub.channelName}>
                        <div className="flex items-center gap-4">
                          <Link to={`${RoutesEnum.CHANNEL}/${sub.id}`}>
                            <img
                              className="w-6 h-6 rounded-full"
                              src={sub.avatarUrl}
                              alt="channel-avatar"
                            />
                          </Link>
                          <Link to={`${RoutesEnum.CHANNEL}/${sub.id}`}>
                            <p className="w-24 truncate">{sub.channelName}</p>
                          </Link>

                          <X
                            className="w-6 h-6 flex-shrink-0"
                            style={{ width: "15px", height: "15px" }}
                            onClick={() => removeSub(sub.id)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
