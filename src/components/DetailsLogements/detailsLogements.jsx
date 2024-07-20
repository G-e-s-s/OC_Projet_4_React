import React from 'react';
import appartements from "../../assets/logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../DetailsLogements/detailsLogements.scss"

function DetailsLogements (props) {
    const appart = appartements.filter(
        (appart) => {
          return appart.id === props.id;
        }
      )[0];
    
    //TAGS//
    const tagLogement = appart.tags.map(
        (tag,index) => {
            return( 
                <div key={index} className="tag"><p>{tag}</p></div>
            );
        }
    );

    //STARS//
    const numberStars = parseInt(appart.rating);
    let stars = [];
    for (let i = 1; i<=5; i++){
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className={numberStars >= i ? "fullStar" : "emptyStar"}/>)
    }

    return (
        <div className="description">
            <div className="titreLogement">
                <h2>{appart.title}</h2>
                <p>{appart.location}</p>
                <div className="tagLogement">
                    {tagLogement}
                </div>
            </div>
            <div className="Host">
                <div className="profilHost">
                <p className="nameHost">{appart.host.name}</p>
                <img className="imgHost" src={appart.host.picture} alt="Profil Host"></img>
                </div>
                <div className='stars'>
                    {stars}
                </div>
            </div>
        </div>
    );
}

export default DetailsLogements;