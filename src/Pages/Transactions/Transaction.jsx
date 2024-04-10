import "./Transaction.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FaSearch } from "react-icons/fa";
import {connect} from 'react-redux'
import StudentTable from "../../Components/Tables/StuentTable2";
import TransactionTable from "../../Components/Tables/TransactionTable";
import { fetchtransaction } from "../../Redux/Transactions/TransactionAction";
import { useEffect } from "react";
import LottieAnimation from "../../Lotties"
import empty from '../../Assets/animations/Empty.json'
import preloader from "../../Assets/animations/preloader.json"

const Transaction = ({loading, error, data, fetchtransaction}) => {
    useEffect(()=>{
        fetchtransaction()
    }, [])
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
                            {(data?.transactions?.length === 0)?(
                                <div className="empty-animate">
                                    <LottieAnimation data={empty}/>
                                    <p>No Data Found</p>
                                </div>
                            ):(
                                <>
                                
                                    <div className="student-table-body">
                                        <TransactionTable/>
                                    </div>
                                </>
                            )}
                           

                        
                    </div>
                    <div className="pagintions">
                        <div className="page-right">
                            <p>Showing data 1 0f 5 entries</p>
                        </div>
                        <div className="page-left">
                            <Stack spacing={2}>
                                <Pagination count={10} variant="outlined" shape="rounded" />
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
        fetchtransaction: () => dispatch(fetchtransaction()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Transaction);