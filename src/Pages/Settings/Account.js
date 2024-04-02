import { HiOutlineUser } from 'react-icons/hi';
import {HiOutlineEnvelope} from 'react-icons/hi2'
import ng from '../../Assets/ng.png'
import profile from '../../Assets/profile2.png'
import './Account.css'
import { IoLocationOutline } from 'react-icons/io5';
import { FiChevronDown, FiTrash } from 'react-icons/fi';
import {FaRegUser} from 'react-icons/fa'
import {LuUploadCloud} from 'react-icons/lu'
import { useEffect, useRef, useState } from 'react';
const Account = () => {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [showcountry, setshowcountry] = useState(false)
    const [showstate, setshowstate] = useState(false)
    const [country, setcountry] = useState('Nigeria')
    const [State, setState]= useState('Ondo State')
    const dropdownRef = useRef(null);
    const handleshowcountry = ()=>{
        setshowcountry(!showcountry)
    }
    const handleshowstate = ()=>{
        setshowstate(!showstate)
    }
    const handlecountry =(country)=>{
        setcountry(country)
    }
    const handlestate =(state)=>{
        setState(state)
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
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
    const appStyle = {
        backgroundImage: `url(${backgroundImage})`,
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
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);
    return ( 
        <div className="account">
            <div className="account-left">
                <div className="password-top">
                    <p className='password-head'>Password Settings</p>
                    <button className='password-change'>Change Password</button>
                </div>
                <div className="password-forms">
                    <p className='password-instruction'>Create a new password that is at least 8 <br></br>character long.</p>
                    <form>
                        <div className="password-form">
                            <label>Current Password</label><br></br>
                            <input type='password' placeholder='XXXXXXXXXX'></input>
                        </div>
                        <div className="password-form">
                            <label>Type your new password</label><br></br>
                            <input type='password' placeholder='New password'></input>
                        </div>
                        <div className="password-form">
                            <label>Retype your new password</label><br></br>
                            <input type='password' placeholder='Retype password'></input>
                        </div>
                        <div className="password-form-check">
                            <input type='checkbox'></input>
                            <label>Require all devices to sign in with new password</label>
                        </div>
                        <div className="password-save">
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="account-right">
                <div className="director-info-top">
                    <p className='director-head'>Directors information</p>
                    <button className='director-update'>Update</button>
                </div>
                <div className="director-body">
                    <div className="director-forms">
                        <form>
                            <div className="director-form">
                                <label className='form-label'>First Name</label><br></br>
                                <div className="director-form-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48298 13.8457C4.61536 13.8457 1.3125 14.4305 1.3125 16.7724C1.3125 19.1143 4.5944 19.72 8.48298 19.72C12.3506 19.72 15.6525 19.1343 15.6525 16.7933C15.6525 14.4524 12.3715 13.8457 8.48298 13.8457Z" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48684 10.5059C11.0249 10.5059 13.0821 8.44779 13.0821 5.90969C13.0821 3.3716 11.0249 1.31445 8.48684 1.31445C5.94875 1.31445 3.89065 3.3716 3.89065 5.90969C3.88208 8.43922 5.92589 10.4973 8.45446 10.5059H8.48684Z" stroke="#5E6366" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    <input type='text' placeholder='Test'></input>
                                </div>
                            </div>
                            <div className="director-form">
                                <label>Last Name</label><br></br>
                                <div className="director-form-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48298 13.8457C4.61536 13.8457 1.3125 14.4305 1.3125 16.7724C1.3125 19.1143 4.5944 19.72 8.48298 19.72C12.3506 19.72 15.6525 19.1343 15.6525 16.7933C15.6525 14.4524 12.3715 13.8457 8.48298 13.8457Z" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48684 10.5059C11.0249 10.5059 13.0821 8.44779 13.0821 5.90969C13.0821 3.3716 11.0249 1.31445 8.48684 1.31445C5.94875 1.31445 3.89065 3.3716 3.89065 5.90969C3.88208 8.43922 5.92589 10.4973 8.45446 10.5059H8.48684Z" stroke="#5E6366" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    <input type='text' placeholder='Venture'></input>
                                </div>
                            </div>
                            <div className="director-form">
                                <label>Email</label><br></br>
                                <div className="director-form-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                                    <path d="M17.4014 7.35156L12.9581 10.9646C12.1186 11.6306 10.9375 11.6306 10.098 10.9646L5.61719 7.35156" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4089 19.5C19.4502 19.5084 21.5 17.0095 21.5 13.9384V7.07001C21.5 3.99883 19.4502 1.5 16.4089 1.5H6.59114C3.54979 1.5 1.5 3.99883 1.5 7.07001V13.9384C1.5 17.0095 3.54979 19.5084 6.59114 19.5H16.4089Z" stroke="#5E6366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    <input type='text' placeholder='TestVenture@gmail.com'></input>
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
                                        <input type='Text' placeholder='0908877565'></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="director-form">
                                <label>Address</label><br></br>
                                <div className="director-form-input">
                                    <IoLocationOutline/>
                                    <input type='text' placeholder='Address'></input>
                                </div>
                            </div>
                             <div className="director-form">
                                <label>City</label><br></br>
                                <div className="director-form-input">
                                    {/* <IoLocationOutline/> */}
                                    <input type='text' placeholder='City'></input>
                                </div>
                            </div>
                            <div className="director-form director-form-2">
                                <div className="director-form-inner director-form">
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
                                    
                                </div>
                                <div className="director-form-inner">
                                    <label>State</label><br></br>
                                    <div className="director-form-select" onClick={handleshowstate}>
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
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="director-image" style={appStyle}>
                        <div className="director-image-edit">
                            <div className="edit-icons"  onClick={()=> document.querySelector(".image-picker").click()}>
                                <LuUploadCloud/>
                            </div>
                            <div className="edit-icons" onClick={handleDelete}>
                                <FiTrash/>
                            </div>
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
        </div>
    );
}
 
export default Account;