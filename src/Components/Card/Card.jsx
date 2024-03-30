import "./Card.css"
import { PiStudent } from "react-icons/pi";
const Card = ({title, numbers, icons, color}) => {
    return ( 
        <div className="card" style={{backgroundColor:  color}}>
            <p className="student-text">
                {title}
            </p>
            <div className="student-body">
                <h3>{numbers}</h3>
                {icons}
            </div>
        </div>
    );
}
 
export default Card;