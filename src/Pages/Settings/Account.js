import { HiOutlineUser } from 'react-icons/hi';
import {HiOutlineEnvelope} from 'react-icons/hi2'
import ng from '../../Assets/Image/ng.png'
import profile from '../../Assets/Image/logo2.png'
import './Account.css'
import { IoLocationOutline } from 'react-icons/io5';
import {connect} from 'react-redux'
import { FiChevronDown, FiTrash } from 'react-icons/fi';
import {FaRegUser} from 'react-icons/fa'
import {Switch} from "antd";
import JSEncrypt from 'jsencrypt';
import consts from "../Login/keys/const";
import {LuUploadCloud} from 'react-icons/lu'
import { useEffect, useRef, useState } from 'react';
import { profiledatasetting, putsetting, uplodimagesetting } from '../../Redux/Settings/SettingsAction';
import LoadingModal from '../../Components/modal/LoadingModal';
import LottieAnimation from '../../Lotties';
import loader from "../../Assets/animations/loading.json"
import SuccessModal from '../../Components/modal/SuccessModal';
import { resetpasswordData } from '../../Redux/Registration/ResetpasswordAction';
import { LogOutAuthAction } from '../../Redux/Login/LoginAction';
import { useNavigate } from 'react-router-dom';
const Account = ({
    uploadloading, 
    uploaderror, 
    uploaddata, 
    uplodimagesetting,
    profiledata,
    profiledatasetting,
    profileerror,
    profileloading,
    loading,
    data,
    errors,
    putsetting,
    getprofile,
    resetPassword,
    resetloading,
    resetdata,
    logout
}) => {
    const history = useNavigate();
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [showcountry, setshowcountry] = useState(false)
    const [showstate, setshowstate] = useState(false)
    const [country, setcountry] = useState("Nigeria")
    const [State, setState]= useState(getprofile?.schoolProfile?.address?.state)
    const [address, setAddress] = useState("")
    const [emailnotification, setemailNotification] = useState(getprofile?.schoolProfile?.notificationSettings?.receiveEmailAlert)
    const [smsnotification, setsmsNotification] = useState(getprofile?.schoolProfile?.notificationSettings?.receivePhoneAlert)
    const [city, setCity] = useState("")
    const [image, setImage] = useState("");
    const [oldPassword, setoldPassword] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false)
    const dropdownRef = useRef(null);
    const [require, setRequire] = useState(false)
    const [postState, setPostState] = useState({});
    const [resetState, setResetState] = useState({});
    const [resetsuccess, setResetsuccess] = useState(false)
    const [updatesuccess, setUpdateSuccess] = useState(false)
    const [edit, setEdit] = useState(false) 
    const handleshowcountry = ()=>{
        setshowcountry(!showcountry)
    }
    const handleEdit = ()=>{
        setEdit(!edit)
    }
    const handleshowstate = ()=>{
        setshowstate(!showstate)
    }
    const handlecountry =(country)=>{
        setcountry(country)
        setPostState({ ...postState, ...{country: country} })
    }
    const handlestate =(e)=>{
        const value = e.target.value
        setState(value)
        setPostState({ ...postState, ...{state: State} })
    }
    const handleAddress = (e) =>{
        const value = e.target.value
        setAddress(value)
        setPostState({ ...postState, ...{address} })
    }
    const handleCity = (e) =>{
        const value = e.target.value
        setCity(value)
        setPostState({ ...postState, ...{city} })
    }
    const handleOldpassword = (e) =>{
        const value = e.target.value
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        setoldPassword(encrypted)
        setResetState({ ...resetState, ...{oldPassword} })
    }
    const handleNewpassword = (e) =>{
        const value = e.target.value
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        setnewPassword(encrypted)
        setResetState({ ...resetState, ...{newPassword} })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        let data ={image: e.target.files[0]}
        try{
            uplodimagesetting(data, ()=>{
                setSuccess(true)
            },()=>{
                setError(true)
            })
        }catch(error){

        }
        if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setBackgroundImage(event.target.result);
        };
        reader.readAsDataURL(file);
        }
    };
    const handleDelete = ()=>{
        setBackgroundImage(null)
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(postState=={}){
            setRequire(true)
        } else{
            try{
                await profiledatasetting(postState, ()=>{
                    setUpdateSuccess(true)
                    setEdit(false)
                    // setSuccess(`/home`)
                // setPending(true);
                }, ()=>{ 
                    // setErrorHandler(error)
                    // setPending(false);
                });
            }catch(error){
            }
        }
    }
    const handleresetpassword = async(e) =>{
        e.preventDefault();

        await resetPassword(resetState, ()=>{
            setResetsuccess(true)
        }, ()=>{ 
            // setErrorHandler(error)
            // setPending(false);
        });
    }
    const togglemodal = ()=>{
        setUpdateSuccess(false)
    }
    const appStyle = {
        backgroundImage: `url(${backgroundImage === null ? `${getprofile?.schoolProfile?.schoolAvatar}` : backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center'
    }
    const BannerStyleText={
        visibility: `${backgroundImage === null ? "visible" : "hidden"}`
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setshowcountry(false);
          setshowstate(false);
        }
    };
    const handlesmsmonthly = async (checked) => {
        setsmsNotification(checked) // update state with new value
        // try {
        //     putsetting({smsMonthly: smsMonthly})    
        // } catch (error) {
        // }
    };
    const handleemailmonthly = async (checked) => {
        setemailNotification(checked) // update state with new value
        
    };
    const handlenotiSubmit = ()=>{
        try {
            putsetting({receiveEmailAlert: emailnotification, receivePhoneAlert: smsnotification},()=>{

            },() => {

            })    
        } catch (error) {
        }
    }
    const handlelogout =()=>{
        logout(
            ()=>{ history(`/`)}
        )
    }
    useEffect(()=>{
        setPostState({ ...postState, ...{schoolAvatar: uploaddata.secure_url} })
    },[uploaddata])
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);
    return ( 
        <>
            <div className="account">
                <div className="account-right">
                    <div className="director-info-top">
                        <p className='director-head'>School Profile</p>
                        
                        {(!edit) && (<button className='director-update' onClick={handleEdit}>Edit</button>)}
                        { (edit) && (
                            <div className="account-buttons">
                                <button className='director-update' onClick={handleSubmit} disabled={profileloading}>
                                    {profileloading ? (
                                        <LottieAnimation data={loader}/>
                                    ):"Update"}
                                </button>
                                <button className='director-update director-cancle' onClick={handleEdit}>
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                    {require && (
                        <div className="error-box">
                            <p>please Fill necessary field before clicking update</p>
                        </div>
                    )}
                    <div className="director-body">
                        <div className="director-forms">
                            <form>
                                <div className="director-form">
                                    <label className='form-label'>School Name</label><br></br>
                                    <div className="director-form-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48298 13.8457C4.61536 13.8457 1.3125 14.4305 1.3125 16.7724C1.3125 19.1143 4.5944 19.72 8.48298 19.72C12.3506 19.72 15.6525 19.1343 15.6525 16.7933C15.6525 14.4524 12.3715 13.8457 8.48298 13.8457Z" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48684 10.5059C11.0249 10.5059 13.0821 8.44779 13.0821 5.90969C13.0821 3.3716 11.0249 1.31445 8.48684 1.31445C5.94875 1.31445 3.89065 3.3716 3.89065 5.90969C3.88208 8.43922 5.92589 10.4973 8.45446 10.5059H8.48684Z" stroke="#5E6366" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                        <input type='text' value={getprofile?.schoolProfile?.schoolName} disabled></input>
                                    </div>
                                </div>
                                {/* <div className="director-form">
                                    <label>School Poster Number</label><br></br>
                                    <div className="director-form-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48298 13.8457C4.61536 13.8457 1.3125 14.4305 1.3125 16.7724C1.3125 19.1143 4.5944 19.72 8.48298 19.72C12.3506 19.72 15.6525 19.1343 15.6525 16.7933C15.6525 14.4524 12.3715 13.8457 8.48298 13.8457Z" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48684 10.5059C11.0249 10.5059 13.0821 8.44779 13.0821 5.90969C13.0821 3.3716 11.0249 1.31445 8.48684 1.31445C5.94875 1.31445 3.89065 3.3716 3.89065 5.90969C3.88208 8.43922 5.92589 10.4973 8.45446 10.5059H8.48684Z" stroke="#5E6366" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                        <input type='text' placeholder='Venture'></input>
                                    </div>
                                </div> */}
                                <div className="director-form">
                                    <label>Email</label><br></br>
                                    <div className="director-form-input">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                                            <path d="M17.4014 7.35156L12.9581 10.9646C12.1186 11.6306 10.9375 11.6306 10.098 10.9646L5.61719 7.35156" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4089 19.5C19.4502 19.5084 21.5 17.0095 21.5 13.9384V7.07001C21.5 3.99883 19.4502 1.5 16.4089 1.5H6.59114C3.54979 1.5 1.5 3.99883 1.5 7.07001V13.9384C1.5 17.0095 3.54979 19.5084 6.59114 19.5H16.4089Z" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <input type='text' value={getprofile?.schoolProfile?.email} disabled></input>
                                    </div>
                                </div>
                                <div className="director-form ">
                                    <label>Phone Number</label><br></br>
                                    <div className="director-form-2">
                                        <div className="director-form-country director-form">
                                            <div className="director-form-select">
                                                <p><span><img src={ng}></img></span>+234</p>
                                            </div>
                                        </div>
                                        <div className="director-form-phone">
                                            <div className="director-form-select">
                                             <input type='Text' value={getprofile?.schoolProfile?.phoneNumber} disabled></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="director-form">
                                    <label>Address/Location</label><br></br>
                                    {/* <div className="director-form-input"> */}
                                        {/* <IoLocationOutline/> */}
                                        <input 
                                            className={edit ? "input-2 input-edit": "input-2"}
                                            type='text' 
                                            defaultValue={getprofile?.schoolProfile?.address?.address}
                                            onChange={handleAddress}
                                            disabled={!edit}
                                            onBlur={handleAddress}
                                        ></input>
                                    {/* </div> */}
                                </div>
                                <div className="director-form">
                                    <label>City</label><br></br>
                                    {/* <div className="director-form-input"> */}
                                        {/* <IoLocationOutline/> */}
                                        <input 
                                            type='text' 
                                            className={edit ? "input-2 input-edit": "input-2"}
                                            defaultValue={getprofile?.schoolProfile?.address?.city}
                                            onChange={handleCity}
                                            disabled={!edit}
                                            onBlur={handleCity}
                                        ></input>
                                    {/* </div> */}
                                </div>
                                {/* <div className="director-form director-form-2"> */}
                                    {/* <div className="director-form-inner director-form">
                                        <label>Country</label><br></br>
                                        <div className="director-form-select" onClick={handleshowcountry}>
                                            <p>{country}</p>
                                            <FiChevronDown/>
                                        </div>
                                        {showcountry && (
                                            <div className='countries'  ref={dropdownRef}>
                                                <p onClick={()=>{handlecountry('Nigeria'); handleshowcountry()}}>Nigeria</p>
                                                <p onClick={()=>{handlecountry('South Africa'); handleshowcountry()}}>South Africa</p>
                                                <p onClick={()=>{handlecountry('USA'); handleshowcountry()}}>USA</p>
                                                <p onClick={()=>{handlecountry('Japan'); handleshowcountry()}}>Japan</p>
                                            </div>
                                        )}
                                        
                                    </div> */}
                                    <div className="director-form">
                                        <label>State</label><br></br>
                                        <select 
                                            required
                                            className={edit ? "input-2 input-edit": "input-2"}
                                            onChange={handlestate}
                                            onBlur={handlestate}
                                            disabled={!edit}
                                            value={State}
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
                                        {/* <div className="director-form-select" onClick={handleshowstate}>
                                            <p>{State}</p>
                                            <FiChevronDown/>
                                        </div>
                                        {showstate && (
                                            <div className='countries'  ref={dropdownRef}>
                                                <p onClick={()=>{handlestate('Ondo State'); handleshowstate()}}>Ondo State</p>
                                                <p onClick={()=>{handlestate('Abuja'); handleshowstate()}}>Abuja</p>
                                                <p onClick={()=>{handlestate('Ogun'); handleshowstate()}}>Ogun</p>
                                                <p onClick={()=>{handlestate('Kwara'); handleshowstate()}}>Kwara</p>
                                            </div>
                                        )} */}
                                    </div>
                                {/* </div> */}
                            </form>
                        </div>
                        <div className="director-image" style={appStyle}>
                            <div className="director-image-edit">
                                <div className="edit-icons"  onClick={()=> document.querySelector(".image-picker").click()}>
                                    <LuUploadCloud/>
                                </div>
                                {/* <div className="edit-icons" onClick={handleDelete}>
                                    <FiTrash/>
                                </div> */}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className='image-picker'
                                hidden
                            />
                            <svg style={BannerStyleText} xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                <path opacity="0.4" d="M30.3207 41.3961H12.4024C5.39501 41.3961 0.6875 36.4814 0.6875 29.1653V12.2788C0.6875 4.96267 5.39501 0.0458984 12.4024 0.0458984H30.3228C37.3302 0.0458984 42.0377 4.96267 42.0377 12.2788V29.1653C42.0377 36.4814 37.3302 41.3961 30.3207 41.3961" fill="#5570F1"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7952 13.8469C19.7952 16.6794 17.4899 18.9846 14.6574 18.9846C11.8229 18.9846 9.51968 16.6794 9.51968 13.8469C9.51968 11.0144 11.8229 8.70703 14.6574 8.70703C17.4899 8.70703 19.7952 11.0144 19.7952 13.8469ZM36.66 25.0375C37.1417 25.5047 37.487 26.0382 37.7144 26.6067C38.4029 28.3269 38.0452 30.3944 37.3092 32.098C36.4367 34.1263 34.7662 35.6583 32.6614 36.3282C31.7269 36.628 30.7469 36.7561 29.769 36.7561H12.4412C10.7169 36.7561 9.19107 36.355 7.94022 35.6025C7.15664 35.1311 7.01811 34.0456 7.59908 33.3385C8.57081 32.1601 9.53014 30.9774 10.4977 29.7845C12.342 27.502 13.5845 26.8404 14.9656 27.4213C15.5259 27.6612 16.0883 28.023 16.6672 28.4034C18.2095 29.4247 20.3536 30.8265 23.1778 29.3048C25.1083 28.2492 26.2289 26.4429 27.2042 24.8707L27.2239 24.839C27.2895 24.7338 27.3546 24.6286 27.4195 24.5238C27.7511 23.9879 28.0778 23.46 28.4479 22.9741C28.9068 22.3725 30.6105 20.491 32.8124 21.8308C34.2162 22.6743 35.3968 23.8156 36.66 25.0375Z" fill="#5570F1"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="account-left">
                    <div className="account-left-top">
                        <div className="password-top">
                            <p className='password-head'>Reset password</p>
                        </div>
                        <div className="password-forms">
                            <p className='password-instruction'>Create a new password that is at least 8 <br></br>character long.</p>
                            <form onSubmit={handleresetpassword}>
                                <div className="password-form">
                                    <label>Current Password</label><br></br>
                                    <input 
                                        type='password' 
                                        placeholder='XXXXXXXXXX'
                                        required
                                        onChange={handleOldpassword}
                                        onBlur={handleOldpassword}
                                    ></input>
                                </div>
                                <div className="password-form">
                                    <label>Type your new password</label><br></br>
                                    <input 
                                        type='password' 
                                        placeholder='New password'
                                        required
                                        onChange={handleNewpassword}
                                        onBlur={handleNewpassword}
                                    ></input>
                                </div>
                                {/* <div className="password-form">
                                    <label>Retype your new password</label><br></br>
                                    <input type='password' placeholder='Retype password'></input>
                                </div> */}
                                {/* <div className="password-form-check">
                                    <input type='checkbox'></input>
                                    <label>Require all devices to sign in with new password</label>
                                </div> */}
                                <div className="password-save">
                                    <button disabled={resetloading}>
                                    {resetloading ? (
                                        <LottieAnimation data={loader}/>
                                    ):"Save"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="account-left-bottom">
                        <div className="password-top">
                            <p className='password-head'>Notification settings</p>
                        </div>
                        <p className='password-content'>Select the type of notification you want parent/guardians to receive </p>
                        <div className="director-form new-form">
                            {/* <label>Select Notification Type</label><br></br>
                            <div className="director-form-select new-select" onClick={handleshowcountry}>
                                <p>select</p>
                                <FiChevronDown/>
                            </div>
                            {showcountry && (
                                <div className='countries'  ref={dropdownRef}>
                                    <p onClick={()=>{handlecountry('Nigeria'); handleshowcountry()}}>Nigeria</p>
                                    <p onClick={()=>{handlecountry('South Africa'); handleshowcountry()}}>South Africa</p>
                                    <p onClick={()=>{handlecountry('USA'); handleshowcountry()}}>USA</p>
                                    <p onClick={()=>{handlecountry('Japan'); handleshowcountry()}}>Japan</p>
                                </div>
                            )} */}
                            <div className="notification-switch">
                                <p>Email Alert</p>
                                <Switch
                                    checked={emailnotification}
                                    onChange={handleemailmonthly}
                                />
                            </div>
                            <div className="notification-switch">
                                <p>SMS Alert</p>
                                <Switch
                                    checked={smsnotification}
                                    onChange={handlesmsmonthly}
                                />
                            </div>
                            <div className="password-save">
                                <button onClick={handlenotiSubmit}>
                                {loading ? (
                                    <LottieAnimation data={loader}/>
                                ):"Save"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="settings-button">
                <button className='Reset'>Reset all</button>
                <button className='Save'>Save</sbutton>
            </div> */}
            {updatesuccess && (<SuccessModal message={profiledata.message} togglemodal={togglemodal}/>)}
            {resetsuccess && (<SuccessModal message={resetdata.message} togglemodal={handlelogout}/>)}
            {uploadloading && (<LoadingModal/>)}
            {error && (<p>{uploaderror}</p>)}
     </>
    );
}

const mapStateToProps = (state) => {

    return {
        uploaderror: state.uploadimage.error,
        uploadloading: state.uploadimage.loading,
        uploaddata: state.uploadimage.data,
        profileerror: state.profiledata.error,
        profileloading: state.profiledata.loading,
        profiledata: state.profiledata.data,
        loading:state.notification.loading,
        data: state.notification.data,
        errors: state.notification.error,
        resetloading: state.resetpassword.loading,
        resetdata: state.resetpassword.data
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        uplodimagesetting: (setting, history, error) => dispatch(uplodimagesetting(setting, history, error)),
        profiledatasetting: (setting, history, error) => dispatch(profiledatasetting(setting, history, error)),
        putsetting: (setting, history, error) => dispatch(putsetting(setting, history, error)),
        resetPassword: (setting, history, error) => dispatch(resetpasswordData(setting, history, error)),
        logout: (history) => dispatch(LogOutAuthAction(history)),
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Account);