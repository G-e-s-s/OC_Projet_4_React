import React from 'react';
import '../../styles/logements.css';

const Logements = () => {
  return (
    <main>
    <div id="carouselExampleIndicators" class="carousel slide" data-coreui-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../assets/ImgCarrousel.png" class="d-block w-100" alt="..."></img>

    </div>
    <div class="carousel-item">
      <img src="../../assets/ImgCarrousel.png" class="d-block w-100" alt="..."></img>

    </div>
    <div class="carousel-item">
      <img src="../../assets/ImgCarrousel.png" class="d-block w-100" alt="..."></img>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </main>
  )
};

export default Logements;