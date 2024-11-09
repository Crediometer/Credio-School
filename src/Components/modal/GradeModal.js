import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const GradeModal = ({togglemodal}) => {
    const [grade, setGrade] = useState("");
    const [term, setTerm] = useState(1); // Default to 'First Term'
    const [firstTermAmount, setFirstTermAmount] = useState("");
    const [secondTermAmount, setSecondTermAmount] = useState("");
    const [thirdTermAmount, setThirdTermAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Store the form data in JSON format
        const formData = {
            grade,
            term,
            amounts: {
                firstTerm: firstTermAmount,
                secondTerm: term > 1 ? secondTermAmount : null,
                thirdTerm: term > 2 ? thirdTermAmount : null
            }
        };

        console.log("Submitted Data:", JSON.stringify(formData, null, 2));

        // Clear form (optional)
        setGrade("");
        setTerm(1);
        setFirstTermAmount("");
        setSecondTermAmount("");
        setThirdTermAmount("");
    };

    return ( 
        <div className="modal-background">
            <div className="modalssss">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <div className="onetime-modal">
                    <p className="create-payment">Add Grade</p>
                    <form>
                        <div className="form-1">
                            <label>Enter Grade/Class/Level</label>
                            <div className="input-search-name">
                                <input 
                                    type="text"
                                    value={grade}
                                    onChange={(e) => setGrade(e.target.value)}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="form-1">
                            <label>Select Terms</label>
                            <div className="input-search-name">
                                <select
                                    value={term} 
                                    onChange={(e) => setTerm(parseInt(e.target.value, 10))}
                                    required
                                >
                                    <optgroup>
                                        <option value={1}>First Term</option>
                                        <option value={2}>Second Term</option>
                                        <option value={3}>Third Term</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        {term >= 1 && (
                            <div className="form-1">
                                <label>Enter Amount for First Term</label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value={firstTermAmount}
                                        onChange={(e) => setFirstTermAmount(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        )}
                        {term >= 2 && (
                            <div className="form-1">
                                <label>Enter Amount for Second Term</label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value={secondTermAmount}
                                        onChange={(e) => setSecondTermAmount(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        )}
                        {term === 3 && (
                            <div className="form-1">
                                <label>Enter Amount for Third Term</label>
                                <div className="input-search-name">
                                    <input 
                                        type="text"
                                        value={thirdTermAmount}
                                        onChange={(e) => setThirdTermAmount(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        )}
                        <div className="grade-button">
                            <button className="grade-cancle">Cancle</button>
                            <button className="grade-save">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default GradeModal;