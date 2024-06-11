import React from 'react';
import '../../styles/apropos.css';
import ImgBanniere from '../../assets/ImgAPropos.png';


const APropos = () => {
    return (
    <div>
        <main>
            <div className="banniere">
            <img className="imgBanniere" src={ImgBanniere} alt='Paysage'></img>
            <h1 className="textIntro">Chez vous, partout et ailleurs</h1>
            </div>
        </main>
       
    </div>
    )
}
  
export default APropos