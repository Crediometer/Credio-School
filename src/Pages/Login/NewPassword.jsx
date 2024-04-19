import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { forgetotpData } from "../../Redux/Registration/OtpAction";
import LottieAnimation from "../../Lotties"
import loader from "../../Assets/animations/loading.json"
const Newpassword = ({loading,forgetotpData}) => {
    // const[otp, setOtp] = 
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
                    <form action="" className="login-form">
                        <div className="form-3">
                            <label>OTP</label><br></br>
                            <input type='text' placeholder='Enter OTP'></input>
                        </div>
                        <div className="form-3">
                            <label>New Password</label><br></br>
                            <input type='password' placeholder='Enter Password'></input>
                        </div>
                        <button className='start-button' disabled={loading}>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Login"}
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
        registerloading:state.register.loading,
        error:state?.otp?.error,
        data: state.forget.data,
        register: state.register.data
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