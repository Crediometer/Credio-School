import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import './Login.css'
import { useNavigate } from "react-router-dom";
import { LoginAuthAction } from '../../Redux/Login/LoginAction';
import { useState } from 'react';
import LottieAnimation from "../../Lotties"
import loader from "../../Assets/animations/loading.json"
const Login = ({
    login,
    loading,
    error,
}) => {
    const history = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginState, setLoginState] = useState({});
    const [showerror, setshowerror] = useState(false)
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const handleNumber = (e) => {
        const value = e.target.value;
        setEmail(value);
        setLoginState({ ...loginState, ...{email} });
    };
    const handlePassword = (e) => {
        const value = e.target.value;
        // var encrypt = new JSEncrypt();
        // encrypt.setPublicKey(`${consts.pub_key}`);
        // var encrypted = encrypt.encrypt(value);
        setPassword(value);
        setLoginState({ ...loginState, ...{password} });
    };
    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
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
                            <label>School email address</label><br></br>
                            <input 
                                type='email' 
                                placeholder='Enter Email'
                                onChange={handleNumber}
                                onBlur={handleNumber}
                            ></input>
                        </div>
                        <div className="form-3">
                            <label>Password</label><br></br>
                            <input 
                                type='password' 
                                placeholder='Enter Password'
                                onChange={handlePassword}
                                onBlur={handlePassword}
                            ></input>
                        </div>
                        <Link to="/reset"><p className='forget'>Forgot Password</p></Link>
                        <button className='start-button'>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Start Up"}
                        </button>
                        <p className='already'>Don’t have an account? <Link to="/signup"><span>Sign Up</span></Link></p>
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