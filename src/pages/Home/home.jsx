import React from 'react';
import '../../styles/home.css';
import Banniere from '../../components/Bannière/banniere';
import ImgBanniereHome from '../../assets/ImgHome.jpg';
import Cartes from '../../components/Cartes/cartes';
import appartements from "../../assets/logements.json";

const Home = () => {
  return (
    <div>
      <main>
        <Banniere className="ImgBanniereHome" img={ImgBanniereHome} text={"Chez vous, parout et ailleurs"}></Banniere>
        <div className="hebergements">
          <section className="groupe-chambres">
            {appartements.map(appart => <Cartes key={appart.id} cardLink={"../Logements/" + appart.id} title={appart.title} img={appart.cover} id={appart.id}></Cartes>)}
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home