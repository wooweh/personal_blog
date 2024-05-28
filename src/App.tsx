import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import { Authentication } from "./features/admin/authentication"
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
        element: <Authentication />,
        errorElement: <div>error</div>,
      },
      {
        path: "/dashboard",
        element: <div>dashboard</div>,
        errorElement: <div>error</div>,
      },
      {
        path: "/admin",
        element: <div>admin</div>,
        errorElement: <div>error</div>,
      },
      {
        path: "/:postId",
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
