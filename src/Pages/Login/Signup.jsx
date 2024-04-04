import { Link } from "react-router-dom";

const Signup = () => {
    return ( 
        <div className="login signup">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="login-inner signup-inner">
                <div className="login-left">
                    <div className="login-left-bottom">
                        <h4>Knowledge Unleashed, Virtually Limitless</h4>
                    </div>
                </div>
                <div className="login-right signup-right">
                    <h4>Hello! Welcome back</h4>
                    <form action="" className="login-form">
                        <div className="form-2">
                            <div className="form-3">
                                <label>Name of school</label><br></br>
                                <input type='text' placeholder='School Name'></input>
                            </div>
                            <div className="form-3">
                                <label>Address/location</label><br></br>
                                <input type='text' placeholder='Address'></input>
                            </div>
                        </div>
                        <div className="form-3">
                            <label>Phone number</label><br></br>
                            <input type='text' placeholder='Enter phone number'></input>
                        </div>
                        <div className="form-3">
                            <label>School email address</label><br></br>
                            <input type='email' placeholder='Enter email'></input>
                        </div>
                        <div className="form-3">
                            <label>Password</label><br></br>
                            <input type='text' placeholder='Enter password'></input>
                        </div>
                        <Link to="/"><button className='start-button'>Start now!</button></Link>
                        <p className='already'>Already have an account?<Link to="/"><span>Login</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Signup;