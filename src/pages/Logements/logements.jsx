import React from 'react';
import "../../styles/logements.css";
import Carousel from '../../components/Carousel/carousel';
import Collapse from '../../components/Collapse/collapse';
import 'react-slideshow-image/dist/styles.css';
import DetailsLogements from '../../components/DetailsLogements/detailsLogements';
import appartements from "../../assets/logements.json";


const Logements = (props) => {
  const appart = appartements.filter(
    (appart) => {
      return appart.id === props.id;
    }
  )[0];
  const equipments = appart.equipments.map(
    (equip) => {
    return (<p>{equip} <br></br></p>)
  }
  );
  return (
    <div>
      <main>
        <Carousel id={props.id}></Carousel>
        <DetailsLogements id={props.id}></DetailsLogements>
        <div className="details">
          <Collapse title='Description' description={appart.description}></Collapse>
          <Collapse title='Equipements' description={equipments}></Collapse>
        </div>
      </main>
    </div>
  );
}

export default Logements;