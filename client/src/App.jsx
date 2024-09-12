import React, { Children } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./layout.scss";
import ListPage from "./routes/listPage/ListPage";
import {Layout,RequireAuth} from "./routes/layout/Layout";
import HomePage from "./routes/HomePage/HomePage";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage"
import NewPostPage from "./routes/newPostPage/newPostPage"


//import { listPageLoader } from "../../full-stack-estate/client/src/lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
         // loder: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          // loader: singlePageLoader,
        },

        {
          path: "/profile",
          element: <ProfilePage />,
          // loader: singlePageLoader,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },

      ],
    },
    // {
    //   path: "/",
    //   element: <RequireAuth />,
    //   children: [
    //     {
    //       path: "/profile",
    //       element: <ProfilePage />,
    //       //loader: profilePageLoader
    //     },
    //     {
    //       path: "/profile/update",
    //       element: <ProfileUpdatePage />,
    //     },
        
    //     {
    //       path: "/add",
    //       element: <NewPostPage/>
    //     },
    //   ],
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;