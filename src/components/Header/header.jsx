import React from 'react';
import './header.scss';
import logo from './../../assets/logo.png';
import '../../pages/APropos/APropos';
import {Link, useLocation} from 'react-router-dom';
 
function Header() {
    const page = useLocation();
    const match1 = ("/" === page.pathname || "/home" === page.pathname);
    const match2 = ("/apropos" === page.pathname);
    return (
        <div className="navbar">
        <img className="navbar__logo" src={logo} alt='Logo Kasa'></img>
            <div className="btn-nav">
                <nav><ul>
                    <Link to='/'><li className={match1 ? "souligne":""} >Accueil</li></Link>
                    <Link to='/apropos'><li className={match2 ? "souligne":""} >A Propos</li></Link>
                </ul></nav>
            </div>
        </div>
    )
}
export default Header