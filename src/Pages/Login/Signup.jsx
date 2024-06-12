import { Link } from "react-router-dom";
import { addFormData, registerData } from "../../Redux/Registration/RegisterAction";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import consts from './keys/const';
import JSEncrypt from 'jsencrypt';
import LottieAnimation from "../../Lotties"
import loader from "../../Assets/animations/loading.json"
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSpinner, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Signup = ({
    loading,
    error,
    data,
    registerData
}) => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [type, setType] = useState('password');
    const [icon, setIcon] =useState(faEye);
    const [name, setName]= useState("")
    const [address, setAddress]= useState("")
    const [phoneNumber, setphoneNumber]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [city, setCity]= useState("")
    const [state, setState]= useState("")
    const [country, setCountry]= useState("Nigeria")
    const [showerror, setshowerror] = useState(false)
    const [formData, setFormData] = useState({});
    const [postState, setPostState] = useState({})

    const handleName = (e)=>{
        const value = e.target.value
        setName(value)
        setFormData({ ...formData, ...{schoolName: name} }); 
    }
    const handleEmail = (e)=>{
        const value = e.target.value
        setEmail(value)
        setFormData({ ...formData, ...{email: email} }); 
    }
    const handleAddress = (e)=>{
        const value = e.target.value
        setAddress(value)
        setFormData({ ...formData, ...{address: address, country: country} }); 
    }
    const handleCity = (e)=>{
        const value = e.target.value
        setCity(value)
        setFormData({ ...formData, ...{city: city} });
    }
    const handleState = (e)=>{
        const value = e.target.value
        setState(value)
        setFormData({ ...formData, ...{state: state} });
        // setPostState({ ...postState, ...{state: state} }); 
    }
    const handlePhoneNumber = (e)=>{
        const value = e.target.value
        let formattedNumber = value.trim().replace(/\D/g, ''); // Remove non-numeric characters

        // Check if the first digit is '0' and remove it, then prepend '+234'
        if (formattedNumber.charAt(0) === '0') {
            formattedNumber = '+234' + formattedNumber.slice(1);
        }

        setphoneNumber(formattedNumber);
        setFormData({ ...formData, ...{phoneNumber: phoneNumber} });
        setPostState({ ...postState, ...{phoneNumber: phoneNumber} }); 
    }
    const handlePassword = (e)=>{
        const value = e.target.value
        // setPassword(value)
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        setPassword(encrypted);
        setFormData({ ...formData, ...{password: password} });
        // setPostState({ ...postState, ...{password: password} }); 
    }
    const handleCountry = (e)=>{
        const value = e.target.value
        setCountry(value)
        setFormData({ ...formData, ...{country: country} });
        // setPostState({ ...postState, ...{country: country} }); 
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        setshowerror(false)
        registerData(
            postState, ()=>{ 
            history(`/otp`);
            dispatch(addFormData(formData));
            // setPending(true);
        },  ()=>{ 
            setshowerror(true)
            // setPending(false);
        })
    }
     // FOR PASSWORD VISIBILITY
     const vissibleToggle=()=>{
        if(type==='password'){
            setIcon(faEye);
            setType('text');
        }
        else{
            setIcon(faEyeSlash);
            setType('password');
        }
    }
    useEffect(() => {
        setFormData({ ...formData, ...{
            schoolName: name, 
            email: email,
            address: address, 
            country: country,
            city: city,
            state: state,
            phoneNumber: phoneNumber,
            password: password
        } }); 
        setPostState({ ...postState, ...{phoneNumber: phoneNumber} }); 
    }, [phoneNumber,name,]);

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
                    <form onSubmit={handlesubmit} className="login-form">
                        {showerror && (
                            <div className="error-box">
                                <p>{error}</p>
                            </div>
                        )}
                        <div className="form-2">
                            <div className="form-3">
                                <label>Name of School</label><br></br>
                                <input
                                    required
                                    type='text' 
                                    placeholder='School Name'
                                    onChange={handleName}
                                    onBlur={handleName}
                                ></input>
                            </div>
                            <div className="form-3">
                                <label>Address/Location</label><br></br>
                                <input 
                                    required
                                    type='text' 
                                    placeholder='Address'
                                    onChange={handleAddress}
                                    onBlur={handleAddress}
                                ></input>
                            </div>
                        </div>
                        <div className="form-2">
                            <div className="form-3">
                                <label>City</label><br></br>
                                <input
                                    required
                                    type='text' 
                                    placeholder='School Name'
                                    onChange={handleCity}
                                    onBlur={handleCity}
                                ></input>
                            </div>
                            <div className="form-3">
                                <label>State</label><br></br>
                                <select 
                                    required
                                    onChange={handleState}
                                    onBlur={handleState}
                                >
                                    <option disabled selected>--Select State--</option>
                                    <option value="Abia">Abia</option>
                                    <option value="Adamawa">Adamawa</option>
                                    <option value="Akwa Ibom">Akwa Ibom</option>
                                    <option value="Anambra">Anambra</option>
                                    <option value="Bauchi">Bauchi</option>
                                    <option value="Bayelsa">Bayelsa</option>
                                    <option value="Benue">Benue</option>
                                    <option value="Borno">Borno</option>
                                    <option value="Cross River">Cross River</option>
                                    <option value="Delta">Delta</option>
                                    <option value="Ebonyi">Ebonyi</option>
                                    <option value="Edo">Edo</option>
                                    <option value="Ekiti">Ekiti</option>
                                    <option value="Enugu">Enugu</option>
                                    <option value="FCT">Federal Capital Territory</option>
                                    <option value="Gombe">Gombe</option>
                                    <option value="Imo">Imo</option>
                                    <option value="Jigawa">Jigawa</option>
                                    <option value="Kaduna">Kaduna</option>
                                    <option value="Kano">Kano</option>
                                    <option value="Katsina">Katsina</option>
                                    <option value="Kebbi">Kebbi</option>
                                    <option value="Kogi">Kogi</option>
                                    <option value="Kwara">Kwara</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Nasarawa">Nasarawa</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Ogun">Ogun</option>
                                    <option value="Ondo">Ondo</option>
                                    <option value="Osun">Osun</option>
                                    <option value="Oyo">Oyo</option>
                                    <option value="Plateau">Plateau</option>
                                    <option value="Rivers">Rivers</option>
                                    <option value="Sokoto">Sokoto</option>
                                    <option value="Taraba">Taraba</option>
                                    <option value="Yobe">Yobe</option>
                                    <option value="Zamfara">Zamfara</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-3">
                            <label>Phone Number</label><br></br>
                            <input 
                                required
                                type='text' 
                                placeholder='Enter phone number'
                                onChange={handlePhoneNumber}
                                onBlur={handlePhoneNumber}
                                maxLength={11}
                            ></input>
                        </div>
                        <div className="form-3">
                            <label>School Email Address</label><br></br>
                            <input
                                required 
                                type='email' 
                                placeholder='Enter email'
                                onChange={handleEmail}
                                onBlur={handleEmail}
                            ></input>
                        </div>
                        <div className="form-3">
                            <label>Password</label><br></br>
                            <div className="password-input">
                                <input 
                                    type={type}
                                    required
                                    // value={password}
                                    placeholder='Enter Password'
                                    onInput={handlePassword}
                                    onChange={handlePassword}
                                    onBlur={handlePassword}
                                ></input>
                                <span className="psw-visible"><FontAwesomeIcon icon={icon} onClick={vissibleToggle}/></span>
                            </div>
                        </div>
                        <button className='start-button' disabled={loading}>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Sign Up"}
                        </button>
                        <p className='already'>Already Have an Account?<Link to="/"><span>Login</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return{
        loading:state.register.loading,
        error:state?.register?.error,
        data: state.register.data,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        registerData: (postdata, history, error) => {
            dispatch(registerData(postdata, history, error));
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);