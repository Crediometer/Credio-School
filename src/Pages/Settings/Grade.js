import "./Grade.css"
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import GradeModal from "../../Components/modal/GradeModal";
import EditGradeModal from "../../Components/modal/EditGradeModal";
import { connect } from "react-redux";
import { addGrade, deleteGrade, getGrade } from "../../Redux/Students/Grade/GradeAction";
import LottieAnimation from "../../Lotties";
import preloader from "../../Assets/animations/preloader.json"
import empty from "../../Assets/animations/Empty.json"
import DeleteModal from "../../Components/modal/DeleteModal";
import { Link } from "react-router-dom";
const Grade = ({getGrade, loading, error, data, deleteGrade}) => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showerror, setshowerror] = useState(false)
    const [postState, setPostState] = useState({})
    const handleToggle = () =>{
        setShow(!show)
    }
    const handleToggle2 = () =>{
        setShow1(!show1)
    }
    const handleToggle3 = () =>{
        setShowDelete(!showDelete)
    }
    useEffect(()=>{
        getGrade()
    },[])
    const handleDelete = async (dataid) => {
        try{
            await deleteGrade(dataid, ()=>{ 
                getGrade()
                setShowDelete(false)
            }, ()=>{ 
                setshowerror(true)
            });
        }catch(error){
        }
    };
    const formatAmount = (input) => {
        // Add commas as thousand separators
        if (typeof input !== 'string') {
            input = String(input); // Convert to string if it's not
        }
        return input?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return ( 
        <>
            {loading ? (
                <div className="preloader">
                    <LottieAnimation data={preloader}/>
                </div>
            ):(
                <div className="grade">
                    <div className="grade-button">
                        <button onClick={handleToggle}>Add Grade</button>
                        <Link to="/parent"><button>Copy Link</button></Link>
                    </div>
                    <div className="grade-body">
                        {data?.length == 0 ? (
                            <div className="empty-grade">
                                <LottieAnimation data={empty}/>
                                <p>No Grade Add Yet</p>
                            </div>
                        ): (
                            <>
                            {data?.map((data)=>{
                                return (
                                    <div className="grade-line">
                                        <p>Grade {data.gradeName}</p>
                                        <div className="grade-value">
                                            <div className="grade-amount">
                                                <p>NGN {formatAmount(data.amount)}</p>
                                            </div>
                                            <div className="edit" onClick={handleToggle2}>
                                                <MdModeEdit/>
                                            </div>
                                            <div className="delete" onClick={handleToggle3}>
                                                <FaTrash/>
                                            </div>
                                        </div>
                                        {showDelete && <DeleteModal handleDelete={handleDelete} id={data.id} togglemodal={handleToggle3}/>}
                                        {show1 && <EditGradeModal gradedata={data} togglemodal={handleToggle2} grade={getGrade} setShow={setShow1}/>}
                                    </div>
                                )
                            })}
                            </>
                        )}
                    </div>
                    {show && <GradeModal getGrade={getGrade} togglemodal={handleToggle}/>}
                </div>
            )}
        </>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.grade?.error,
        loading: state?.grade?.loading,
        data: state?.grade?.data?.grades
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getGrade: () => {
            dispatch(getGrade());
        },
        deleteGrade: (id, history, setErrorHandler) => {
            dispatch(deleteGrade(id, history, setErrorHandler));
        },
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Grade);