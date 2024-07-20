import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../Collapse/collapse.scss'
 
function Collapse(props) {
    const [firstTime, setFirstTime] = useState(true);
    const [rotate, setRotate] = useState(false);
    const handleRotate = () => {
      setRotate(!rotate);
      setFirstTime(false);
    }
    const classRotate = rotate ? "chevronUp" : "chevronDown";
    const classCard = rotate ? "showCard card-content" : "hideCard card-content";
    const classFirstTime = firstTime ? "hide card" : "card";

    return (
      <div className="collapsible" onClick={handleRotate}>
        <div className="card-header">
          {props.title} <div className={classRotate} ><FontAwesomeIcon icon={faChevronUp}/> </div>
        </div>
        <div className={classFirstTime}>
          <div className={classCard}>
            {props.description} 
          </div>
        </div>
      </div>
    )
};
export default Collapse;