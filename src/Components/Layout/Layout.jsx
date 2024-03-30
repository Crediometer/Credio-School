import "./Layout.css"
import React from 'react'
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Home from "../../Pages/Home/Home";
const Layout = () => {
    return ( 
        <div className="layout">
            <div className="layout-left">
                <Sidebar/>
            </div>
            <div className="layout-right">
                <Navbar/>
                <div className="layout-body">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
 
export default Layout;