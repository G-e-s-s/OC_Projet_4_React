import React from 'react';
import '../../styles/footer.scss';
import logoFooter from './../../assets/logoFooter.png'
 
function Footer() {
    return (
        <div id="blackBar">
            <div className="logoFooter">
            <img src={logoFooter} alt="Logo Kasa"></img>
            </div>
            <p className="footerItem">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer