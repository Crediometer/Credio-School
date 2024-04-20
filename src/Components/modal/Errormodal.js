import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import wrong from '../../Assets/animations/Errorr.json'
import { Link } from 'react-router-dom';
const Errormodal = ({error, togglemodal, link}) => {
    return ( 
        <div className="modal-background">
            <div className="modalss">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <div className="onetime-modal">
                    
                        <LottieAnimation data={wrong}/>
                    
                    <p className="create-payment">This Card Reader is not Connected to Your Account</p>
                    <div className="signup-button save-con">
                        <button class="btn btn-primary shadow-2 mb-4 start-button" onClick={togglemodal}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Errormodal;