import "./Sidebar.css"
import logo from "../../../Assets/Image/logo2.png" 
import { FaPowerOff } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo}></img>
                <p className="logo-text">Smart delight int</p>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    
                    <Link to='/'><li className="active">Dashboard</li></Link>
                    <li>Student</li>
                    <li>Payments</li>
                    <Link to="/invoice">
                        <li>Invoice</li>
                    </Link>
                    <li>Settings</li>
                </ul>
            </nav>
            <div className="logout">
                <FaPowerOff/>
                <p>Logout</p>
            </div>
        </div>
    );
}
 
export default Sidebar;