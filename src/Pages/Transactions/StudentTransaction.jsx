import "./Transaction.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FaSearch } from "react-icons/fa";
import {connect} from 'react-redux'
import StudentTable from "../../Components/Tables/StuentTable2";
import TransactionTable from "../../Components/Tables/TransactionTable";
import { fetchstudenttransaction, fetchtransaction } from "../../Redux/Transactions/TransactionAction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LottieAnimation from "../../Lotties"
import empty from '../../Assets/animations/Empty.json'
import preloader from "../../Assets/animations/preloader.json"

const StudentTransaction = ({loading, error, data, fetchtransaction}) => {
    const { id } = useParams();
    const [pages, setPages] = useState(1)
    const [size, setSize] = useState(10)

    const handleChange = (event, value) => {
        setPages(value);
    };

    const handleSizeChange = (e)=>{
        const value = e.target.value
        setSize(value)
    }
    
    useEffect(()=>{
        fetchstudenttransaction(id,pages, size);
    }, [id,pages, size])
    return ( 
        <>
            {loading ? (
                <div className="preloader">
                    <LottieAnimation data={preloader}/>
                </div>
            ):(
                <>
                    <div className="transaction students-body">
                        <div className="students-table-top">
                                <div className="students-info">
                                    <h4>Transactions</h4>
                                </div>
                                <div className="students-filter">
                                    {/* <div className="students-search">
                                        <FaSearch/>
                                        <input type="text" placeholder="search"></input>
                                    </div> */}
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
                            <div className="student-table-body">
                                <TransactionTable data={data}/>
                            </div>
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
                                <Pagination count={data?.paginationInfo?.totalPages} page={pages} variant="outlined" shape="rounded" />
                            </Stack>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
 
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.studentTransaction?.error,
        loading: state?.studentTransaction?.loading,
        data: state?.studentTransaction?.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchtransaction: () => dispatch(fetchstudenttransaction()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentTransaction);