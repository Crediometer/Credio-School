import "./Transaction.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FaSearch } from "react-icons/fa";
import {connect} from 'react-redux'
import StudentTable from "../../Components/Tables/StuentTable2";
import TransactionTable from "../../Components/Tables/TransactionTable";
import { fetchtransaction } from "../../Redux/Transactions/TransactionAction";
import { useEffect, useState } from "react";
import LottieAnimation from "../../Lotties"
import empty from '../../Assets/animations/Empty.json'
import preloader from "../../Assets/animations/preloader.json"

const Transaction = ({loading, error, data, fetchtransaction}) => {
    const [pages, setPages] = useState(1)
    const [pagesize, setpagesize] = useState(10)
    const [sortBy, setSortBy] = useState('newest'); 
    const [sortedTransactions, setSortedTransactions] = useState([]);
    const handleSizeChange = (e)=>{
        const value = e.target.value
        setpagesize(value)
    }
    const handleChange = (event, value) => {
        setPages(value);
    };
    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortBy(value);
    };
    useEffect(()=>{
        fetchtransaction(pages, pagesize)
    }, [pages, pagesize])
    useEffect(() => {
        if (data?.transactions) {
            let sorted = [...data.transactions];
            if (sortBy === 'oldest') {
                sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
            } else {
                sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            }
            setSortedTransactions(sorted);
            console.log("this is sorted", sortedTransactions)
        }
    }, [data, sortBy]);
    // useEffect(() => {
    //     if (data?.transactions) {
    //         let sortedTransactions = [...data.transactions];
    //         if (sortBy === 'oldest') {
    //             sortedTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    //         } else {
    //             sortedTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
    //         }
    //         fetchtransaction(pages, pagesize);
    //     }
    // }, [sortBy]);
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
                                        <select onChange={handleSortChange}>
                                            <optgroup>
                                                <option value="newest">Newest</option>
                                                <option value="oldest">Oldest</option>
                                            </optgroup>
                                        </select>
                                    </div> */}
                                </div>
                            </div>
                            {(sortedTransactions?.length === 0)?(
                                <div className="empty-animate">
                                    <LottieAnimation data={empty}/>
                                    <p>No Data Found</p>
                                </div>
                            ):(
                                <>
                                
                                    <div className="student-table-body">
                                        <TransactionTable data={{ transactions: sortedTransactions }}/>
                                    </div>
                                </>
                            )}
                           

                        
                    </div>
                    <div className="pagintions">
                        <div className="page-right">
                            <p>Showing data 1 of</p>
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
                </>
            )}
        </>
    );
}
 
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.transaction?.error,
        loading: state?.transaction?.loading,
        data: state?.transaction?.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchtransaction: (page, size) => dispatch(fetchtransaction(page, size)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Transaction);