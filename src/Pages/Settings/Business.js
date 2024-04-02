import { FiChevronDown, FiPlus, FiUploadCloud } from 'react-icons/fi';
import './Business.css';
import { ChromePicker } from 'react-color'
import { useEffect, useRef, useState } from 'react';
import transparent from '../../Assets/transparent.png'
const Business = () => {
    const[currentColor, setCurrentColor] = useState('#fff ')
    const[textColor, setTextColor] = useState("#121212")
    const[textColor1, setTextColor1] = useState("#121212")
    const[textShow, setTextShow] = useState(false)
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [LogoImage, setLogoImage] = useState(null);
    const [BannerImage, setBannerImage] = useState(null);
    const [selectedRadio, setSelectedRadio] = useState(null);
    const [showfont, setShowfont] = useState(false)
    const [font, setfont] = useState('Poppins')
    const dropdownRef = useRef(null);
    const handleshowfont = () =>{
        setShowfont(!showfont)
        
    }
    const handlefont =(font)=>{
        setfont(font)
    }
    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
    };
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
    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setLogoImage(event.target.result);
        };
        reader.readAsDataURL(file);
        }
    };
    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setBannerImage(event.target.result);
        };
        reader.readAsDataURL(file);
        }
    };
    const handleColor = (color)=>{
        setCurrentColor(color.hex)
    }
    const handleTextColor = (color) =>{
        setTextColor(color.hex)
        setTextColor1(color.hex)
    }

    const textStyle = {
        color: textColor1 ,
       
    }
    const appStyle = {
        backgroundColor: currentColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "250px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${(selectedRadio === 'radio1') ? 'top left' :(selectedRadio === 'radio2')? "top right":(selectedRadio === 'radio3')? "bottom left": "bottom right"}`
    }
    const logoStyle = {
        backgroundImage: `url(${LogoImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    const logoStyleText={
      visibility: `${LogoImage === null ? "visible" : "hidden"}`
    }
    const BannerStyle = {
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    const BannerStyleText={
      visibility: `${BannerImage === null ? "visible" : "hidden"}`
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowfont(false);
          setTextShow(false)
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);
    return ( 
        <div className="business">
            <div className="business-left">
                <div className="business-logo-form">
                    <div className="business-input">
                        <input type='text'
                        required
                        ></input>
                        <span className='label-mobile'>Foodcourt</span>
                    </div>
                    <div className="business-input">
                        <input type='text' 
                        required
                        ></input>
                        <span className='label-mobile'>Dinner</span>
                    </div>
                    <div className="business-input">
                        <input type='text' 
                        required
                        ></input>
                        <span className='label-mobile'>Large, Medium, Small</span>
                    </div>
                    <div className="business-input">
                        <input type='text' required></input>
                        <span className='label-mobile'>Take Away, Eat In</span>
                    </div>
                    <div className="business-input">
                        <input type='text'required></input>
                        <span className='label-mobile'>Product Name</span>
                    </div>
                    <div className="business-logo">
                        <p className='business-logo-head'>Logo image</p>
                        <div className="business-upload">
                            <div className="upload-logo" style={logoStyle} onClick={()=> document.querySelector(".logo-picker").click()}>
                                <svg style={logoStyleText} xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                    <path opacity="0.4" d="M30.3207 41.3961H12.4024C5.39501 41.3961 0.6875 36.4814 0.6875 29.1653V12.2788C0.6875 4.96267 5.39501 0.0458984 12.4024 0.0458984H30.3228C37.3302 0.0458984 42.0377 4.96267 42.0377 12.2788V29.1653C42.0377 36.4814 37.3302 41.3961 30.3207 41.3961" fill="#5570F1"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7952 13.8469C19.7952 16.6794 17.4899 18.9846 14.6574 18.9846C11.8229 18.9846 9.51968 16.6794 9.51968 13.8469C9.51968 11.0144 11.8229 8.70703 14.6574 8.70703C17.4899 8.70703 19.7952 11.0144 19.7952 13.8469ZM36.66 25.0375C37.1417 25.5047 37.487 26.0382 37.7144 26.6067C38.4029 28.3269 38.0452 30.3944 37.3092 32.098C36.4367 34.1263 34.7662 35.6583 32.6614 36.3282C31.7269 36.628 30.7469 36.7561 29.769 36.7561H12.4412C10.7169 36.7561 9.19107 36.355 7.94022 35.6025C7.15664 35.1311 7.01811 34.0456 7.59908 33.3385C8.57081 32.1601 9.53014 30.9774 10.4977 29.7845C12.342 27.502 13.5845 26.8404 14.9656 27.4213C15.5259 27.6612 16.0883 28.023 16.6672 28.4034C18.2095 29.4247 20.3536 30.8265 23.1778 29.3048C25.1083 28.2492 26.2289 26.4429 27.2042 24.8707L27.2239 24.839C27.2895 24.7338 27.3546 24.6286 27.4195 24.5238C27.7511 23.9879 28.0778 23.46 28.4479 22.9741C28.9068 22.3725 30.6105 20.491 32.8124 21.8308C34.2162 22.6743 35.3968 23.8156 36.66 25.0375Z" fill="#5570F1"/>
                                </svg>
                                <p style={logoStyleText} className='upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                            </div>
                            <div className="busines-upload-instruction" onClick={()=> document.querySelector(".logo-picker").click()}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoChange}
                                    className='logo-picker'
                                    hidden
                                />
                                <p className='upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                                <p className='upload-instruction'>Upload a cover image for your product.<br></br>File Format jpeg, png Recommened Size 600x600 (1:1)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="business-banner">
                    <div className="banner-upper" style={appStyle}>
                        <div className="banner-input">
                            {/* <p style={textStyle}>Enter Text<br></br> Here</p> */}
                            <textarea style={textStyle} type='text' placeholder='Enter Text Here'></textarea>
                        </div>
                        <div className="banner-upload" onClick={()=> document.querySelector(".image-picker").click()}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className='image-picker'
                                hidden
                            />
                            <p className='upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                            <p className='upload-instruction'>Upload a cover image for your product.File Format Recommened Size</p>
                        </div>
                    </div>
                    <div className="banner-lower">
                        <p className='business-logo-head'>Upload banner image</p>
                        <div className="business-upload">
                            <div className="upload-logo" style={BannerStyle} onClick={()=> document.querySelector(".banner-picker").click()}>
                                <svg style={BannerStyleText} xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                    <path opacity="0.4" d="M30.3207 41.3961H12.4024C5.39501 41.3961 0.6875 36.4814 0.6875 29.1653V12.2788C0.6875 4.96267 5.39501 0.0458984 12.4024 0.0458984H30.3228C37.3302 0.0458984 42.0377 4.96267 42.0377 12.2788V29.1653C42.0377 36.4814 37.3302 41.3961 30.3207 41.3961" fill="#5570F1"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7952 13.8469C19.7952 16.6794 17.4899 18.9846 14.6574 18.9846C11.8229 18.9846 9.51968 16.6794 9.51968 13.8469C9.51968 11.0144 11.8229 8.70703 14.6574 8.70703C17.4899 8.70703 19.7952 11.0144 19.7952 13.8469ZM36.66 25.0375C37.1417 25.5047 37.487 26.0382 37.7144 26.6067C38.4029 28.3269 38.0452 30.3944 37.3092 32.098C36.4367 34.1263 34.7662 35.6583 32.6614 36.3282C31.7269 36.628 30.7469 36.7561 29.769 36.7561H12.4412C10.7169 36.7561 9.19107 36.355 7.94022 35.6025C7.15664 35.1311 7.01811 34.0456 7.59908 33.3385C8.57081 32.1601 9.53014 30.9774 10.4977 29.7845C12.342 27.502 13.5845 26.8404 14.9656 27.4213C15.5259 27.6612 16.0883 28.023 16.6672 28.4034C18.2095 29.4247 20.3536 30.8265 23.1778 29.3048C25.1083 28.2492 26.2289 26.4429 27.2042 24.8707L27.2239 24.839C27.2895 24.7338 27.3546 24.6286 27.4195 24.5238C27.7511 23.9879 28.0778 23.46 28.4479 22.9741C28.9068 22.3725 30.6105 20.491 32.8124 21.8308C34.2162 22.6743 35.3968 23.8156 36.66 25.0375Z" fill="#5570F1"/>
                                </svg>
                                <p style={BannerStyleText}className='upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                            </div>
                            <div className="busines-upload-instruction" onClick={()=> document.querySelector(".banner-picker").click()}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleBannerChange}
                                    className='banner-picker'
                                    hidden
                                />
                                <p className='upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                                <p className='upload-instruction'>Upload a cover image for your product.<br></br>File Format jpeg, png Recommened Size 600x600 (1:1)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="business-right">
                <p className="brand-color">Brand Color</p>
                <p className="adjust">Adjust color of the Brand</p>
                <div className="color-pallete">
                    <ChromePicker width='100'
                    color={currentColor} onChangeComplete={handleColor} 
                    />
                </div>
                <div className="position-opacity">
                    <div className="position">
                        <p className="position-head">Position</p>
                        <div className="highlight">
                            <div className="position-box">
                                <div className='box-1'>
                                    <input
                                     type="radio" 
                                     id="radio1" 
                                     name="radio-group"
                                     value="radio1"
                                    onChange={handleRadioChange}
                                    checked={selectedRadio === 'radio1'}
                                    ></input>
                                    <label for="radio1">
                                        <div class="custom-radio"></div>
                                    </label>
                                </div>
                                <div className="box-2">
                                    <input 
                                    type="radio" 
                                    id="radio2" 
                                    name="radio-group"
                                    value="radio2"
                                    onChange={handleRadioChange}
                                    checked={selectedRadio === 'radio2'}
                                    ></input>
                                    <label for="radio2">
                                        <div class="custom-radio"></div>
                                    </label>
                                </div>
                                <div className="box-3">
                                    <input 
                                    type="radio" 
                                    id="radio3" 
                                    name="radio-group"
                                    value="radio3"
                                    onChange={handleRadioChange}
                                    checked={selectedRadio === 'radio3'}
                                    ></input>
                                    <label for="radio3">
                                        <div class="custom-radio"></div>
                                    </label>
                                </div>
                                <div className="box-4">
                                    <input
                                     type="radio" 
                                     id="radio4" 
                                     name="radio-group"
                                     value="radio4"
                                    onChange={handleRadioChange}
                                    checked={selectedRadio === 'radio4'}
                                     ></input>
                                    <label for="radio4">
                                        <div class="custom-radio"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity">
                        <p className="position-head">Opacity</p>
                        <div className="opacity-boxes">
                            <div className="opacity-box">
                              <div className="position-box"></div>
                              <p>Solid</p>
                            </div>
                            <div className="opacity-box">
                                <img src={transparent}></img>
                                <p>Transparent</p>
                            </div>
                          
                        </div>
                    </div>
                </div>
                <div className="shapes">
                    <p className="position-head">Shape</p>
                    <div className="shapes-boxes">
                        <div className="opacity-box">
                            <div className="position-box">
                                <div className="rectangle"></div>
                               
                            </div>
                            <p>Rectangle</p>
                        </div>
                        <div className="opacity-box">
                            <div className="position-box">
                                <div className="pill"></div>
                               
                            </div>
                            <p>Pill</p>
                        </div>
                        <div className="opacity-box">
                            <div className="position-box">
                                <div className="circle"></div>
                                
                            </div>
                            <p>Circle</p>
                        </div>
                        <div className="opacity-box">
                            <div className="position-box">
                                <div className="rectangle"></div>
                                
                            </div>
                            <p>Triangle</p>
                        </div>
                    </div>
                </div>
                <div className="shape-colors">
                    <p className="position-head">Shape Color</p>
                    <p className="sub-text">Select a color for the shape of your overlay that will be applied to every image.</p>
                    <div className="shapes-boxes">
                        <div className="shape-color circle-1"></div>
                        <div className="shape-color circle-2"></div>
                        <div className="shape-color circle-3"></div>
                        <div className="shape-color circle-4"></div>
                        <div className="shape-color circle-5"></div>
                        <div className="shape-color circle-6"></div>
                    </div>
                </div>
                <div className="shape-colors">
                    <p className="position-head">Text Color</p>
                    <p className="sub-text">Select a color for the text of your overlay that will be applied to every image.</p>
                    <div className="shapes-boxes">
                        <div className="shape-color circle-1" onClick={()=> {handleTextColor({hex: "#FFF"})}}></div>
                        <div className="shape-color circle-2" onClick={() =>{handleTextColor({hex: "#121212"})}}></div>
                        <div className="shape-color circle-6" onClick={()=>{setTextShow(!textShow)}}></div>
                        <div className="chrome">
                            {textShow && (<div ref={dropdownRef}><ChromePicker color={textColor} onChangeComplete={handleTextColor} /></div>)}
                        </div>
                    </div>
                </div>
                <div className="shape-colors">
                    <p className="position-head">Text</p>
                    <p className="sub-text">Select</p>
                    <div className="text-select" onClick={handleshowfont}>
                       <p>{font}</p>
                       <div>
                            <FiChevronDown/>
                        </div>
                    </div>
                    {showfont && (
                        <div className='countries' ref={dropdownRef}>
                            <p onClick={()=>{handlefont('Poppins'); handleshowfont()}}>Poppins</p>
                            <p onClick={()=>{handlefont('Inter'); handleshowfont()}}>Inter</p>
                            <p onClick={()=>{handlefont('San Serif'); handleshowfont()}}>San Serif</p>
                            <p onClick={()=>{handlefont('Monospace'); handleshowfont()}}>Monospace</p>
                            <p onClick={()=>{handlefont('Calibri'); handleshowfont()}}>Calibri</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default Business;