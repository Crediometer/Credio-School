import { FaSearch } from "react-icons/fa";
import "./Invoice.css"
const Invoice = () => {
    return ( 
        <div className="invoice">
            <div className="invoice-top">
                <h4>Invoice</h4>
                <div className="invoice-list">
                    <p>Invoices</p>
                    <p className="active-p">Recurring</p>
                </div>
            </div>
            <div className="invoice-body">
                <div className="invoice-payment">
                    <h4 className="form-head">Payment</h4>
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
                        <div className="form-1">
                            <label>Repeated</label>
                            <div className="input-search-name">
                                <input type="text"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="save-con">
                <button>Save</button>
            </div>
        </div>
    );
}
 
export default Invoice;