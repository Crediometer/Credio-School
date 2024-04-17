import "./Sidebar.css"
import logo from "../../../Assets/Image/nopro.jpg" 
import { FaPowerOff } from "react-icons/fa6";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {connect} from 'react-redux'
import { fetchprofile } from "../../../Redux/Profile/ProfileAction";
import { LogOutAuthAction } from "../../../Redux/Login/LoginAction";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
const Sidebar = ({getprofile,logout,fetchprofile, open, toggleopen}) => {
    const location = useLocation();
    const history = useNavigate();
    const [timeoutId, setTimeoutId] = useState(null);
    const handlelogout =()=>{
        logout(
            ()=>{ history(`/`)}
        )
    }
    useEffect(()=>{
        fetchprofile();
        const id = setTimeout(() => {
            handlelogout();
        }, 1800 * 1000);

        setTimeoutId(id);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [])
    return ( 
        <div className={open?"sidebaropen sidebar":"sidebar"}>
            <div className="sidebar-top-logo">
                <div className="sidebar-logo">
                    <img src={(getprofile?.schoolProfile?.schoolAvatar) ? getprofile?.schoolProfile?.schoolAvatar : logo }></img>
                    <p className="logo-text">{getprofile?.schoolProfile?.schoolName}</p>
                </div>
                <div className="sidebar-close" onClick={toggleopen}>
                    <FaTimes/>
                </div>
            </div>
           
            <nav className="sidebar-nav">
                <ul>
                    
                    <Link to='/home' onClick={toggleopen}>
                        <li className={(location.pathname === "/home")?"active":""}>Dashboard</li>
                    </Link>
                    <Link to="/home/students" onClick={toggleopen}>
                        <li className={(location.pathname === "/home/students")?"active":""}>Student</li>
                    </Link>
                    {/* <li>Payments</li> */}
                    <Link to="/home/transaction" onClick={toggleopen}>
                        <li className={(location.pathname === "/home/transaction")?"active":""}>Transaction</li>
                    </Link>
                    <Link to="/home/settings" onClick={toggleopen}>
                        <li className={(location.pathname === "/home/settings")?"active":""}>Settings</li>
                    </Link>    
                </ul>
            </nav>
          
                <div className="logout" onClick={handlelogout}>
                    <FaPowerOff/>
                    <p>Logout</p>
                </div>
           
        </div>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.profile?.error,
        loading: state?.profile?.loading,
        getprofile: state?.profile?.data,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchprofile: () => dispatch(fetchprofile()),
        logout: (history) => dispatch(LogOutAuthAction(history)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);