import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { editGrade } from "../../Redux/Students/Grade/GradeAction";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import { useNavigate } from "react-router-dom";

const EditGradeModal = ({togglemodal, data, editGrade,grade, gradedata, loading, error, setShow}) => {
    const history = useNavigate();
    const [amount, setAmount] = useState(gradedata.amount);
    const [date, setDate] = useState(gradedata.maxTenor);
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
        setPostState({ ...postState, ...{maxTenor: date, gradeName: gradedata.gradeName} });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setshowerror(false)
        try{
            await editGrade(postState, ()=>{ 
                grade()
                setshowsuccess(true)
                setShow(false)
            }, ()=>{ 
                setshowerror(true)
            }, gradedata.id);
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
                    <p className="create-payment">Edit Grade</p>
                    <form onSubmit={handleSubmit}>
                        {showerror && (
                            <div className="error-box">
                                <p>{error.message}</p>
                            </div>
                        )}
                        {showsuccess && (
                            <div className="success-box">
                                <p>Grade Updated Successfully</p>
                            </div>
                        )}
                        <div className="form-1">
                            <label>Enter Amount</label>
                            <div className="input-search-name">
                                <input 
                                    type="text"
                                    value={formattedAmount}
                                    defaultValue={amount}
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
                                    defaultValue={date}
                                    onBlur={handleDate}
                                    onChange={handleDate}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="grade-button">
                            <button className="grade-save">
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
        error:state?.editGrade?.error,
        loading: state?.editGrade?.loading,
        data: state?.editGrade?.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        editGrade: (postState, history, setErrorHandler, id) => {
            dispatch(editGrade(postState, history, setErrorHandler, id));
        },
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(EditGradeModal);