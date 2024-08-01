import React, { useEffect, useState } from "react";
import { Navigate, useRoutes} from "react-router-dom";
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
import Otp from "./Pages/Login/Otp";
import StudentTransaction from './Pages/Transactions/StudentTransaction'
import NewStudent from "./Pages/Students/NewStudent";
import { useSelector } from "react-redux";
export default function Router() {
  let datas = JSON.parse(localStorage.getItem("auth"))
  const isauthenticated = datas?.token?.data?.token?.token;
  const [authenticated, setAuthenticated] = useState(false);

  const routes = useRoutes([
    {
      path: '/',
      element: <Login />, // Renders LoginPage component when the root path is accessed
    },
    {
      path: '/signup',
      element:  <Signup />, // Renders LoginPage component when the root path is accessed
    },
    {
      path: '/reset',
      element: <Reset />, // Renders LoginPage component when the root path is accessed
    },
    {
      path: '/otp',
      element: <Otp />, // Renders LoginPage component when the root path is accessed
    },
    {
      path: '/newpassword',
      element: <Newpassword />,// Renders LoginPage component when the root path is accessed
    },
    {
      path: "/home",
      element: isauthenticated ? <Layout /> : <Navigate to="/" />,
      children: [
        { index: true, element: <Home /> },
        { path: "invoice/:id", element: <Invoice/> },
        { path: "students", element: <Students/> },
        { path: "students/transaction/:id", element: <StudentTransaction/> },
        { path: "newstudent", element: <NewStudent/> },
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
