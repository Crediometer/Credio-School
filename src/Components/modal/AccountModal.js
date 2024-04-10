import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import { Link } from 'react-router-dom';
import PinModal from './PinModal';
import { useState } from 'react';
const AccountModal = ({error, togglemodal, link}) => {
    const [show2, setShow2] = useState(false)
    const togglemodal2 = (e)=>{
        e.preventDefault();
        setShow2(!show2)
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
                                <select type="text">
                                    <optgroup>
                                        <option>Universal Account</option>
                                        <option>Savings Account</option>
                                        <option>Current Acount</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="save-con">
                            <button onClick={togglemodal2}>Continue</button>
                        </div>
                    </form>
                {show2 && (<PinModal togglemodal2={togglemodal2}/>)}
            </div>
        </div>
    );
}
 
export default AccountModal;