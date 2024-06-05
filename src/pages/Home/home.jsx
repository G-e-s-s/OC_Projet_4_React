import React from 'react';
import Headernav from '../../components/Header/header';
import '../../styles/index.css';

const Home = () => {
  return (
    <div>
      <Headernav/>
    <main>
      <div class="banniere">
        <h1 class="textIntro">Chez vous, partout et ailleurs</h1>
      </div>

      <div class="hebergements">
        <section class="groupe-chambres">
          <article class="cartes">
            <h3 class="carte-titre">Titre de la location</h3>
          </article>
          <article class="cartes">
            <h3 class="carte-titre">Titre de la location</h3>
          </article>
          <article class="cartes">
            <h3 class="carte-titre">Titre de la location</h3>
          </article>
          <article class="cartes">
            <div class="carte-contenu">
              <h3 class="carte-titre">Titre de la location</h3>
            </div>
          </article>
          <article class="cartes">
            <h3 class="carte-titre">Titre de la location</h3>
          </article>
          <article class="cartes">
            <div class="carte-contenu">
              <h3 class="carte-titre">Titre de la location</h3>
            </div>
          </article>
        </section> 
      </div>
    </main>
    </div>
  )
}

export default Home