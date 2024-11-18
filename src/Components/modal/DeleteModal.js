import { FaTimes } from 'react-icons/fa';
import './DeleteModal.css'
const DeleteModal = ({togglemodal,id,handleDelete}) => {
    
    return ( 
        <div className="modal-background">
            <div className="modalssss">
                <div className="delete-head">
                    <p>Delete</p>
                    <div className="close-modal" onClick={togglemodal}>
                        <FaTimes/>
                    </div>
                </div>
                <div className="delete-body">
                    <h2>Are you sure you want to delete</h2>
                    <p>Be sure you want to delete this once deleted this can not be gotten back  👋🌟</p>
                    <div className="delete-buttons">
                        <div className="delete-cancle">
                            <button className='order-cancle' onClick={togglemodal}>Cancel</button>
                            <button className='order-ok' onClick={()=>{handleDelete(id);}}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DeleteModal;