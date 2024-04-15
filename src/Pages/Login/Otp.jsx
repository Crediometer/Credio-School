import { Link } from "react-router-dom";
import { otpData } from "../../Redux/Registration/OtpAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux';
import { useSelector } from 'react-redux';
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
const Otp = ({loading, error, data, otpData, register}) => {
    const history = useNavigate();
    const [otp, setOtp] = useState("")
    const [otpid, setOtpid] = useState("")
    const [showerror, setshowerror] = useState(false)
    const [postState, setPostState] = useState({})
    const formData = useSelector((state) => state.form.formData);
    const handleOtp = (e) =>{
        const value = e.target.value;
        setOtp(value)
        setPostState({ ...postState, ...{
            otpCode: otp,
            email: formData.email,
            schoolName: formData.schoolName,
            address: formData.address,
            city: formData.city,
            country:formData.country,
            pwd:formData.password,
            phoneNumber: formData.phoneNumber,
            state:formData.state,
            otpId: register.pinId,
        } }); 
    }
    const handleOtpId = (e) =>{
        const value = e.target.value;
        setOtpid(value)
        setPostState({ ...postState, ...{
            otpId: otpid,
            
        } }); 
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        otpData(
            postState, ()=>{ 
            history(`/`);
            // setPending(true);
        },  ()=>{ 
            setshowerror(true)
            // setPending(false);
        })
    }
    return ( 
        <div className="login">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="login-inner">
                <div className="login-left">
                    <div className="login-left-bottom">
                        <h4>Knowledge Unleashed, Virtually Limitless</h4>
                    </div>
                </div>
                <div className="login-right">
                    <h4>OTP</h4>
                    <p>Enter OTP Sent to Your Phone Number</p>
                    <form onSubmit={handlesubmit} action="" className="login-form">
                        {showerror && (
                            <div className="error-box">
                                <p>{error}</p>
                            </div>
                        )}
                        <div className="form-3">
                            <label>OTP</label><br></br>
                            <input 
                                type='text' 
                                placeholder='Enter Otp'
                                onChange={handleOtp}
                                onBlur={handleOtp}    
                            ></input>
                        </div>
                        {/* <div className="form-3">
                            <label>OTPId</label><br></br>
                            <input 
                                type='text' 
                                placeholder='Enter Otp'
                                onChange={handleOtpId}
                                onBlur={handleOtpId}    
                            ></input>
                        </div> */}
                        <button className='start-button' disabled={loading}>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Confirm Otp"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        loading:state.otp.loading,
        error:state?.otp?.error,
        data: state.otp.data,
        register: state.register.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        otpData: (postdata, history, error) => {
            dispatch(otpData(postdata, history, error));
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Otp);