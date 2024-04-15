import "./Modal.css"
import { FaTimes } from 'react-icons/fa';
import {connect} from 'react-redux'
import LottieAnimation from '../../Lotties';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { sendPIN } from "../../Redux/Card/CardScript";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { depositData } from "../../Redux/Deposit/DepositAction";
import ReceiptModal from "./ReceiptModal";
import LoadingModal from "./LoadingModal";
import store from "../../Redux/Store";
import { SUCCESS_TRANS } from "../../Redux/Card/CardType";
const PinModal = ({togglemodal2,sendPin, cardData, postState, Deposit, setpostState, loading, data, setShow1}) => {
    const [pin, setPin] = useState("");
    const [showPin, setShowPin] = useState(true);
    const [success,  setSuccess] = useState(false)
    const togglemodal = ()=>{
        setSuccess(!success)
        setShow1(false)
        store.dispatch({
            type: SUCCESS_TRANS
        })
        window.location.href = "https://credio-school.netlify.app/home/newstudent";
    }
    const atmpin = useRef(null);
    console.log(postState)
    useEffect(()=>{
    if(pin.length === 1){
        atmpin1.current.focus();
    }
    }, [pin.length]);
    const onChangepin1 = (e) => {
        setPin(e.target.value)
    }
    const [pin1, setPin1] = useState("");
    const atmpin1 = useRef(null);
    useEffect(()=>{
        if(pin1.length === 1){
            atmpin2.current.focus();
        }
    }, [pin1.length]);
    const onChangepin2 = (e) => {
        setPin1(e.target.value)
    }
    const [pin2, setPin2] = useState("");
    const atmpin2 = useRef(null);
    useEffect(()=>{
        if(pin2.length === 1){
            atmpin3.current.focus();
        }
    }, [pin2.length]);
    const onChangepin3 = (e) => {
        setPin2(e.target.value)
    }
    const [pin3, setPin3] = useState("");
    const atmpin3 = useRef(null);
    const onChangepin4 = (e) => {
        setPin3(e.target.value)
    }
    const handlePin = () => {
        // e.preventDefault();
        if (pin && pin1 && pin2 && pin3) {
          // send pin to redux
          sendPin(`${pin}${pin1}${pin2}${pin3}`);
        }
    };
    useEffect(() => {
        if (cardData && cardData.tlv) {
            Deposit(
                { ...postState, ...{tlv: cardData.tlv} },
                () => {
                    setSuccess(true)
                    setpostState({})
                    
                    // On Success
                },
                () => {
                    // On Error
                }
            );
        }
    }, [cardData.tlv]);

    // useEffect(()=>{
    //     if(cardData.tlv){
    //         setpostState({ ...postState, ...{tlv:cardData?.tlv}}); 
    //         Deposit(
    //             {postState}, ()=>{ 
    //                 setSuccess(true)
    //             // history(`/otp`);
    //             // dispatch(addFormData(formData));
    //             // setPending(true);
    //         },  ()=>{ 
    //             // setshowerror(true)
    //             // setPending(false);
    //         })
    //     }else{

    //     }

    // }, [cardData?.tlv])
    return ( 
        <div className="modal-background">
                
            <div className="modalss modalssss">
                <div className='modalClose' onClick={togglemodal2}>
                    <FaTimes/>
                </div>
                {cardData?.requestDisplay && (
                    <div className="alert-box">
                        <Alert variant="filled" severity="info">
                            {cardData?.requestDisplayMessage}
                        </Alert>
                    </div>
                )}
                {/* <div className="onetime-modal"> */}
                    <div className="cardpin-body">
                        <div className="cardpin-body-inner">
                            <p className="enter-pin">Please Enter Your Card Pin</p>
                            <div className="field-container">
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                            type="text"
                                            maxlength= "1"
                                            value={pin}
                                            onChange={onChangepin1}
                                            ref={atmpin}
                                            autoFocus
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                            type="text"
                                            maxlength= "1"
                                            value={pin1}
                                            onChange={onChangepin2}
                                            ref={atmpin1}
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                            type="text"
                                            maxlength= "1"
                                            value={pin2}
                                            onChange={onChangepin3}
                                            ref={atmpin2}
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                            type="text"
                                            maxlength= "1"
                                            value={pin3}
                                            onChange={onChangepin4}
                                            ref={atmpin3}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="save-con">
                                <button onClick={() => handlePin()}>Continue</button>
                            </div>
                        </div>
                        {loading && (<LoadingModal/>)}
                        {success && (<ReceiptModal data={data} togglemodal={togglemodal}/>)}
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}

const mapStoreToProps = (state) => {
    console.log(state)
    return {
        cardData: state.card,
        loading: state.deposit.loading,
        data: state.deposit.deposit,
        error: state.deposit.error
    };
};

const mapDispatchToProps = (dispatch) => {
return {
    sendPin: (pin) => {
        console.log("got here ....... . ... ");
        dispatch(sendPIN(pin));
    },
    Deposit: (postdata, history, error) => {
        dispatch(depositData(postdata, history, error));
    },
};
};

  
export default connect(mapStoreToProps, mapDispatchToProps)(PinModal);