import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { forgetotpData } from "../../Redux/Registration/OtpAction";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json";
import JSEncrypt from 'jsencrypt';
import consts from "./keys/const";
import { useState } from "react";
const Newpassword = ({loading,forgetotpData, data}) => {
    const history = useNavigate();
    const[otp, setOtp] = useState("")
    const[newPassword, setnewpassword] = useState("")
    const [postState, setPostState] = useState({})
    const handleOtp = (e) =>{
        const value = e.target.value;
        setOtp(value)
        setPostState({ ...postState, ...{
            pin: otp,
            pin_id: data.pinId,
            phoneNumber: data.to,
        } }); 
    }
    const handlepassword = (e) =>{
        const value = e.target.value;
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        setnewpassword(encrypted);
        setPostState({ ...postState, ...{ newPassword} }); 
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        forgetotpData(
            postState, ()=>{ 
            history(`/`);
            // setPending(true);
        },  ()=>{ 
            // setshowerror(true)
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
                    <h4>Password Recovery</h4>
                    <p>Regain Access to Your Account Instantly</p>
                    <form action="" onSubmit={handlesubmit} className="login-form">
                        <div className="form-3">
                            <label>OTP</label><br></br>
                            <input 
                                type='text' 
                                placeholder='Enter OTP'
                                onChange={handleOtp}
                                onBlur={handleOtp}
                            ></input>
                        </div>
                        <div className="form-3">
                            <label>New Password</label><br></br>
                            <input 
                                type='password' 
                                placeholder='Enter New Password'
                                onChange={handlepassword}
                                onBlur={handlepassword}
                            ></input>
                        </div>
                        <button className='start-button' disabled={loading}>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Reset Password"}
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
        loading:state.forgetotp.loading,
        data: state.forget.data,
   
    }
}

const mapDispatchToProps = dispatch => {
    return{
        forgetotpData: (postdata, history, error) => {
            dispatch(forgetotpData(postdata, history, error));
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Newpassword);