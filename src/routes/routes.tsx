import { createBrowserRouter } from "react-router-dom"
import { PageFavorites } from "../pages/favorites/page"
import { PageHome } from "../pages/home/page"
import App from "../App"
import { Details } from "../pages/details/page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/favorites",
        element: <PageFavorites />,
      },
      {
        path: "/recipe-item/:id",
        element: <Details />,
      },
    ],
  },
])
