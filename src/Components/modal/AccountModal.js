import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import PinModal from './PinModal';
import { useState } from 'react';
import { startTrade } from '../../Redux/Card/CardScript';
const AccountModal = ({error, togglemodal, link,doTrade, cardData,postState, loading}) => {
    const [accountType, setAccounttype] = useState()
    const [show2, setShow2] = useState(false)
    const togglemodal2 = (e)=>{
        e.preventDefault();
        setShow2(!show2)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            doTrade(100)
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
                                <select type="text" required>
                                    <optgroup>
                                        <option>Universal Account</option>
                                        <option>Savings Account</option>
                                        <option>Current Acount</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="save-con">
                            <button onClick={handleSubmit}>{cardData?.requestDisplay ? "Scanning your Card......." : "Continue"}</button>
                        </div>
                    </form>
                {cardData?.pinRequest  && (<PinModal togglemodal2={togglemodal2} postState={postState}/>)}
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