import React from 'react';
import "../../styles/logements.scss"
import appartements from "../../assets/logements.json";
import 'react-slideshow-image/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Carousel = (props) => {
  let index = 0;
  const appart = appartements.filter(
    (appart) => {
      return appart.id === props.id;
    }
  )[0];

  const length = appart.pictures.length;
  if(length === 1);

  const previousOne = () => {
    index = (index-1)%length;
  }
  const nextOne = () => {
    index = (index+1)%length;
  }

  const imageCarousel = appart.pictures.map(
    (image, index) => {
      return (
        <div key={index} className="carousel each-slide-effect" >
          <FontAwesomeIcon className="chevronLeft" icon={faChevronLeft} onClick={previousOne} />
          <img style={{resizeMode: 'cover'}} className="imgCarousel" src={image} alt="Logements"></img>
          <FontAwesomeIcon className="chevronRight" icon={faChevronRight} onClick={nextOne}/>
          <span className="numImg"> {index+1}/{length}</span>
        </div>
      )
    }
  );
  return (
    imageCarousel[index]
  );
}

export default Carousel;