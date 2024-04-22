import { Link, useNavigate } from "react-router-dom";
import { forgetData } from "../../Redux/Registration/RegisterAction";
import { connect } from "react-redux";
import LottieAnimation from "../../Lotties"
import loader from "../../Assets/animations/loading.json"
import { useState } from "react";

const Reset = ({loading, forget}) => {
    const history = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("")
    const [loginState, setLoginState] = useState({});

    const handleChange = (e) => {
        const inputValue = e.target.value.trim().toLowerCase();    

            let formattedNumber = inputValue.replace(/\D/g, ''); // Remove non-numeric characters

            // Check if the first digit is '0' and remove it, then prepend '+234'
            if (formattedNumber.charAt(0) === '0') {
                formattedNumber = '+234' + formattedNumber.slice(1);
            }
            setPhoneNumber(formattedNumber);
            setLoginState({ ...loginState, ...{phoneNumber: phoneNumber} });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("hereee", password)
        try{
            // console.log("hereee", password)
            await forget(loginState, ()=>{ 
                history(`/newpassword`)
            // setPending(true);
            }, ()=>{ 
                // setErrorHandler(error)
                // setshowerror(true)
                // setPending(false);
            });
        }catch(error){
        }
    };
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
                    <h4>Reset Your Password</h4>
                    <p>Securing Your Account with a New Password</p>
                    <form action="" className="login-form" onSubmit={handleSubmit}>
                        <div className="form-3">
                            <label>School Phone Number</label><br></br>
                            <input 
                                type='text' 
                                placeholder='Enter Phone Number'
                                onChange={handleChange}
                                onBlur={handleChange}
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
    return{
        error:state?.login?.error,
        loading: state?.forget?.loading,
        // getprofile: state?.getprofile?.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        forget: (loginState, history, setErrorHandler) => {
            dispatch(forgetData(loginState, history, setErrorHandler));
        },
        // fetchgetprofile: () => dispatch(fetchgetprofile()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);