import { FaSearch } from "react-icons/fa";
import StudentTable from "../../Components/Tables/StuentTable2";

const Transaction = () => {
    return ( 
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
                    <StudentTable/>
                </div>
        </div>
    );
}
 
export default Transaction;