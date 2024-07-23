import React from 'react';
import "../Bannière/banniere.scss"
 
function Banniere(props) {
  return (
    <div className="banniere">
            <img className={props.className} src={props.img} alt='Paysage'></img>
            {props.text !== undefined && <h1 className="textIntro">{props.text}</h1>}
          </div>
        );
};
export default Banniere;