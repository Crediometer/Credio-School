import { useState } from "react";
import "./Parent.css"
const Parent  = () => {
    const [number, setNumber] = useState(1)
    return ( 
        <div className="parent">
            <div className="parent-form">
                <div className="parent-form-top">
                    <h2>Welcome Parents/Guidiances</h2>
                    <p>Please fill in your chidren details, all fields are compulsory.</p>
                </div>
                <div className="parent-form-field">
                    <form>
                        <div className="form-2 form-2-mobile">
                            <div className="form-1">
                                <label>Parent/Guardian Email Address<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="email"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="form-1">
                                <label>Parent/Guardian Phone Number<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        required
                                        maxLength={11}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-1">
                            <label>How many children do you want to make payment for<span>*</span></label>
                            <div className="input-search-name">
                                <input 
                                    type="number"   
                                    onChange={(e) => setNumber(parseInt(e.target.value, 10))}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="invoice-payment parent-form-payment">
                            <h4 className="form-head">Student details</h4>
                            <div className="payment-form">
                                <div className="form-2 form-2-mobile">
                                    <div className="form-1">
                                        <label>Student Name<span>*</span></label>
                                        <div className="input-search-name">
                                            <input 
                                                type="text"
                                                required
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="form-1">
                                        <label>Student Grade<span>*</span></label>
                                        <div className="input-search-name">
                                            <input 
                                                type="text"
                                                required
                                            ></input>
                                        </div>
                                    </div>
                
                                </div>
                                <div className="form-1">
                                    <label>Terms<span>*</span></label>
                                    <div className="select-field">
                                        <select type="text" 
                                            required
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
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="parent-form-button">
                            <button>Submit</button>
                        </div>
                    </form>
                
                </div>
                
            </div>
        </div>
    );
}
 
export default Parent;