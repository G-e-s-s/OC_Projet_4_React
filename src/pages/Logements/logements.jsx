import React from 'react';
import "../../styles/logements.scss";
import Carousel from '../../components/Carousel/carousel';
import Collapse from '../../components/Collapse/collapse';
import 'react-slideshow-image/dist/styles.css';
import DetailsLogements from '../../components/DetailsLogements/detailsLogements';
import appartements from "../../assets/logements.json";
import { useParams } from 'react-router-dom';

const Logements = () => {
  
  const id = useParams()["id"];

  const appart = appartements.filter(
    (appart) => {
      return appart.id === id;
    }
  )[0];

  const equipments = <ul>
      {
        appart.equipments.map(
          (equip) => {
          return (<li>{equip}</li>)
        }
        )
      }
  </ul>

  return (
    <div>
      <main>
        <Carousel id={id}></Carousel>
        <DetailsLogements id={id}></DetailsLogements>
        <div className="details">
          <Collapse title='Description' description={appart.description}></Collapse>
          <Collapse title='Equipements' description={equipments}></Collapse>  
        </div>
      </main>
    </div>
  );
}

export default Logements;