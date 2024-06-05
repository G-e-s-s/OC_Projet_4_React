import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../styles/header.css';
import logo from './../../assets/logo.png'
 
ReactDOM.createRoot(document.getElementById('root'));
function Header() {
    return (
        <div class="navbar">
        <img class="navbar__logo" src={logo} alt='Logo Kasa'></img>
            <div class="btn-nav">
                <nav><ul>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul></nav>
            </div>
        </div>
    )
}
export default Header