import { FaSearch } from "react-icons/fa";
import master  from '../../Assets/Image/master.png'
import {connect} from 'react-redux'
import { useEffect, useState } from "react";
import AccountModal from "../../Components/modal/AccountModal";
import { buttonScan } from "../../Redux/Card/CardScript";
const NewStudent = ({buttonScan}) => {
    const [show1, setShow1] = useState(false)
    const [startDate, setStartDate] = useState(getCurrentDate());
    const [endDate, setEndDate] = useState(getCurrentDate());
    const [totalAmount, setTotalAmount] = useState('');
    const [amountPerUnit, setAmountPerUnit] = useState('');
    const [repeatEvery, setRepeatEvery] = useState('');

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
    useEffect(()=>{
        buttonScan()
    },[])
    return ( 
        <div className="payment">
            <div className="invoice-body">
                <div className="invoice-payment">
                    <h4 className="form-head">Student details</h4>
                    <form action="" className="payment-form">
                        <div className="form-1">
                            <label>Student Name<span>*</span></label>
                            <div className="input-search-name">
                                <input type="text"></input>
                                <FaSearch/>
                            </div>
                        </div>

                        <div className="form-1">
                            <label>Parent/Guardian Phone Number Email Adress<span>*</span></label>
                            <div className="input-search-name">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="form-2">
                            <div className="form-1">
                                <label>Student Grade<span>*</span></label>
                                <div className="input-search-name">
                                    <input type="text"></input>
                                    <FaSearch/>
                                </div>
                            </div>
                            <div className="form-1">
                                <label>Parent/Guardian Phone Number<span>*</span></label>
                                <div className="input-search-name">
                                    <input type="text"></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-1">
                            <label>Terms<span>*</span></label>
                            <div className="select-field">
                                <select type="text">
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
                                <input type="text"></input>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="invoice-period">
                    <h4 className="form-head">Period</h4>
                    <form action="" className="payment-form">
                        <div className="form-1">
                            <label>Repeat Every<span>*</span></label>
                            <div className="select-field">
                                <select type="text" onChange={handlerepeat} onBlur={handlerepeat}>
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
                                <input type="text" onChange={handletotal} onBlur={handletotal}></input>
                            </div>
                        </div>
                        <div className="form-1">
                            <label>Enter Amount per unit<span>*</span></label>
                            <div className="input-search-name">
                                <input type="text" onChange={handleunit} onBlur={handleunit}></input>
                            </div>
                        </div>
                        <div className="form-1">
                            <label>Start Date<span>*</span></label>
                            <div className="input-search-name">
                                <input type="date" value={startDate} disabled></input>
                
                            </div>
                        </div>
                        <div className="form-1">
                            <label>End Date<span>*</span></label>
                            <div className="input-search-name">
                                <input type="date" value={endDate} disabled ></input>
                            </div>
                        </div>
                    </form>
                </div>
               
            </div>
            <div className="save-con">
                <button
                    onClick={togglemodal}
                >Connect to credio Reader</button>
            </div>
            {show1 && (<AccountModal togglemodal={togglemodal}/>)}
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