import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./state/store";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


import RootLayout from "./pages/RootLayout";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Details from "./pages/Details";
import Index from "./pages";
import ErrorPage from "./pages/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> }, // here the word index that is referred to default path {http://localhost:3000}
      { path: "post", element: <Index /> },
      { path: "post/add", element: <Add /> },
      { path: "post/:id", element: <Details />, loader: ({ params })=> {
          if(isNaN(params.id)) throw new Error( "Bad request", { statusText: "Bad Request", status: 400 });
        }
      }, // loader will work before element run
      { path: "post/:id/edit", element: <Edit /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      {/* router provider will execute the output that will return from create browser router */}
      <RouterProvider router={router} />
    </Provider>
);
