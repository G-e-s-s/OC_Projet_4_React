import React from 'react';
 
function Cartes(props) {
  return (
    <a href={props.cardLink}><article className="cartes">
      <p className="carte-titre">{props.title}</p>
    </article></a>
)
};
export default Cartes;