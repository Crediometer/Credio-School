import "./Modal.css"
import { FaCheck, FaSadTear, FaSmile } from "react-icons/fa";
import LottieAnimation from "../../Lotties";
import loader from '../../Assets/animations/preloader.json'
import success from '../../Assets/Image/icon-success.png'
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import wrong from '../../Assets/animations/Errorr.json'
const ReceiptModal = ({data, togglemodal}) => {
    const [downloading, setDownloading] = useState(false); 
    const pdfRef = useRef()
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

            // if (logoImage) {
            //     const logoWidth = 10; // Adjust the size of the logo as needed
            //     const logoHeight = (logoWidth * logoImage.height) / logoImage.width;
            //     pdf.addImage(logoImage, "PNG", (pdfWidth - logoWidth) / 2, imgY, logoWidth, logoHeight);
            // }

            pdf.save('Invoice.pdf')
            setDownloading(false)
        })
    }
    const isSuccessCode =
    data.responseCode === "00" ||
    data.responseCode === "10" ||
    data.responseCode === "11" ||
    data.responseCode === "16";
    return ( 
        <div className="successmodal">
            <div className="modal-background">
                <div className="receipt-modal" ref={pdfRef}>
                    {isSuccessCode ? (
                        <div className="receipt-top">
                            <img src={success}></img>
                            <p className="credio">Credio</p>
                            <h3>NGN{(data.amount/ 100).toFixed(2)}</h3>
                            <p className="success-text">Successful transaction</p>
                            <p className="receipt-date-time">{data.responseTime.slice(0,10)}</p>
                        </div>
                    ): (
                        <div className="receipt-top">
                            <LottieAnimation data={wrong}/>
                            <p className="credio">Credio</p>
                            <h3>NGN{(data.amount/ 100).toFixed(2)}</h3>
                            <p className="success-text">Successful transaction</p>
                            <p className="receipt-date-time">{data.responseTime.slice(0,10)}</p>
                        </div>
                    )}
                    <div className="receipt-body">
                        <div className="receipt-con">
                            <h5 className="con-head">
                                Card Holder
                            </h5>
                            <div className="receipt-content">
                                <p className="receipt-title">maskPan:</p>
                                <p className="receip-cont">{data.maskedPan}</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Card Type:</p>
                                <p className="receip-cont">Verve</p>
                            </div>
                        </div>
                        <div className="receipt-con">
                            <h5 className="con-head">
                                Recipient
                            </h5>
                            <div className="receipt-content">
                                <p className="receipt-title">Account Num:</p>
                                <p className="receip-cont">938377xxxxx</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Merchant Name :</p>
                                <p className="receip-cont">{data.merchantName}</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">TerminalId:</p>
                                <p className="receip-cont">{data.terminalId}</p>
                            </div>
                        </div>
                        <div className="receipt-con">
                            <h5 className="con-head">
                                Transaction Info
                            </h5>
                            <div className="receipt-content">
                                <p className="receipt-title">Transaction Type:</p>
                                <p className="receip-cont">Card Transaction</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Auth Code:</p>
                                <p className="receip-cont">{data.authCode}</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Response Code</p>
                                <p className="receip-cont">{data.responseCode}</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">STAN</p>
                                <p className="receip-cont">{data.STAN}</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Message</p>
                                <p className="receip-cont">{data.messageReason}</p>
                            </div>
                        </div>
                    </div>
                    <div className="save-con">
                        {/* <Link to="/home/newstudent"> */}
                        <button onClick={togglemodal}>
                            Exit
                        </button>
                        {/* </Link> */}
                        <button onClick={downloadPdf} disabled={downloading}>
                            {downloading ? "Downloading..." : "Download"}
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    );
}
 
export default ReceiptModal;