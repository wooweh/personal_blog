import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Core } from "./features/core/core"
/*



*/
const router = createBrowserRouter([
  {
    element: <Core />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <div>home</div>,
        errorElement: <div>error</div>,
      },
      {
        path: "/login",
        element: <div>login</div>,
        errorElement: <div>error</div>,
      },
      {
        path: "/dashboard",
        element: <div>dashboard</div>,
        errorElement: <div>error</div>,
      },
      {
        path: "/profile",
        element: <div>admin</div>,
        errorElement: <div>error</div>,
      },
      {
        path: "/blog",
        element: <div>blog</div>,
        errorElement: <div>error</div>,
      },
      {
        path: "/blog/new-post",
        element: <div>newPost</div>,
        errorElement: <div>error</div>,
      },
      {
        path: "/blog/:postId",
        loader: () => {
          // TODO: Loader function that gets post content from db
          return {}
        },
        element: <div>post</div>,
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
