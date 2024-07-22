import React from 'react';
import './home.scss';
import Banniere from '../../components/Bannière/banniere';
import ImgBanniereHome from '../../assets/ImgHome.jpg';
import Cartes from '../../components/Cartes/cartes';
import appartements from "../../assets/logements.json";

const Home = () => {
  return (
    <main>
      <div>
        <Banniere className="ImgBanniereHome" img={ImgBanniereHome} text={"Chez vous, partout et ailleurs"}></Banniere>
        <div className="hebergements">
          <section className="groupe-chambres">
            {appartements.map
            ((appart) => {
              return (
                <Cartes key={appart.id} cardLink={"../Logements/" + appart.id} title={appart.title} img={appart.cover} id={appart.id}></Cartes>
              );
            }
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default Home