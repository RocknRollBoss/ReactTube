import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./ui/app-sidebar"
import { Header } from "."

type Props = {
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="px-3 w-full">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  )
}
