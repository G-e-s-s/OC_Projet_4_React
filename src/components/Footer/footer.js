import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../styles/footer.css';
import logoFooter from './../../assets/logoFooter.png'
 
ReactDOM.createRoot(document.getElementById('root'));
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