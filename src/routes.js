import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Invoice from "./Pages/Invoice/Invoice";
import Login from "./Pages/Login/Login";

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login/>, // Renders LoginPage component when the root path is accessed
    },
    // {
    //   path: '/signup',
    //   element: <Signup/>, // Renders LoginPage component when the root path is accessed
    // },
    {
      path: "/home",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "invoice", element: <Invoice/> },
        // { path: "create", element: <Create /> },
        // { path: "create/upload", element: <Uplaod /> },
        // { path: "create-content", element: <Content /> },
        // { path: "create-library", element: <ContentLibrary /> },
      ],
    },
  ]);

  return routes;
}
