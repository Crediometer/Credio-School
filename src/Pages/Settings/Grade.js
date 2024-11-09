import "./Grade.css"
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
import GradeModal from "../../Components/modal/GradeModal";
const Grade = () => {
    const [show, setShow] = useState(false)
    const handleToggle = () =>{
        setShow(!show)
    }
    return ( 
        <div className="grade">
            <div className="grade-button">
                <button>Copy Link</button>
            </div>
            <div className="grade-body">
                <div className="grade-line">
                    <p>Grade 1</p>
                    <div className="grade-value">
                        <input
                            type="text"
                            value="1000000"
                        ></input>
                        <div className="edit">
                            <MdModeEdit/>
                        </div>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                </div>
                <div className="grade-line">
                    <p>Grade 2</p>
                    <div className="grade-value">
                        <input
                            type="text"
                            value="1000000"
                        ></input>
                        <div className="edit">
                            <MdModeEdit/>
                        </div>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                </div>
                <div className="grade-line">
                    <p>Grade 3</p>
                    <div className="grade-value">
                        <input
                            type="text"
                            value="1000000"
                        ></input>
                        <div className="edit">
                            <MdModeEdit/>
                        </div>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                </div>
                <div className="grade-line">
                    <p>Grade 4</p>
                    <div className="grade-value">
                        <input
                            type="text"
                            value="1000000"
                        ></input>
                        <div className="edit">
                            <MdModeEdit/>
                        </div>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                </div>
                <div className="grade-line">
                    <p>Grade 4</p>
                    <div className="grade-value">
                        <input
                            type="text"
                            value="1000000"
                        ></input>
                        <div className="edit">
                            <MdModeEdit/>
                        </div>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                </div>
                <div className="grade-line">
                    <p>Grade 4</p>
                    <div className="grade-value">
                        <input
                            type="text"
                            value="1000000"
                        ></input>
                        <div className="edit">
                            <MdModeEdit/>
                        </div>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                </div>
                <div className="grade-line">
                    <p>Grade 4</p>
                    <div className="grade-value">
                        <input
                            type="text"
                            value="1000000"
                        ></input>
                        <div className="edit">
                            <MdModeEdit/>
                        </div>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                </div>
                <div className="grade-line">
                    <p>Grade 4</p>
                    <div className="grade-value">
                        <input
                            type="text"
                            value="1000000"
                        ></input>
                        <div className="edit">
                            <MdModeEdit/>
                        </div>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add-grade" onClick={handleToggle}>
                <IoMdAdd />
            </div>
            {show && <GradeModal togglemodal={handleToggle}/>}
        </div>
    );
}
 
export default Grade;