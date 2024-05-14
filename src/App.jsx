import React, { Children } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./layout.scss";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
import HomePage from "./routes/HomePage/HomePage";
import SinglePage from "./routes/singlePage/SinglePage";
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
