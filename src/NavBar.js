import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';




function NavBar() {

    const [navBar, setNavBar] = useState(true)

    function checkNav() { // Show nav when scrolled
        let offset = window.pageYOffset
        if (offset < 350) {
            setNavBar(true)
        }
        else {
            setNavBar(false)
        }
    }

    window.addEventListener("scroll", checkNav)
    return(
        <nav className={navBar ? 'navbar showNav' : 'navbar'}>
            <div id="main-title">Terästassu Oy</div>
            <div id="nav-bar-container">
                <div id="nav-bar-links">
                    <ul id="nav-bar-list">
                        <li className="nav-bar-list-item"><Link to="/" class="link">Etusivu</Link></li>
                        <li className="nav-bar-list-item"><Link to="/verkkokauppa" class="link">Verkkokauppa</Link></li>
                        <li className="nav-bar-list-item"><Link to="/valesokkelista" class="link">Valesokkelista</Link></li>
                        <li className="nav-bar-list-item"><Link to="/suunnittelijoille" class="link">Suunnittelijoille</Link></li>
                        <li className="nav-bar-list-item"><Link to="/asennusohjeet" class="link">Asennusohjeet</Link></li>
                        <li className="nav-bar-list-item"><Link to="/terastassunedut" class="link">Terästassun Edut</Link></li>
                        <li className="nav-bar-list-item"><Link to="/yhteydenotto" class="link">Yhteydenotto</Link></li>
                        
                        
                    </ul>
                </div>
                <div id="cart-wrapper">
                    <Link to="/ostoskori" id="cart"><img id="cartIcon" src={require(("./imgs/cart-icon1.png"))} alt="" /> Ostoskori</Link>
                </div>
                
            </div>
            
        </nav>
        
    )
}

export default NavBar;