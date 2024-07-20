import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../Collapse/collapse.scss'
 
function Collapse(props) {
    const [rotate, setRotate] = useState(false);
    const handleRotate = () => setRotate(!rotate);
    const classRotate = rotate ? "chevronUp" : "chevronDown";
    const classCard = rotate ? "showCard card-content" : "hideCard card-content";

    return (
      <div className="collapsible" onClick={handleRotate}>
        <div className="card-header">
          {props.title} <div className={classRotate} ><FontAwesomeIcon icon={faChevronUp}/> </div>
        </div>
        <div className='card'>
          <div className={classCard}>
            {props.description} 
          </div>
        </div>
      </div>
    )
};
export default Collapse;