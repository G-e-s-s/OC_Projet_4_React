import React from 'react';
import './header.scss';
import logo from './../../assets/logo.png';
import '../../pages/APropos/APropos';
import {NavLink} from 'react-router-dom';
 
function Header() {
    return (
        <div className="navbar">
        <img className="navbar__logo" src={logo} alt='Logo Kasa'></img>
            <div className="btn-nav">
                <nav><ul>
                    <li><NavLink to='/'>Accueil</NavLink></li>
                    <li><NavLink to='/apropos'>A propos</NavLink></li>
                </ul></nav>
            </div>
        </div>
    )
}
export default Header