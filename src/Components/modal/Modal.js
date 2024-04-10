import "./Modal.css"
import { FaCheck, FaSadTear, FaSmile } from "react-icons/fa";
// import LottieAnimation from "../../Lotties";
// import success from "../../Assets/SuccessTick.json"
import { Link } from "react-router-dom";
const Modal = (props) => {
    return ( 
        <div className="successmodal">
            <div className="modal-background">
                <div className="modalss">
                    <p className="create-payment">Coming Soon....</p> 
                    {/* <Link to={props.link}> */}
                    <div className="signup-button">
                        <button class="btn btn-primary shadow-2 mb-4" onClick={props.togglemodal}>Ok</button>   
                    </div>
                    {/* </Link>         */}
                </div>
            </div>
        </div>
    );
}
 
export default Modal;