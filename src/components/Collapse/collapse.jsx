import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {useCollapse} from 'react-collapsed';
 
function Collapse(props) {
    const { getCollapseProps, getToggleProps} = useCollapse();
    const [rotateChevron, setRotateChevron] = useState(false);
    const handleRotate = () => setRotateChevron(!rotateChevron);
    const rotate = rotateChevron ? "rotate(-180deg)" : "rotate(0)"
    
    return (
      <div className="collapsible" onClick={handleRotate}>
        <div className="card-header" {...getToggleProps()}>
          {props.title} <div style={{ transform: rotate, transition: "all 0.5s ease" }} ><FontAwesomeIcon icon={faChevronUp}/> </div>
        </div>
        <div {...getCollapseProps()}>
          <div className="card-content">
            {props.description}          
          </div>
        </div>
      </div>
    )
};
export default Collapse;