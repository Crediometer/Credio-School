import { FaSearch } from "react-icons/fa";
import "./Students.css"
import {connect} from 'react-redux'
import StudentTable from "../../Components/Tables/StuentTable2";
import { fetchsearchstudents, fetchstudents } from "../../Redux/Students/StudentsAction";
import { useEffect, useState } from "react";
import LottieAnimation from "../../Lotties"
import empty from '../../Assets/animations/Empty.json'
import preloader from "../../Assets/animations/preloader.json"
import { Link } from "react-router-dom";
const Students = ({loading, error, data, searchdata, searcherror, searchloading, fetchstudents, fetchsearchstudents}) => {
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    const [query, setQuery] = useState("all")
    useEffect(()=>{
        fetchstudents(page, size);
        fetchsearchstudents(page,size,query)
    }, [])
    return ( 
        <>
            {loading ? (
                    <div className="preloader">
                        <LottieAnimation data={preloader}/>
                    </div>
            ):(
                <div className="students">
                    <div className="students-top">
                        <Link to="/home/newstudent">
                            <button>
                                Create New Student Plan
                            </button>
                        </Link>
                    </div>
                    <div className="students-body">
                        <div className="students-table-top">
                            <div className="students-info">
                                <h4>All Student</h4>
                                <p>200 Active Students</p>
                            </div>
                            <div className="students-filter">
                                <div className="students-search">
                                    <FaSearch/>
                                    <input type="text" placeholder="search"></input>
                                </div>
                                <div className="students-search students-select">
                                    <p>Sort by:</p>
                                    <select>
                                        <optgroup>
                                            <option>Newest</option>
                                            <option>Oldest</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {(data?.students?.length === 0)?(
                            <div className="empty-animate">
                                <LottieAnimation data={empty}/>
                                <p>No Data Found</p>
                            </div>
                        ):(
                            <div className="student-table-body">
                                <StudentTable data={data}/>
                            </div>
                        )}
                        
                    </div>
                </div>
            )}
        </>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.student?.error,
        loading: state?.student?.loading,
        data: state?.student?.data,
        searcherror:state?.searchstudent?.error,
        searchloading: state?.searchstudent?.loading,
        searchdata: state?.searchstudent?.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchstudents: (page, size) => dispatch(fetchstudents(page, size)),
        fetchsearchstudents: (page, size, query) => dispatch(fetchsearchstudents(page, size,query)),
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Students);