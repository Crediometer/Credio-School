import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import PinModal from './PinModal';
import { useState } from 'react';
import { startTrade } from '../../Redux/Card/CardScript';
import loader from "../../Assets/animations/loading.json"
const AccountModal = ({error, togglemodal, link,doTrade, cardData,postState, loading, setpostState, unitamount}) => {
    const [accountType, setAccounttype] = useState()
    const [newstate, setNewState] = useState({})
    const [show2, setShow2] = useState(false)
    const togglemodal2 = (e)=>{
        e.preventDefault();
        setShow2(!show2)
    }
    const handleAccount=(e)=>{
        const value = e.target.value
        setAccounttype(value);
        const newvalue = parseInt(value, 10)
        setpostState({ ...postState, ...{accountType: newvalue} }); 
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            doTrade(unitamount)
            // if(!cardData.connected){

            // }else{

            // }
        }catch{

        }
    }
    return ( 
        <div className="modal-background">
            <div className="modalss modalssss">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                    <form>
                        <div className="form-1 modal-form">
                            <label>Account Type<span>*</span></label>
                            <div className="select-field">
                                <select type="text" required onChange={handleAccount} onBlur={handleAccount}>
                                    <optgroup>
                                        <option value={0}>Universal Account</option>
                                        <option value={1}>Savings Account</option>
                                        <option value={2}>Current Account</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="save-con save-con-2">
                            <button onClick={handleSubmit}>{cardData?.requestDisplay
                             ? (
                                <>
                                    <LottieAnimation data={loader}/>
                                    "Scanning your Card.."
                                </>
                            ) 
                             : "Continue"}</button>
                        </div>
                    </form>
                {cardData?.pinRequest  && (<PinModal togglemodal2={togglemodal2} postState={postState}  setpostState={setpostState}/>)}
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    console.log(state)
    return {
      cardData: state.card,
      loading: state.deposit.loading,
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
        doTrade: (postState) => {
            console.log("got here ....... . ... ");
            dispatch(startTrade(postState));
        },
      
    };
}; 
export default connect(mapStoreToProps, mapDispatchToProps)(AccountModal);