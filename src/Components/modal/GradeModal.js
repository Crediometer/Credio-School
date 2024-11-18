import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { addGrade } from "../../Redux/Students/Grade/GradeAction";
import { connect } from "react-redux";
import loader from "../../Assets/animations/loading.json"
import LottieAnimation from "../../Lotties";
const GradeModal = ({togglemodal, addGrade, loading, data, error,getGrade}) => {
    const [grade, setGrade] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(Date.now());
    const [showerror, setshowerror] = useState(false)
    const [showsuccess, setshowsuccess] = useState(false)
    const [formattedAmount, setFormattedAmount] = useState("")
    const [postState, setPostState] = useState({})
    const formatAmount = (input) => {
        // Add commas as thousand separators
        if (typeof input !== 'string') {
            input = String(input); // Convert to string if it's not
        }
        return input?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const handleGrade = (e) =>{
        const value = e.target.value
        setGrade(value)
        setPostState({ ...postState, ...{gradeName: grade} });
    }
    const handleAmount = (e) =>{
        const value = e.target.value
        const numericValue = value.replace(/\D/g, ''); 
        setAmount(parseInt(value))

        const formattedValue = formatAmount(numericValue);

        setFormattedAmount(formattedValue)
        setPostState({ ...postState, ...{amount} });
    }
    const handleDate = (e) =>{
        const value = e.target.value
        setDate(parseInt(value))
        setPostState({ ...postState, ...{maxTenor: date} });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setshowerror(false)
        setshowsuccess(false)
        try{
            await addGrade(postState, ()=>{ 
                getGrade()
                setshowsuccess(true)
                setGrade("")
                setAmount("")
                setDate("")
            }, ()=>{ 
                setshowerror(true)
            });
        }catch(error){
        }
    };

    return ( 
        <div className="modal-background">
            <div className="modalssss">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <div className="onetime-modal">
                    <p className="create-payment">Add Grade</p>
                    <form onSubmit={handleSubmit}>
                        {showerror && (
                            <div className="error-box">
                                <p>{error.message}</p>
                            </div>
                        )}
                        {showsuccess && (
                            <div className="success-box">
                                <p>Grade Created Successfully</p>
                            </div>
                        )}
                        <div className="form-1">
                            <label>Enter Grade Name</label>
                            <div className="input-search-name">
                                <input 
                                    type="text"
                                    value={grade}
                                    onBlur={handleGrade}
                                    onChange={handleGrade}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="form-1">
                            <label>Enter Amount</label>
                            <div className="input-search-name">
                                <input 
                                    type="text"
                                    value={formattedAmount}
                                    onBlur={handleAmount}
                                    onChange={handleAmount}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="form-1">
                            <label>Enter Maximum Repayment Date</label>
                            <div className="input-search-name">
                                <input 
                                    type="date"
                                    // value={date}
                                    onBlur={handleDate}
                                    onChange={handleDate}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="grade-button">
                            {/* <button className="grade-cancle">Cancle</button> */}
                            <button className="grade-save" onClick={handleSubmit}>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Save"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        error:state?.addGrade?.error,
        loading: state?.addGrade?.loading,
        data: state?.addGrade?.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addGrade: (postState, history, setErrorHandler) => {
            dispatch(addGrade(postState, history, setErrorHandler));
        },
    }
}
 
 
export default connect(mapStateToProps, mapDispatchToProps)(GradeModal);