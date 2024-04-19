import "./Modal.css"
import { FaCheck, FaSadTear, FaSmile } from "react-icons/fa";
import LottieAnimation from "../../Lotties";
import loader from '../../Assets/animations/preloader.json'
import { Link } from "react-router-dom";
const LoadingModal = ({message}) => {
    return ( 
        <div className="successmodal">
            <div className="modal-background">
                <div className="modalss">
                    
                        <LottieAnimation data={loader}/>
                  
                   {/* <p className="create-payment">uploading</p>  */}
                </div>
            </div>
        </div>
    );
}
 
export default LoadingModal;