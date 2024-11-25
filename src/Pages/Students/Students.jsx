import { FaSearch } from "react-icons/fa";
import "./Students.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {connect} from 'react-redux'
import StudentTable from "../../Components/Tables/StuentTable2";
import { fetchsearchstudents, fetchstudents } from "../../Redux/Students/StudentsAction";
import { useEffect, useState } from "react";
import LottieAnimation from "../../Lotties"
import empty from '../../Assets/animations/Empty.json'
import preloader from "../../Assets/animations/preloader.json"
import { Link } from "react-router-dom";
const Students = ({loading, error, data, searchdata, searcherror, searchloading, fetchstudents, fetchsearchstudents}) => {
    const [pages, setPages] = useState(1)
    const [size, setSize] = useState(10)
    const [query, setQuery] = useState("")
    const [searchPerformed, setSearchPerformed] = useState(false);
    const handleChange = (event, value) => {
        setPages(value);
    };
    const handleSizeChange = (e)=>{
        const value = e.target.value
        setSize(value)
    }
    const handleQuery = (e) => {
        const value = e.target.value
        setQuery(value);
        if (e.target.value.length > 3) {
            setSearchPerformed(true);
        }
    };
    const handleSearch = (e) => {
        if (e.key === "Enter" && query.length > 3) {
            setSearchPerformed(true);
          }
    };
    useEffect(()=>{
        fetchstudents(pages, size);
        fetchsearchstudents(pages,size,query)
    }, [pages, size])
    useEffect(() => {
       
        if (searchPerformed) {
          fetchsearchstudents(pages, size, query);
        }
      }, [query]);
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
                                <p>{data?.students?.length} Active Students</p>
                            </div>
                            <div className="students-filter">
                                <div className="students-search">
                                    <div><FaSearch/></div>
                                    <input type="text" placeholder="search"  onBlur={handleQuery}  onKeyPress={handleSearch}></input>
                                </div>
                                {/* <div className="students-search students-select">
                                    <p>Sort by:</p>
                                    <select>
                                        <optgroup>
                                            <option>Newest</option>
                                            <option>Oldest</option>
                                        </optgroup>
                                    </select>
                                </div> */}
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
                    <div className="pagintions">
                        <div className="page-right">
                            <p>Showing data 1 0f</p>
                            <select onChange={handleSizeChange}>
                                <optgroup>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                </optgroup>
                            </select>
                            <p>entries</p>
                        </div>
                        <div className="page-left">
                            <Stack spacing={2}>
                                <Pagination count={data?.paginationInfo?.totalPages} page={pages} onChange={handleChange} variant="outlined" shape="rounded" />
                            </Stack>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
const mapStateToProps = state => {
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