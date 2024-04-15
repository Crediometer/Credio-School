import { FaSearch } from "react-icons/fa";
import master  from '../../Assets/Image/master.png'
import {connect} from 'react-redux'
import { useEffect, useState } from "react";
import AccountModal from "../../Components/modal/AccountModal";
import { DisConnect, buttonScan, getQPosInfo, init } from "../../Redux/Card/CardScript";
import Errormodal from "../../Components/modal/Errormodal";
import { keyData } from "../../Redux/Deposit/DepositAction";
import LoadingModal from "../../Components/modal/LoadingModal";
import ReceiptModal from "../../Components/modal/ReceiptModal";
const NewStudent = ({buttonScan, cardData, getprofile, disconnect, info, keydata, keyinfo, keyloading}) => {
    const [show1, setShow1] = useState(false)
    const [showerror,  setShowError] = useState(false)
    const [startDate, setStartDate] = useState(getCurrentDate());
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [grade, setGrade] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [term, setTerm] = useState('')
    const [message, setMessage] = useState("")
    const [endDate, setEndDate] = useState(getCurrentDate());
    const [totalAmount, setTotalAmount] = useState('');
    const [amountPerUnit, setAmountPerUnit] = useState('');
    const [repeatEvery, setRepeatEvery] = useState('');
    const [postState, setpostState] = useState({});
    const [keyState, setKeyState] = useState({})
    const handlerepeat =(e)=>{
        const value = e.target.value
        setRepeatEvery(value)
        const newvalue = parseInt(value)
        console.log(newvalue)
        setpostState({ ...postState, ...{repitationDays: newvalue} });
    }
    const handletotal =(e)=>{
        const value = e.target.value
        setTotalAmount(value)
        const newvalue = parseFloat(value)
        setpostState({ ...postState, ...{totalAmount: newvalue} });
    }
    const handleunit =(e)=>{
        const value = e.target.value
        setAmountPerUnit(value)
        // setpostState({ ...postState, ...{unit: amountPerUnit} }); 
    }
    const handleSchoolName = (e)=>{
        const value = e.target.value
        setName(value)
        setpostState({ ...postState, ...{studentName: name} }); 
    }
    const handleEmail = (e)=>{
        const value = e.target.value
        setEmail(value)
        setpostState({ ...postState, ...{parentEmail: email} }); 
    }
    const handleStudentGrade = (e)=>{
        const value = e.target.value
        setGrade(value)
        setpostState({ ...postState, ...{grade: grade} }); 
    }
    const handlePhoneNumber = (e)=>{
        const value = e.target.value
        let formattedNumber = value.trim().replace(/\D/g, ''); // Remove non-numeric characters

        // Check if the first digit is '0' and remove it, then prepend '+234'
        if (formattedNumber.charAt(0) === '0') {
            formattedNumber = '+234' + formattedNumber.slice(1);
        }
        setPhoneNumber(formattedNumber)
        setpostState({ ...postState, ...{parentPhoneNumber: phoneNumber} }); 
    }
    const handleTerm = (e)=>{
        const value = e.target.value
        setTerm(value)
        setpostState({ ...postState, ...{term: term} }); 
    }
    const handleMessage = (e)=>{
        const value = e.target.value
        setMessage(value)
        setpostState({ ...postState, ...{message: message} }); 
    }
    useEffect(() => {
        if (totalAmount && amountPerUnit && repeatEvery) {
            const days = {
                3: 5,
                7: 7,
                15: 15,
                30: 30
            };

            const repeatDays = days[repeatEvery];
            const units = parseInt(totalAmount) / parseInt(amountPerUnit);
            const endDateValue = new Date(startDate);
            endDateValue.setDate(endDateValue.getDate() + (units * repeatDays));
            setEndDate(formatDate(endDateValue));
            // setpostState({ ...postState, ...{startdate: startDate} });
            // setpostState({ ...postState, ...{endDate: endDate} });  
        }
    }, [totalAmount, amountPerUnit, repeatEvery, startDate]);
    function getCurrentDate() {
        const today = new Date();
        return formatDate(today);
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    const togglemodal = ()=>{
        setShow1(!show1)
    }
    const togglemodal2 = ()=>{
        setShowError(!showerror)
    }

    
    const connectreader =  (e)=>{
        e.preventDefault();
        if (!cardData.connected) {
            init();
            buttonScan();
        } else {
            togglemodal()
        }
    }
  
    useEffect(() => {
        // Check if cardData exists and has the required properties
        if (cardData && cardData.posinfo && cardData.posinfo.name && getprofile && getprofile.schoolReaders) {
            // setpostState({ ...postState, ...{
            //     tlv:cardData?.tlv,
            // } }); 
            // Compare the last 10 characters of name properties
            for (let i = 0; i < getprofile.schoolReaders.length; i++) {
                // Check if the valueToSearch is in the current array
                if (getprofile.schoolReaders[i].uuid.slice(-10).includes(cardData.posinfo.name.slice(-10))) {
                    // If found, save the content of the array in state and exit the loop
                   
                    console.log("it does match");
                    console.log(keyState);
                    keydata(
                        {serialNo: getprofile.schoolReaders[i].uuid, 
                            terminalId: getprofile.schoolReaders[i].terminalId}
                        ,
                        () => {
                            setShow1(true);
                        },
                        () => {}
                    );
                    return;
                }else{
                    console.log("it does not match");
                    disconnect();
                    setShowError(true);
                }
            }
        }
    }, [cardData.posinfo]);
    useEffect(()=>{
        setpostState({ ...postState,
            tlv:cardData?.tlv,
            key: keyinfo?.pin_key,
            merchantId: keyinfo?.merchantId,
            merchantCategoryCode: keyinfo?.merchantCategoryCode,
            terminalId:keyinfo?.terminalid,
            merchantName: keyinfo?.merchantName
        }); 
    },[keyinfo, cardData])
    return ( 
        <div className="payment">
            <form onSubmit={connectreader}>
                <div className="invoice-body">
                    <div className="invoice-payment">
                        <h4 className="form-head">Student details</h4>
                        <div className="payment-form">
                            <div className="form-1">
                                <label>Student Name<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        onChange={handleSchoolName}
                                        onBlurCapture={handleSchoolName}
                                        required
                                    ></input>
                                </div>
                            </div>

                            <div className="form-1">
                                <label>Parent/Guardian Phone Number Email Adress<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="email"
                                        onChange={handleEmail}
                                        onBlur={handleEmail}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="form-2 form-2-mobile">
                                <div className="form-1">
                                    <label>Student Grade<span>*</span></label>
                                    <div className="input-search-name">
                                        <input 
                                            type="text"
                                            required
                                            onChange={handleStudentGrade}
                                            onBlur={handleStudentGrade}
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-1">
                                    <label>Parent/Guardian Phone Number<span>*</span></label>
                                    <div className="input-search-name">
                                        <input 
                                            type="text"
                                            required
                                            onChange={handlePhoneNumber}
                                            onBlur={handlePhoneNumber}
                                            maxLength={11}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-1">
                                <label>Terms<span>*</span></label>
                                <div className="select-field">
                                    <select type="text" 
                                        required
                                        onChange={handleTerm}
                                        onBlur={handleTerm}
                                    >
                                        <optgroup>
                                            <option value={1}>Select Term</option>
                                            <option value={1}>First Term</option>
                                            <option value={2}>Second Term</option>
                                            <option value={3}>Third Term</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                            <div className="form-1">
                                <label>Message</label>
                                <div className="input-search-name">
                                    <input type="text"
                                        onChange={handleMessage}
                                        onBlur={handleMessage}
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-period">
                        <h4 className="form-head">Period</h4>
                        <div className="payment-form">
                            <div className="form-1">
                                <label>Repeat Every<span>*</span></label>
                                <div className="select-field">
                                    <select type="text" required onChange={handlerepeat} onBlur={handlerepeat}>
                                        <optgroup>
                                            <option>--Select Option--</option>
                                            <option value={3}>3 Days</option>
                                            <option value={7}>7 Days</option>
                                            <option value={15}>BiWeekly</option>
                                            <option value={30}>Monthly</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                            <div className="form-1">
                                <label>Enter Total Amount<span>*</span></label>
                                <div className="input-search-name">
                                    <input type="text" required onChange={handletotal} onBlur={handletotal}></input>
                                </div>
                            </div>
                            <div className="form-1">
                                <label>Enter Amount per unit<span>*</span></label>
                                <div className="input-search-name">
                                    <input type="text" required onChange={handleunit} onBlur={handleunit}></input>
                                </div>
                            </div>
                            <div className="form-1">
                                <label>Start Date<span>*</span></label>
                                <div className="input-search-name">
                                    <input type="date" required value={startDate} disabled></input>
                    
                                </div>
                            </div>
                            <div className="form-1">
                                <label>End Date<span>*</span></label>
                                <div className="input-search-name">
                                    <input type="date" required value={endDate} disabled ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="save-con">
                    <button>Connect to Credio Reader</button>
                </div>
            </form>
            {/* <ReceiptModal/> */}
            {showerror && (<Errormodal togglemodal={togglemodal2}/>)}
            {keyloading && (<LoadingModal/>)}
            {(show1) && (<AccountModal togglemodal={togglemodal} unitamount={amountPerUnit} postState={postState} setpostState={setpostState} setShow1={setShow1}/>)}
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {
      cardData: state.card,
      getprofile: state.profile.data,
      keyloading: state.key.loading,
      keyinfo: state.key.deposit.data
    };  
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      buttonScan: () => {
        dispatch(buttonScan());
      },
      disconnect: () => {
        dispatch(DisConnect());
      },
      info: () => {
        dispatch(getQPosInfo())
      },
      keydata: (poststate, loading, error)=>{
        dispatch(keyData(poststate, loading, error))
      }
    };
  };
  
export default connect(mapStoreToProps, mapDispatchToProps)(NewStudent);