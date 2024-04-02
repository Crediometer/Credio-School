import { FaSearch } from "react-icons/fa";
import "./Invoice.css"
import { useState } from "react";
import Payment from "./Payment";
import Studentinvoice from "./Studentinvoice";
const Invoice = () => {
    const [nav, setnav] = useState(1)
    const handleinvoice = (id)=>{
        setnav(id)
    }
    return ( 
        <div className="invoice">
            <div className="invoice-top">
                <h4>Invoice</h4>
                <div className="invoice-list">
                    <p onClick={()=>handleinvoice(1)} className={(nav===1)?"active-p": ""}>Invoices</p>
                    <p onClick={()=>handleinvoice(2)} className={(nav===2)?"active-p": ""}>Payment</p>
                </div>
            </div>
            {(nav===1) && (<Studentinvoice/>)}
            {(nav===2) && (<Payment/>)}
        </div>
    );
}
 
export default Invoice;