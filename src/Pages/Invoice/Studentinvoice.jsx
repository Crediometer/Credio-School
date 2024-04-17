    import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link, useParams } from "react-router-dom";
import logo from '../../Assets/Image/logo.png'
import axios from "axios";
import { fetchstudenttransaction } from "../../Redux/Transactions/TransactionAction";
import { connect } from "react-redux";
import LottieAnimation from "../../Lotties"
import empty from '../../Assets/animations/Empty.json'
import preloader from "../../Assets/animations/preloader.json"

const Studentinvoice = ({fetchstudenttransaction, loading, studentdata, data}) => {
    const [progress, setProgress] = useState(0);
    const [transactionMark, setTransactionMark] = useState(null)
    const [logoImage, setLogoImage] = useState(null);
    const [downloading, setDownloading] = useState(false); 
    const pdfRef = useRef()
    useEffect(() => {
        // Preload the logo image
        const img = new Image();
        img.src = logo;
        img.onload = () => {
            setLogoImage(img);
        };
    }, []);
    const downloadPdf = ()=>{
        setDownloading(true)
        const input = pdfRef.current;
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio)/2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

            if (logoImage) {
                const logoWidth = 10; // Adjust the size of the logo as needed
                const logoHeight = (logoWidth * logoImage.height) / logoImage.width;
                pdf.addImage(logoImage, "PNG", (pdfWidth - logoWidth) / 2, imgY, logoWidth, logoHeight);
            }

            pdf.save('Invoice.pdf')
            setDownloading(false)
        })
    }
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    // const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        fetchstudenttransaction(id);
        const selectedStudent = studentdata?.find(student => student._id === id);
        setStudent(selectedStudent);
        
    }, [id]);
    useEffect(()=>{
        if (data && data.length > 0) {
            const lastTransaction = data[data.length - 1];
            setTransactionMark(lastTransaction);
        }
    },[data])
    useEffect(()=>{
        if (transactionMark && student?.period?.proposedRepetition) {
            const progressbar=(transactionMark?.metaData?.transactionMark / student.period.proposedRepetition) * 100
            setProgress(progressbar);
        } else {
            setProgress(0)
        }
    }, [transactionMark])
    return ( 
        <>
            {loading ? (
                <div className="preloader">
                    <LottieAnimation data={preloader}/>
                </div>
            ):(
            <div className="student-invoice" ref={pdfRef}>
                <div className="student-invoice-top">
                    <h4>Progress bar</h4>
                    <Link to={`/home/students/transaction/${id}`}>
                        <button>View all transactions</button>
                    </Link>
                </div>
                <div className="invoice-progressbar">
                    <div className="ngn-progressbar">
                        <p>{`NGN ${(student?.period?.singlePaymentAmount)?.toFixed(2)}`}</p>
                        <p>{`NGN ${(student?.period?.totalAmountToBePaid)?.toFixed(2)}`}</p>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{width: `${progress}%`}}>

                        </div>
                    </div>
                    <p className="progress-label" style={{width: `${progress}%`}}>{transactionMark?.metaData?.transactionMark}/{student?.period?.proposedRepetition}</p>
                </div>
                <div className="invoice-body">
                    <div className="invoice-payment">

                        <h4 className="form-head">Payment</h4>
                        <form action="" className="payment-form invoice-form">
                            <div className="form-1 invoice-form">
                                <label>Student Name<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value={student?.studentName}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                            <div className="form-1 invoice-form">
                                <label>Parent/Guardian Phone Number Email Adress<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value={student?.parentEmailAddress}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                            <div className="form-2 form-2-mobile">
                                <div className="form-1 invoice-form">
                                    <label>Student Grade<span>*</span></label>
                                    <div className="input-search-name">
                                        <input 
                                            type="text"
                                            value={student?.grade}
                                            disabled
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-1 invoice-form">
                                    <label>Parent/Guardian Phone Number<span>*</span></label>
                                    <div className="input-search-name">
                                        <input 
                                            type="text"
                                            value={student?.parentPhoneNumber}
                                            disabled
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-1 invoice-form">
                                <label>Terms<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value={`${student?.term === "1" ? "First Term" : student?.term === "2" ? "Second Term" : "Third Term"}`}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                            <div className="form-1 invoice-form">
                                <label>Message</label>
                                <div className="input-search-name">
                                    <input
                                        type="text"
                                        value={student?.message}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="invoice-period">
                        <h4 className="form-head">Period</h4>
                        <form action="" className="payment-form">
                            <div className="form-1 invoice-form">
                                <label>Repeat Every<span>*</span></label>
                                <div className="input-search-name">
                                        <input 
                                            type="text"
                                            value={`${student?.period?.repeatEvery === 5 ? "3 Days" : student?.period?.repeatEvery === 7 ? "7 Days" : student?.period?.repeatEvery === 15 ? "BiWeekly" : "Monthly"}`}
                                            disabled
                                        ></input>
                                    </div>
                            </div>
                            <div className="form-1 invoice-form">
                                <label>Total Amount<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value={`NGN ${student?.period?.totalAmountToBePaid}`}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                            <div className="form-1 invoice-form">
                                <label>Amount per unit<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value={`NGN ${student?.period?.singlePaymentAmount}`}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                            <div className="form-1 invoice-form">
                                <label>Start Date<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value={(student?.period?.proposedStartDate?.slice(0,10))}
                                        // value="02/03/2024"
                                        disabled
                                    ></input>
                    
                                </div>
                            </div>
                            <div className="form-1 invoice-form">
                                <label>End Date<span>*</span></label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value={(student?.period?.proposedEndDate?.slice(0,10))}
                                        // value="02/03/2025"
                                        disabled
                                    ></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="save-con">
                    <button onClick={downloadPdf} disabled={downloading}>
                        {downloading ? "Downloading..." : "Download PDF"}
                    </button>
                </div> 
            </div>
            )}
        </>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.studentTransaction?.error,
        loading: state?.studentTransaction?.loading,
        studentdata: state?.student?.data?.students,
        data: state?.studentTransaction?.data?.transactions,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchstudenttransaction: (userid) => dispatch(fetchstudenttransaction(userid)),

    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Studentinvoice);