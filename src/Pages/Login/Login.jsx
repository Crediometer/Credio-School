import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return ( 
        <div className="login">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="login-inner">
                <div className="login-left">
                    <h4>Knowledge Unleashed, Virtually Limitless</h4>
                </div>
                <div className="login-right">
                    <h4>Hello! Welcome back</h4>
                    <form action="" className="login-form">
                        <div className="form-3">
                            <label>School email address</label><br></br>
                            <input type='email' placeholder='Enter Email'></input>
                        </div>
                        <div className="form-3">
                            <label>Password</label><br></br>
                            <input type='password' placeholder='Enter Password'></input>
                        </div>
                        <p className='forget'>Forgot Password</p>
                        <Link to="/home"><button className='start-button'>Start now!</button></Link>
                        <p className='already'>Don’t have an account? <span>Sign Up</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;