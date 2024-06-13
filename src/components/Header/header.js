import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../styles/header.css';
import logo from './../../assets/logo.png';
import '../../pages/APropos/a_propos'
 
ReactDOM.createRoot(document.getElementById('root'));
    function Header() {
        return (
            <div className="navbar">
            <img className="navbar__logo" src={logo} alt='Logo Kasa'></img>
                <div className="btn-nav">
                    <nav><ul>
                        <a href='../pages/Home/home'><li>Accueil</li></a>
                        <a href= '../../pages/APropos/a_propos'><li>A Propos</li></a>
                    </ul></nav>
                </div>
            </div>
        )
    }
export default Header