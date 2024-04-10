import { FaSearch } from "react-icons/fa";
import master  from '../../Assets/Image/master.png'
import {connect} from 'react-redux'
import { useEffect, useState } from "react";
import AccountModal from "../../Components/modal/AccountModal";
import { buttonScan, init } from "../../Redux/Card/CardScript";
const NewStudent = ({buttonScan, cardData}) => {
    const [show1, setShow1] = useState(false)
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
    const handlerepeat =(e)=>{
        const value = e.target.value
        setRepeatEvery(value)

    }
    const handletotal =(e)=>{
        const value = e.target.value
        setTotalAmount(value)
    }
    const handleunit =(e)=>{
        const value = e.target.value
        setAmountPerUnit(value)
        setpostState({ ...postState, ...{unit: amountPerUnit} }); 
    }
    const handleSchoolName = (e)=>{
        const value = e.target.value
        setName(value)
        setpostState({ ...postState, ...{name: name} }); 
    }
    const handleEmail = (e)=>{
        const value = e.target.value
        setEmail(value)
        setpostState({ ...postState, ...{email: email} }); 
    }
    const handleStudentGrade = (e)=>{
        const value = e.target.value
        setGrade(value)
        setpostState({ ...postState, ...{grade: grade} }); 
    }
    const handlePhoneNumber = (e)=>{
        const value = e.target.value
        setPhoneNumber(value)
        setpostState({ ...postState, ...{phoneNumber: phoneNumber} }); 
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
                '3 Days': 3,
                '7 Days': 7,
                'BiWeekly': 15,
                'Monthly': 30
            };

            const repeatDays = days[repeatEvery];
            const units = parseInt(totalAmount) / parseInt(amountPerUnit);
            const endDateValue = new Date(startDate);
            endDateValue.setDate(endDateValue.getDate() + (units * repeatDays));
            setEndDate(formatDate(endDateValue));
            setpostState({ ...postState, ...{startdate: startDate} });
            setpostState({ ...postState, ...{endDate: endDate} });  
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
    const connectreader = async (e)=>{
        e.preventDefault();
        if (!cardData.connected) {
            init();
            await buttonScan();
            // setShow1(true)
        } else {
            togglemodal()
        }
    }
    // useEffect(()=>{
    //     buttonScan()
    // },[])
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
                            <div className="form-2">
                                <div className="form-1">
                                    <label>Student Grade<span>*</span></label>
                                    <div className="input-search-name">
                                        <input 
                                            type="text"
                                            required
                                            onChange={handleStudentGrade}
                                            onBlur={handleStudentGrade}
                                        ></input>
                                        <FaSearch/>
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
                                            <option>First Term</option>
                                            <option>Second Term</option>
                                            <option>Third Term</option>
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
                                            <option value="3 Days">3 Days</option>
                                            <option value="7 Days">7 Days</option>
                                            <option value="BiWeekly">BiWeekly</option>
                                            <option value="Monthly">Monthly</option>
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
                    <button>Connect to credio Reader</button>
                </div>
            </form>
            {(cardData.connected) && (<AccountModal togglemodal={togglemodal} postState={postState}/>)}
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {
      cardData: state.card,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      buttonScan: () => {
        dispatch(buttonScan());
      },
    };
  };
  
export default connect(mapStoreToProps, mapDispatchToProps)(NewStudent);