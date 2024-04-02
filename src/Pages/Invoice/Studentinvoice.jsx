import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Studentinvoice = () => {
    const [progress, setProgress] = useState(50);

    return ( 
        <div className="student-invoice">
            <div className="student-invoice-top">
                <h4>Progress bar</h4>
                <Link to="/home/transaction">
                    <button>View all transactions</button>
                </Link>
            </div>
            <div className="invoice-progressbar">
                <div className="ngn-progressbar">
                    <p>NGN 0.00</p>
                    <p>NGN 200,000</p>
                </div>
                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{width: `${progress}%`}}>

                    </div>
                </div>
                <p className="progress-label" style={{width: `${progress}%`}}>12/24 (NGN 90,000)</p>
            </div>
            <div className="invoice-body">
                <div className="invoice-payment">
                    <h4 className="form-head">Payment</h4>
                    <form action="" className="payment-form invoice-form">
                        <div className="form-1 invoice-form">
                            <label>Student Name<span>*</span></label>
                            <div className="input-search-name">
                                <input 
                                    type="text"
                                    value="Adewale Temidayo"
                                ></input>
                            </div>
                        </div>
                        <div className="form-1 invoice-form">
                            <label>Parent/Guardian Phone Number Email Adress<span>*</span></label>
                            <div className="input-search-name">
                                <input 
                                    type="text"
                                    value="Adewaletemidayo@gmail.com"
                                ></input>
                            </div>
                        </div>
                        <div className="form-2">
                            <div className="form-1 invoice-form">
                                <label>Student Grade<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value="Grade 4"
                                    ></input>
                                </div>
                            </div>
                            <div className="form-1 invoice-form">
                                <label>Parent/Guardian Phone Number<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value="0977568655"
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-1 invoice-form">
                            <label>Terms<span>*</span></label>
                            <div className="input-search-name">
                                <input 
                                    type="text"
                                    value="First Term"
                                ></input>
                            </div>
                        </div>
                        <div className="form-1 invoice-form">
                            <label>Message</label>
                            <div className="input-search-name">
                                <textarea type="text"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="invoice-period">
                    <h4 className="form-head">Period</h4>
                    <form action="" className="payment-form">
                        <div className="form-1 invoice-form">
                            <label>Repeat Every<span>*</span></label>
                            <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value="Weekly"
                                    ></input>
                                </div>
                        </div>
                        <div className="form-1 invoice-form">
                            <label>Enter Amount<span>*</span></label>
                            <div className="input-search-name">
                                <input 
                                    type="text"
                                    value="NGN 90,000.00"
                                ></input>
                            </div>
                        </div>
                        <div className="form-1 invoice-form">
                            <label>Enter amount per unit<span>*</span></label>
                            <div className="input-search-name">
                                <input 
                                    type="text"
                                    value="NGN 3,000.00"
                                ></input>
                            </div>
                        </div>
                        <div className="form-1 invoice-form">
                            <label>Start Date<span>*</span></label>
                            <div className="input-search-name">
                                <input 
                                    type="date"
                                    value="02/03/2024"
                                ></input>
                
                            </div>
                        </div>
                        <div className="form-1 invoice-form">
                            <label>End Date<span>*</span></label>
                            <div className="input-search-name">
                                <input 
                                    type="date"
                                    value="02/03/2025"
                                ></input>
                            </div>
                        </div>
                        <div className="form-1 invoice-form">
                            <label>Repeated</label>
                            <div className="input-search-name">
                                <input 
                                    type="text"
                                    value="12"
                                ></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="save-con">
                <button className="share">Share</button>
                <button>Download PDF</button>
            </div> 
        </div>
    );
}
 
export default Studentinvoice;