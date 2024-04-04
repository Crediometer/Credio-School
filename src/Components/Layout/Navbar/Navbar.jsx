import "./Navbar.css"
import { TfiViewListAlt } from "react-icons/tfi";
import { FaPowerOff, FaRegStar, FaSearch } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPowerOutline } from "react-icons/io5";
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar-left">
                <TfiViewListAlt/>
                <FaRegStar/>
                <p className="page-title"><span>Dashboard    /</span>    Default</p>
            </div>
            <div className="navbar-right">
                {/* <div className="search-input">
                    <FaSearch/>
                    <input type="text" placeholder="Search"></input>
                </div> */}
                <CiBrightnessUp/>
                <IoNotificationsOutline/>
                <IoPowerOutline/>
            </div>
        </div>
    );
}
 
export default Navbar;