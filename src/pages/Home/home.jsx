import React from 'react';
// import Headernav from '../../components/Header/header';
// import Footer from '../../components/Footer/footer';
import '../../styles/home.css';
import ImgBanniere from '../../assets/ImgHome.jpg';

const Home = () => {
  return (
    <div>
      {/* <Headernav/> */}
      <main>
        <div className="banniere">
          <img className="imgBanniere" src={ImgBanniere} alt='Paysage'></img>
          <h1 className="textIntro">Chez vous, partout et ailleurs</h1>
        </div>

        <div className="hebergements">
          <section className="groupe-chambres">
            <article className="cartes">
              <h3 className="carte-titre">Titre de la location</h3>
            </article>
            <article className="cartes">
              <h3 className="carte-titre">Titre de la location</h3>
            </article>
            <article className="cartes">
              <h3 className="carte-titre">Titre de la location</h3>
            </article>
            <article className="cartes">
              <div className="carte-contenu">
                <h3 className="carte-titre">Titre de la location</h3>
              </div>
            </article>
            <article className="cartes">
              <h3 className="carte-titre">Titre de la location</h3>
            </article>
            <article className="cartes">
              <div className="carte-contenu">
                <h3 className="carte-titre">Titre de la location</h3>
              </div>
            </article>
          </section> 
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  )
}

export default Home