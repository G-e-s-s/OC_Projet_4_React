import React from 'react';
import "../../styles/logements.css";
import Carousel from '../../components/Carousel/carousel';

import 'react-slideshow-image/dist/styles.css';

const Logements = (props) => {
  
  return (
    <div>
      <main>
        <Carousel id={props.id}></Carousel>
      </main>
    </div>
  );
}

export default Logements;