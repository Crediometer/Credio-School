import { useState } from "react";
import ReceiptCard from "../../Components/Card/ReceiptCard.js/Receipt";
import ReceiptCard2 from "../../Components/Card/ReceiptCard.js/Receipt2";
import ReceiptCard3 from "../../Components/Card/ReceiptCard.js/Receipt3";
import './Receipt.css'
const Receipt = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };
    const renderButton = (buttonId, buttonText) => {
        const isSelected = selectedButton === buttonId;
    
        return (
          <button
            onClick={() => handleButtonClick(buttonId)}
            className={isSelected ? 'selected' : 'not-select'}
          >
            {isSelected ? 'Selected' : buttonText}
          </button>
        );
    };
    return ( 
        <div className="receipt">
            <ReceiptCard render={renderButton}/>
            <ReceiptCard2 render={renderButton}/>
            <ReceiptCard3 render={renderButton}/>
        </div>
    );
}
 
export default Receipt;