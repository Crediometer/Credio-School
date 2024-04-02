import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Invoice from "./Pages/Invoice/Invoice";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Reset from "./Pages/Login/Reset";
import Newpassword from "./Pages/Login/NewPassword";
import Students from "./Pages/Students/Students";
import Transaction from "./Pages/Transactions/Transaction";
import Settings from "./Pages/Settings/Settings";

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login/>, // Renders LoginPage component when the root path is accessed
    },
    {
      path: '/signup',
      element: <Signup/>, // Renders LoginPage component when the root path is accessed
    },
    {
      path: '/reset',
      element: <Reset/>, // Renders LoginPage component when the root path is accessed
    },
    {
      path: '/newpassword',
      element: <Newpassword/>, // Renders LoginPage component when the root path is accessed
    },
    {
      path: "/home",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "invoice", element: <Invoice/> },
        { path: "students", element: <Students/> },
        { path: "transaction", element: <Transaction/> },
        { path: "settings", element: <Settings /> },
        // { path: "create/upload", element: <Uplaod /> },
        // { path: "create-content", element: <Content /> },
        // { path: "create-library", element: <ContentLibrary /> },
      ],
    },
  ]);

  return routes;
}
