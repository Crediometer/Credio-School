import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import wrong from '../../Assets/animations/SuccessTick.json'
import { Link } from 'react-router-dom';
const SuccessModal = ({error, togglemodal, message}) => {
    return ( 
        <div className="modal-background">
            <div className="modalssss">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <div className="onetime-modal">
                    <div className="loadinganimation">
                        <LottieAnimation data={wrong}/>
                    </div>
                    <p className="create-payment">{message}</p>
                    <div className="signup-button save-con">
                        <button class="btn btn-primary shadow-2 mb-4 start-button" onClick={togglemodal}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SuccessModal;