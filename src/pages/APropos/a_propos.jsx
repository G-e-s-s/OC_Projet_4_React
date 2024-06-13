import React from 'react';
import {useCollapse} from 'react-collapsed';
import '../../styles/apropos.css';
import ImgBanniere from '../../assets/ImgAPropos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collapsible1(){
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return(
      <div className="collapsible">
        <div className="card-header"  {...getToggleProps()}>
          Fiabilité {isExpanded ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>}
        </div>
        <div {...getCollapseProps()}>
          <div className="card-content">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </div>
        </div>
      </div>
  )
}

function Collapsible2(){
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return(
    <div className="collapsible">
      <div className="card-header"  {...getToggleProps()}>
          Respect {isExpanded ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>}
      </div>
      <div {...getCollapseProps()}>
        <div className="card-content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.          
        </div>
      </div>
    </div>
  );
}

function Collapsible3(){
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return(
    <div className="collapsible">
      <div className="card-header"  {...getToggleProps()}>
          Service {isExpanded ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>}
      </div>
      <div {...getCollapseProps()}>
        <div className="card-content">
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </div>
      </div>
    </div>
  );
}

function Collapsible4(){
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return(
    <div className="collapsible">
      <div className="card-header"  {...getToggleProps()}>
          Sécurité {isExpanded ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>}
      </div>
      <div {...getCollapseProps()}>
        <div className="card-content">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </div>
      </div>
    </div>
  );
}

function Collapsible() {
  return (
    <main>
      <div className="banniere">
        <img className="imgBanniere" src={ImgBanniere} alt='Paysage'></img>
      </div>
      <Collapsible1/>
      <Collapsible2/>
      <Collapsible3/>
      <Collapsible4/>
    </main>
  );
}
export default Collapsible;

// const APropos = () => {
//     return (
//     <div>
//         <main>
//           <div className="banniere">
//             <img className="imgBanniere" src={ImgBanniere} alt='Paysage'></img>
//           </div>
//           <div>
//             <Collapsible/>
//           </div>
//           <div id="accordion"> 
//             <div className="card">
//               <div className="card-header" id="headingOne">
//                 <p className="mb-0">Fiabilité
//                   <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">               
//                   <FontAwesomeIcon icon={faChevronUp} aria-hidden="true" className="fa"/>
//                   </button>
//                 </p>
//               </div>

//               <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
//                 <div className="card-body">
//                 Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//     </div>
//     )
// }
// export default APropos
