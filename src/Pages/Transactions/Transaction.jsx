import "./Transaction.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FaSearch } from "react-icons/fa";
import StudentTable from "../../Components/Tables/StuentTable2";
import TransactionTable from "../../Components/Tables/TransactionTable";

const Transaction = () => {
    return ( 
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
                    <div className="student-table-body">
                        <TransactionTable/>
                    </div>

                   
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
    );
}
 
export default Transaction;