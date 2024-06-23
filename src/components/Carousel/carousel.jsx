import React from 'react';
import "../../styles/logements.css"
import appartements from "../../assets/logements.json";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';


const Carousel = (props) => {
  const appart = appartements.filter(
    (appart) => {
      return appart.id === props.id;
    }
  )[0];

  const length = appart.pictures.length;
  
  const imageCarousel = appart.pictures.map(
    (image, index) => {
        return (
            <div key={image} className="carousel each-slide-effect" >
                <img style={{resizeMode: 'cover'}} className="imgCarousel" src={image} alt="Logements"></img>
                <span className="numImg"> {index+1}/{length}</span>
            </div>
        )
    }
  );
  return (
    <Slide>
        {imageCarousel}
    </Slide>
  );
}

export default Carousel;