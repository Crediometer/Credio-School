import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import wrong from '../../assets/Errorr.json'
import { Link } from 'react-router-dom';
const Errormodal = ({error, togglemodal, link}) => {
    return ( 
        <div className="modal-background">
            <div className="modalss">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <div className="onetime-modal">
                    <div className="animation">
                        <LottieAnimation data={wrong}/>
                    </div>
                    <p className="create-payment">{error}</p>
                    <div className="signup-button">
                        <Link to={link}><button class="btn btn-primary shadow-2 mb-4 submit-button" onClick={togglemodal}>Ok</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Errormodal;