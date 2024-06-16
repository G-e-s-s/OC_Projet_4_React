import React from 'react';
 
function Banniere(props) {
  return (
    <div className="banniere">
      <img className={props.className} src={props.img} alt='Paysage'></img>
      <h1 className="textIntro">{props.text}</h1>
    </div>
)
};
export default Banniere;