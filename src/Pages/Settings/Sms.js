import { FaSearch } from "react-icons/fa";
import status from "../../Assets/Image/StatusBar.png"
import photo from "../../Assets/Image/Photo.png"
import bottom from "../../Assets/Image/bottom.png"
import "./Sms.css"
import { HiChevronLeft } from "react-icons/hi";
const Sms = () => {
    return ( 
        <>
            <div className="sms">
                <div className="sms-left">
                    <div className="form-1">
                        <label>Name<span>*</span></label>
                        <div className="input-search-name">
                            <input type="text"></input>
                            <FaSearch/>
                        </div>
                    </div>
                    <div className="form-1">
                        <label>Callers description<span>*</span></label>
                        <div className="input-search-name">
                            <input type="text"></input>
                            <FaSearch/>
                        </div>
                    </div>
                    <div className="form-1">
                        <label>Send to<span>*</span></label>
                        <div className="input-search-name">
                            <input type="text"></input>
                            <FaSearch/>
                        </div>
                    </div>
                    <div className="form-1">
                        <label>Message Content<span>*</span></label>
                        <div className="input-search-name">
                            <textarea type="text"></textarea>
                        </div>
                    </div>
                    <div className="form-2">
                        <div className="form-1">
                            <label>Date to be sent </label>
                            <div className="input-search-name">
                                <input type="text"></input>
                                <FaSearch/>
                            </div>
                        </div>
                        <div className="form-1">
                            <label>Time to be sent</label>
                            <div className="input-search-name">
                                <input type="text"></input>
                            </div>
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corporis provident officiis?</p>
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