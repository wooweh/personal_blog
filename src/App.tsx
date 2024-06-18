import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Core } from "./features/core/core"
import { Authentication, WithAuth } from "./features/user/user"
import { Home } from "./features/home/home"
import { Blog } from "./features/blog/blog"
/*



*/
const router = createBrowserRouter([
  {
    element: <WithAuth page={<Core />} />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <WithAuth page={<Home />} />,
        errorElement: <div>error</div>,
      },
      {
        path: "/login",
        element: <Authentication />,
        errorElement: <div>error</div>,
      },
      {
        path: "/dashboard",
        element: <WithAuth page={<div>dashboard</div>} />,
        errorElement: <div>error</div>,
      },
      {
        path: "/profile",
        element: <WithAuth page={<div>profile</div>} />,
        errorElement: <div>error</div>,
      },
      {
        path: "/blog",
        element: <WithAuth page={<Blog />} />,
        errorElement: <div>error</div>,
      },
      {
        path: "/blog/new-post",
        element: <WithAuth page={<div>newPost</div>} />,
        errorElement: <div>error</div>,
      },
      {
        path: "/blog/:postId",
        loader: () => {
          // TODO: Loader function that gets post content from db
          return {}
        },
        element: <WithAuth page={<div>post</div>} />,
        errorElement: <div>error</div>,
      },
    ],
  },
])
/*



*/
const App = () => {
  return <RouterProvider router={router} />
}

export default App
