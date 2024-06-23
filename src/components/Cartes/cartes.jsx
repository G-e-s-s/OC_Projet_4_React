import React from 'react';
 
function Cartes(props) {
  return (
    <a href={props.cardLink} >
      <article className="cartes" src={props.id}>
        <img className="img" src={props.img} alt="appartement"></img>
        <p className="carte-titre">{props.title}</p>
      </article>
    </a>
)
};
export default Cartes;