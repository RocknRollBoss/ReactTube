import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Channel, FullVideo, Home, Liked, Register, Search } from "./pages"
import { RoutesEnum } from "./Routes"
import { ErrorMessage, ThemeProvider } from "./components"
import { Login } from "./pages/login"
import { Toaster } from "@/components/ui/sonner"
const router = createBrowserRouter([
  {
    path: RoutesEnum.HOME,
    element: <Home />,
    errorElement: <ErrorMessage />,
  },
  {
    path: `${RoutesEnum.CHANNEL}/:channelId`,
    element: <Channel />,
    errorElement: <ErrorMessage />,
  },
  {
    path: `${RoutesEnum.SEARCH}/:searchValue`,
    element: <Search />,
    errorElement: <ErrorMessage />,
  },
  {
    path: `${RoutesEnum.VIDEO}/:videoId`,
    element: <FullVideo />,
    errorElement: <ErrorMessage />,
  },
  {
    path: `${RoutesEnum.LIKE}`,
    element: <Liked />,
    errorElement: <ErrorMessage />,
  },
  {
    path: RoutesEnum.REGISTER,
    element: <Register />,
    errorElement: <ErrorMessage />,
  },
  {
    path: RoutesEnum.LOGIN,
    element: <Login />,
    errorElement: <ErrorMessage />,
  },
])

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </ThemeProvider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
