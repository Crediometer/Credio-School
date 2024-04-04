import { Link } from "react-router-dom";

const Reset = () => {
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
                    <form action="" className="login-form">
                        <div className="form-3">
                            <label>School email address</label><br></br>
                            <input type='email' placeholder='Enter Email'></input>
                        </div>
                        <Link to="/newpassword"><button className='start-button'>Reset Password</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Reset;