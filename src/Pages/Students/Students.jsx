import { FaSearch } from "react-icons/fa";
import "./Students.css"
import StudentTable from "../../Components/Tables/StuentTable2";
const Students = () => {
    return ( 
        <div className="students">
            <div className="students-top">
                <button>
                    Create New Student Plan
                </button>
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
                <div className="student-table-body">
                    <StudentTable/>
                </div>
            </div>
        </div>
    );
}
 
export default Students;