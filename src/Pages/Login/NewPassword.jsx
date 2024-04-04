import { Link } from "react-router-dom";

const Newpassword = () => {
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
                            <label>New Password</label><br></br>
                            <input type='password' placeholder='Enter Password'></input>
                        </div>
                        <div className="form-3">
                            <label>Confirm Password</label><br></br>
                            <input type='password' placeholder='Enter Password'></input>
                        </div>
                        <Link to="/"><button className='start-button'>Reset Password</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Newpassword;