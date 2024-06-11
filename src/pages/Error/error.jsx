import React from 'react';
import '../../styles/error.css';
import ImgError from '../../assets/404.png';


const Error = () => {
    return (
      <div>
       <main>
            <div className="Error">
            <img className="imgError" src={ImgError} alt='404'></img>
            <p className="textError">Oups ! La page que vous demandez n'existe pas.</p>
            <a href='..//Home/home'><p className="return">Retourner sur la page d’accueil</p></a>
            </div>
        </main>
      </div>
    )
}
  
export default Error