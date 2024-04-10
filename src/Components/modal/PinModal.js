import "./Modal.css"
import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
const PinModal = ({togglemodal2}) => {
    const [pin, setPin] = useState("");
    const atmpin = useRef(null);
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
    return ( 
        <div className="modal-background">
            <div className="modalss modalssss">
                <div className='modalClose' onClick={togglemodal2}>
                    <FaTimes/>
                </div>
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
                                <button onClick={togglemodal2}>Continue</button>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}
 
export default PinModal;