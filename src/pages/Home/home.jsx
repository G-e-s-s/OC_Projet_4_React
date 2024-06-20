import React from 'react';
import '../../styles/home.css';
import Banniere from '../../components/Bannière/banniere';
import ImgBanniereHome from '../../assets/ImgHome.jpg';
import Cartes from '../../components/Cartes/cartes';

const Home = () => {
  return (
    <div>
      <main>
        <Banniere className="ImgBanniereHome" img={ImgBanniereHome} text={"Chez vous, parout et ailleurs"}></Banniere>
        <div className="hebergements">
          <section className="groupe-chambres">
            <Cartes cardLink={"../Logements"} title={"Titre de la location"}></Cartes>
            <Cartes cardLink={"../Logements"} title={"Titre de la location"}></Cartes>
            <Cartes cardLink={"../Logements"} title={"Titre de la location"}></Cartes>
            <Cartes cardLink={"../Logements"} title={"Titre de la location"}></Cartes>
            <Cartes cardLink={"../Logements"} title={"Titre de la location"}></Cartes>
            <Cartes cardLink={"../Logements"} title={"Titre de la location"}></Cartes>
            <Cartes cardLink={"../Logements"} title={"Titre de la location"}></Cartes>
            <Cartes cardLink={"../Logements"} title={"Titre de la location"}></Cartes>
            <Cartes cardLink={"../Logements"} title={"Titre de la location"}></Cartes>
          </section> 
        </div>
      </main>
    </div>
  )
}

export default Home