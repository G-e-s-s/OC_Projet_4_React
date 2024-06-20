import React from 'react';
import '../../styles/header.css';
import logo from './../../assets/logo.png';
import '../../pages/APropos/APropos';
import {Link} from 'react-router-dom';
 
function Header() {
    return (
        <div className="navbar">
        <img className="navbar__logo" src={logo} alt='Logo Kasa'></img>
            <div className="btn-nav">
                <nav><ul>
                    <Link to='/'><li>Accueil</li></Link>
                    <Link to='/apropos'><li>A Propos</li></Link>
                </ul></nav>
            </div>
        </div>
    )
}
export default Header