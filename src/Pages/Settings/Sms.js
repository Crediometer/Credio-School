import { FaSearch } from "react-icons/fa";
import status from "../../Assets/Image/StatusBar.png"
import photo from "../../Assets/Image/Photo.png"
import bottom from "../../Assets/Image/bottom.png"
import "./Sms.css"
import { HiChevronLeft } from "react-icons/hi";
import { useRef, useState } from "react";
import {connect}   from 'react-redux'
import { smsdatasetting } from "../../Redux/Settings/SettingsAction";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
const Sms = ({loading, error, data, smsdatasetting}) => {
    const formRef = useRef(null);
    const [message,setMessage] = useState("");
    const [time,setTime] = useState("");
    const [postState, setPostState] = useState({});
    const handleSms = (e)=>{
        setMessage(e.target.value)
        setPostState({ ...postState, ...{smsContent: message} })
    }
    const handleTime = (e) =>{
        const value = e.target.value
        setTime(value);
        setPostState({ ...postState, ...{alertTime: time, smsEnabled: true} })
    }
    const handleCancle =()=>{
        setTime("")
        setMessage("")
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            await smsdatasetting(postState, ()=>{ 
                // setSuccess(`/home`)
            // setPending(true);
            }, ()=>{ 
                // setErrorHandler(error)
                // setPending(false);
            });
        }catch(error){
        }
    }
    const handleSaveButtonClick = () => {
        if (formRef.current) {
          formRef.current.submit();
        }
      };
    return ( 
        <>
            <form onSubmit={handleSubmit} ref={formRef}>
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
                            <input 
                                type="time"
                                onChange={handleTime}
                                onBlur={handleTime}
                                value="13:30"
                                pattern="[0-2][0-9]:[0-5][0-9]"
                            ></input>
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
                <button className='Reset' onClick={handleCancle}>Cancel</button>
                <button className='Save' >
                    {loading ? (
                        <LottieAnimation data={loader}/>
                    ):"Send"}
                </button>
            </div>
        </form>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        error: state.sms.error,
        loading: state.sms.loading,
        data: state.sms.data,

    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        smsdatasetting: (setting, history, error) => dispatch(smsdatasetting(setting, history, error)),
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Sms);