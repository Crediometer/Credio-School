import { FaSearch } from "react-icons/fa";
import master  from '../../Assets/Image/master.png'
const Payment = () => {
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
                                <select type="text">
                                    <optgroup>
                                        <option>Week</option>
                                        <option>Day</option>
                                        <option>Month</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="form-1">
                            <label>Enter Amount<span>*</span></label>
                            <div className="input-search-name">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="form-1">
                            <label>Start Date<span>*</span></label>
                            <div className="input-search-name">
                                <input type="date"></input>
                
                            </div>
                        </div>
                        <div className="form-1">
                            <label>End Date<span>*</span></label>
                            <div className="input-search-name">
                                <input type="date"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="save-con">
                <button>Continue</button>
            </div>
        </div>
    );
}
 
export default Payment;