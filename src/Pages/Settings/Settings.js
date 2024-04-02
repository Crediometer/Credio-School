import { useEffect, useState } from 'react';
import Account from './Account';
import './Settings.css';
import Business from './Business';
import Receipt from './Receipt';
const Settings = () => {
    const [show, setShow] = useState(1);
    const handleAccount = ()=>{
        setShow(1)
    }
    const handleBusiness = ()=>{
        setShow(2)
    }
    const handleReceipt = ()=>{
        setShow(3)
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="settings">
            <div className="settings-nav">
                <nav>
                    <li onClick={handleAccount} className={show === 1 ? `nav-active nav-set`: 'nav-set'}>Account</li>
                    <li onClick={handleBusiness} className={show === 2 ? `nav-active nav-set`: 'nav-set'}>Business</li>
                    <li onClick={handleReceipt} className={show === 3 ? `nav-active nav-set`: 'nav-set'}>Receipt</li>
                </nav>
            </div>
            <div className="settings-body">
            { (show === 1) && <Account/>}
            { (show === 2) && <Business/>} 
            { (show === 3) && <Receipt/>} 
            </div>
        </div>
    );
}
 
export default Settings;