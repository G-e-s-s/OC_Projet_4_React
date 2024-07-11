import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import "./logements.scss";
import Carousel from '../../components/Carousel/carousel';
import Collapse from '../../components/Collapse/collapse';
import 'react-slideshow-image/dist/styles.css';
import DetailsLogements from '../../components/DetailsLogements/detailsLogements';
import appartements from "../../assets/logements.json";

const Logements = () => {
  const navigate = useNavigate();
  const id = useParams()["id"];

  const appart = appartements.filter(
    (appart) => {
      return appart.id === id;
    }
  );
  const length = appart.length;
 console.log(appart);
  
 useEffect(() =>{
  if(length === 0){
   navigate("/error");
  }
 },[length, navigate]);
  
  if(length > 0){
  const logement = appart[0];
  const equipments = 
    (<ul>
      {
        logement.equipments.map(
          (equip,index) => {
          return (<li key={index}>{equip}</li>)
        }
        )
      }
    </ul>);
  return((
    <div>
      <main>
        <Carousel id={id}></Carousel>
        <DetailsLogements id={id}></DetailsLogements>
        <div className="details">
          <Collapse title='Description' description={logement.description}></Collapse>
          <Collapse title='Equipements' description={equipments}></Collapse>  
        </div>
      </main>
    </div>
  ));
}};

export default Logements;