import { useEffect, useState } from 'react';
import Account from './Account';
import './Settings.css';
import Sms from './Sms';
import Topup from './Topup';
import {connect} from 'react-redux'
import { fetchprofile } from '../../Redux/Profile/ProfileAction';
import LottieAnimation from "../../Lotties"
import preloader from "../../Assets/animations/preloader.json"
// import Business from './Business';
// import Receipt from './Receipt';
const Settings = ({loading, error, getprofile, fetchprofile}) => {


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
        fetchprofile()
    },[])
    return ( 
        <>
            {loading ? (
                <div className="preloader">
                     <LottieAnimation data={preloader}/>
                </div>
             ):(
                <div className="settings">
                    <div className="settings-nav">
                        <nav>
                            <li onClick={handleAccount} className={show === 1 ? `nav-active nav-set`: 'nav-set'}>Profile</li>
                            {/* <li onClick={handleBusiness} className={show === 2 ? `nav-active nav-set`: 'nav-set'}>SMS</li>
                            <li onClick={handleReceipt} className={show === 3 ? `nav-active nav-set`: 'nav-set'}>Top up</li> */}
                        </nav>
                    </div>
                    <div className="settings-body">
                    { (show === 1) && <Account getprofile={getprofile}/>}
                    { (show === 2) && <Sms/>} 
                    { (show === 3) && <Topup/>} 
                    </div>
                </div>
            )}
        </>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.profile?.error,
        loading: state?.profile?.loading,
        getprofile: state?.profile?.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchprofile: () => dispatch(fetchprofile()),
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Settings);