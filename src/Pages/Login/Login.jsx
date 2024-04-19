import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import './Login.css'
import { useNavigate } from "react-router-dom";
import { LoginAuthAction } from '../../Redux/Login/LoginAction';
import { useEffect, useState } from 'react';
import LottieAnimation from "../../Lotties"
import loader from "../../Assets/animations/loading.json"
import JSEncrypt from 'jsencrypt';
import consts from "./keys/const";
const Login = ({
    login,
    loading,
    error,
}) => {
    const history = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginState, setLoginState] = useState({});
    const [contactInfo, setContactInfo] = useState('');
    const [showerror, setshowerror] = useState(false)
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const handleNumber = (e) => {
        const value = e.target.value;
        setEmail(value);
        setLoginState({ ...loginState, ...{email} });
    };
    const handleChange = (e) => {
        const inputValue = e.target.value.trim().toLowerCase();
        setContactInfo(inputValue);
        // Regular expressions to validate phone number and email address
        const phoneRegex = /^\d{11}$/; // Change this regex according to your phone number format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Check if input matches either phone number or email format
        if (emailRegex.test(inputValue)) {
            setLoginState({ ...loginState, ...{identifier: contactInfo} });
        } 
        if (phoneRegex.test(inputValue)) {
            let formattedNumber = inputValue.replace(/\D/g, ''); // Remove non-numeric characters

            // Check if the first digit is '0' and remove it, then prepend '+234'
            if (formattedNumber.charAt(0) === '0') {
                formattedNumber = '+234' + formattedNumber.slice(1);
            }
            setContactInfo(formattedNumber);
            setLoginState({ ...loginState, ...{identifier: contactInfo} });
        } 
      };
      console.log("hereee", password)
    const handlePassword = (e) => {
        const value = e.target.value;
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        setPassword(encrypted);
        setLoginState({ ...loginState, ...{password:encrypted} });
    };
    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log("hereee", password)
        setshowerror(false)
        try{
            console.log("hereee", password)
            await login(loginState, ()=>{ 
                history(`/home`)
            // setPending(true);
            }, ()=>{ 
                setErrorHandler(error)
                setshowerror(true)
                // setPending(false);
            });
        }catch(error){
        }
    };
    useEffect(() => {
        setLoginState({ ...loginState, identifier:contactInfo, password });
    }, [contactInfo, password]);

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
                    <h4>Hello! Welcome back</h4>
                    <form onSubmit={handleSignUp} className="login-form">
                        {showerror && (
                            <div className="error-box">
                                <p>{error}</p>
                            </div>
                        )}
                        <div className="form-3">
                            <label>School Email Address/Phone Number</label><br></br>
                            <input 
                                type='text' 
                                required 
                                placeholder='Enter Email or Phone Number'
                                onChange={handleChange}
                                onBlur={handleChange}
                                // onChange={handleNumber}
                                // onBlur={handleNumber}
                            ></input>
                        </div>
                        <div className="form-3">
                            <label>Password</label><br></br>
                            <input 
                                type='password' 
                                required
                                // value={password}
                                placeholder='Enter Password'
                                onInput={handlePassword}
                                onChange={handlePassword}
                                onBlur={handlePassword}
                            ></input>
                        </div>
                        <Link to="/reset"><p className='forget'>Forgot Password</p></Link>
                        <button className='start-button' disabled={loading}>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Login"}
                        </button>
                        <p className='already'>Don’t Have an Account? <Link to="/signup"><span>Sign Up</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.login?.error,
        loading: state?.login?.dataAdded,
        getprofile: state?.getprofile?.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (loginState, history, setErrorHandler) => {
            dispatch(LoginAuthAction(loginState, history, setErrorHandler));
        },
        // fetchgetprofile: () => dispatch(fetchgetprofile()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);