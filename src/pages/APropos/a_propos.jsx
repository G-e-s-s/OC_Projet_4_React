import React from 'react';
import '../../styles/apropos.css';
import ImgBanniere from '../../assets/ImgAPropos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const APropos = () => {
    return (
    <div>
        <main>
            <div className="banniere">
                <img className="imgBanniere" src={ImgBanniere} alt='Paysage'></img>
            </div>
            <div className="container">
<div id="accordion"> 
    <div className="card">
      <div className="card-header" id="headingOne">
         <p className="mb-0">Fiabilité
          <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">               
          <FontAwesomeIcon icon={faChevronUp} aria-hidden="true" className="fa"/>
          </button>
        </p>
      </div>

      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" id="headingTwo">
        <p className="mb-0">Respect
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <FontAwesomeIcon icon={faChevronUp} aria-hidden="true" className="fa"/>
          </button>
        </p>
      </div>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
        <div className="card-body">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" id="headingThree">
        <p className="mb-0">Service
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <FontAwesomeIcon icon={faChevronUp} aria-hidden="true" className="fa"/>
          </button>
        </p>
      </div>
      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </div>
      </div>
    </div>
  <div className="card">
      <div className="card-header" id="headingFour">
        <p className="mb-0">Sécurité
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          <FontAwesomeIcon icon={faChevronUp} aria-hidden="true" className="fa"/>
          </button>
        </p>
      </div>
      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
        <div className="card-body">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </div>
      </div>
    </div>
  </div>
</div>
            {/* <button type="button" class="collapsible">Fiabilité<i class="fa"></i></button>
            <div class="content">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
            <button type="button" class="collapsible">Respect</button>
            <div class="content">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            <button type="button" class="collapsible">Service</button>
            <div class="content">
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
            <button type="button" class="collapsible">Sécurité</button>
            <div class="content">
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div> */}
        </main>
       
    </div>
    )
}
  
export default APropos