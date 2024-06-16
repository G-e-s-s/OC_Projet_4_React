import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {useCollapse} from 'react-collapsed';
 
function Collapse(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { getCollapseProps, getToggleProps} = useCollapse();
    const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
    return (
        <div className="collapsible" onClick={handleToggle}>
        <div className="card-header" {...getToggleProps()}>
          {props.title} {isExpanded ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>}
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