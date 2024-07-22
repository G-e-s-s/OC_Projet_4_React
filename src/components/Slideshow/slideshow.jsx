import React, {useState} from 'react';
import appartements from "../../assets/logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import "../Slideshow/slideshow.scss"

function Slideshow (props) {
  const [index, setIndex] = useState(0);
  const appart = appartements.filter(
    (appart) => {
      return appart.id === props.id;
    }
  )[0];

  const length = appart.pictures.length;
  const previousOne = () => {
    setIndex((index-1+length)%length);
  }
  const nextOne = () => {
    setIndex((index+1)%length);
  }
  if(length === 1){
    return(
      <div className="slideshow">
        <div key="0" className="carousel" >
            <img className="imgCarousel" src={appart.pictures[0]} alt="Logements" ></img>
        </div>
      </div>
    )
  }
  else {
    const imageCarousel = appart.pictures.map(
      (image, indexImage) => {
        return (
        <div className="slideshow">
          <FontAwesomeIcon className="chevronLeft" icon={faChevronLeft} onClick={previousOne}/>
          <div key={indexImage} className="carousel" >
            <img className="imgCarousel" src={image} alt="Logements" ></img>
            <span className="numImg"> {indexImage+1}/{length}</span>
          </div>
          <FontAwesomeIcon className="chevronRight" icon={faChevronRight} onClick={nextOne}/>
        </div>
        )
      }
    );
    return (
      imageCarousel[index]
    );
  }
};

export default Slideshow;