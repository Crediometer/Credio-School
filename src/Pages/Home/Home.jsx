import "./Home.css";
import Card from "../../Components/Card/Card";
import { PiStudent } from "react-icons/pi";
import { LuCreditCard } from "react-icons/lu";
import {connect} from 'react-redux'
import BasicTable from "../../Components/Tables/StudentTables";
import { fetchprofile } from "../../Redux/Profile/ProfileAction";
import { useEffect } from "react";
import LottieAnimation from "../../Lotties"
import empty from '../../Assets/animations/Empty.json'
import preloader from "../../Assets/animations/preloader.json"
import { fetchstudents } from "../../Redux/Students/StudentsAction";
import { Link } from "react-router-dom";
const Home = ({
    loading, 
    error, 
    getprofile, 
    fetchprofile,
    studentloading,
    studentdata,
    fetchstudents
}) => {
    useEffect(()=>{
        fetchprofile();
        fetchstudents()
    }, [])
    return ( 
        <>
            {loading || studentloading ? (
                <div className="preloader">
                     <LottieAnimation data={preloader}/>
                </div>
            ):(
            <div className="home">
                <div className="home-top">
                    <p>Overview</p>
                    {/* <select>
                        <optgroup>
                            <option>Today</option>
                            <option>Tomorrow</option>
                            <option>Next Month</option>
                        </optgroup>
                    </select> */}
                </div> 
                <div className="home-body">
                    <div className="home-card">
                        <div className="card-div">
                            <Card title="Students" numbers={getprofile.studentsCount} icons={<PiStudent/>} color="#E3F5FF"/>
                        </div>
                        <div className="card-div">
                            <Card title="Payments" numbers={`${getprofile.transactionsCount} NGN`} icons={<LuCreditCard/>} color="#E5ECF6"/>
                        </div>
                    </div>
                    <div className="home-tables">
                        <p>Students info</p>
                        {(studentdata?.students?.length === 0)?(
                            <div className="empty-animate">
                                <LottieAnimation data={empty}/>
                                <p>No Data Found</p>
                            </div>
                        ):(
                            <>
                               
                                <div className="tables">
                                    <BasicTable data={getprofile?.lastTenTransactions}/>
                                </div>
                            </>
                        )}
                       
                    </div>
                    <div className="button-con">
                        <Link to="/home/newstudent"><button className="create-button">Create a New Student Plan</button></Link>
                    </div>
                    
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
        getprofile: state?.profile?.data,
        studenterror:state?.student?.error,
        studentloading: state?.student?.loading,
        studentdata: state?.student?.data,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchprofile: () => dispatch(fetchprofile()),
        fetchstudents: (page, size) => dispatch(fetchstudents(page, size)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);