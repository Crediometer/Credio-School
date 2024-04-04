import { FaSearch } from "react-icons/fa";
import status from "../../Assets/Image/StatusBar.png"
import photo from "../../Assets/Image/Photo.png"
import bottom from "../../Assets/Image/bottom.png"
import "./Sms.css"
import { HiChevronLeft } from "react-icons/hi";
import { useState } from "react";
const Sms = () => {
    const [message,setMessage] = useState("");
    const handleSms = (e)=>{
        setMessage(e.target.value)
    }
    return ( 
        <>
            <div className="sms">
                <div className="sms-left">
                    <p>
                        The messaging system is an easy to use reminder tool, that help remind Parent/Guardian to pay up the outstanding
                    </p>
                    <div className="form-1">
                        <label>Message Content<span>*</span></label>
                        <div className="input-search-name">
                            <textarea type="text" onChange={handleSms} onBlur={handleSms}></textarea>
                        </div>
                    </div>

                    <div className="form-1">
                        <label>Time to be sent</label>
                        <div className="input-search-name">
                            <input type="time"></input>
                        </div>
                    </div>
                </div>
                <div className="sms-preview">
                    <p className='director-head'>Preview</p>
                    <div className="preview-phone">
                        <div className="preview-top">
                            <img src={status}></img>
                            <div className="preview-info">
                                <HiChevronLeft/>
                                <div className="profile-message">
                                    <img src={photo}></img>
                                    <p>Pay up</p>
                                </div>
                            </div>
                        </div>
                        <div className="preview-body">
                            <p className="timeStamp">Yesterdy 9:44pm</p>
                            <div className="message-box">
                                <p>{message}</p>
                            </div>
                            <img src={bottom} className="preview-image"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="settings-button">
                <button className='Reset'>Cancel</button>
                <button className='Save'>Send</button>
            </div>
        </>
    );
}
 
export default Sms;