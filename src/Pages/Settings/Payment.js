import { connect } from "react-redux";
import { postPayment } from "../../Redux/Payment/PaymentAction";
import JSEncrypt from "jsencrypt";
import consts from "../Login/keys/const";
import { useState } from "react";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import SuccessModal from "../../Components/modal/SuccessModal";

const Payment = ({
    loading, 
    data,
    errors,
    postPayment
}) => {
    const [amount, setAmount]= useState("")
    const [password, setPassword] = useState("")
    const [postState, setPostState] = useState({});
    const [resetsuccess, setResetsuccess] = useState(false)
    const [showError, setshowError] = useState(false)
    const togglemodal = ()=>{
        setResetsuccess(false)
    }
    const handleAmount =(e)=>{
        const value = e.target.value
        setAmount(value)
        const newValue = parseInt(value)
        setPostState({ ...postState, ...{amount: newValue} })
    }
    const handlePassword = (e) =>{
        const value = e.target.value
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        setPassword(encrypted)
        setPostState({ ...postState, ...{password} })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setshowError(false)
        await postPayment(postState, ()=>{
            setResetsuccess(true)
            setAmount("")
            setPassword("")
        }, ()=>{ 
           setshowError(true)
        });
    }
    return ( 
        <div className="setting-payment">
            <div className="account-left-top">
                <div className="password-top">
                    <p className='password-head'>Make A Payment</p>
                </div>
                <div className="password-forms">
                    <p className='password-instruction'>Send Money to your Credio Account</p>
                    <form onSubmit={handleSubmit}>
                        {showError && (
                            <div className="error-box">
                                <p>{errors?.message}</p>
                            </div>
                        )}
                        <div className="password-form">
                            <label>Amount</label><br></br>
                            <input 
                                type='text' 
                                placeholder='Enter an Amount'
                                required
                                onChange={handleAmount}
                                onBlur={handleAmount}
                            ></input>
                        </div>
                        <div className="password-form">
                            <label>Password</label><br></br>
                            <input 
                                type='password' 
                                placeholder='XXXXXXXX'
                                required
                                onChange={handlePassword}
                                onBlur={handlePassword}
                            ></input>
                        </div>
                        <div className="password-save">
                            <button disabled={loading}>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Send"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {resetsuccess && (<SuccessModal message={data.message} togglemodal={togglemodal}/>)}
        </div>
    );
}
const mapStateToProps = (state) => {

    return {
        loading:state.payment.loading,
        data: state.payment.data,
        errors: state.payment.error,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        postPayment: (setting, history, error) => dispatch(postPayment(setting, history, error)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Payment);