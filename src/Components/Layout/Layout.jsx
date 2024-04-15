import "./Layout.css"
import React, { useState } from 'react'
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Home from "../../Pages/Home/Home";
const Layout = () => {
    const [open, setOpen] = useState(false)
    const togglesidebar = ()=>{
        setOpen(!open)
    }
    return ( 
        <div className="layout">
            <div className="layout-left">
                <Sidebar open={open} toggleopen={togglesidebar}/>
            </div>
            <div className="layout-right">
                <Navbar toggleopen={togglesidebar}/>
                <div className="layout-body">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
 
export default Layout;