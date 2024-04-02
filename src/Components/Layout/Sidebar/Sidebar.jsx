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
                    
                    <Link to='/home'><li className="active">Dashboard</li></Link>
                    <Link to="/home/students">
                        <li>Student</li>
                    </Link>
                    {/* <li>Payments</li> */}
                    <Link to="/home/transaction">
                        <li>Transaction</li>
                    </Link>
                    <Link to="/home/settings">
                        <li>Settings</li>
                    </Link>
                    
                </ul>
            </nav>
            <Link to="/">
                <div className="logout">
                    <FaPowerOff/>
                    <p>Logout</p>
                </div>
            </Link>
        </div>
    );
}
 
export default Sidebar;