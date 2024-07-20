import React from 'react';
import "../Bannière/banniere.scss"
 
function Banniere(props) {
  var valeurRetour = null;
  if(props.text === null){
    valeurRetour = (
      <div className="banniere">
        <img className={props.className} src={props.img} alt='Paysage'></img>
      </div>
    );
   } else {
    valeurRetour = (
      <div className="banniere">
        <img className={props.className} src={props.img} alt='Paysage'></img>
        <h1 className="textIntro">{props.text}</h1>
      </div>
    );
   }

  return valeurRetour;
};
export default Banniere;