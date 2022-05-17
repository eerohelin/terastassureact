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
            <ul>
                <li><Link to="/">Etusivu</Link></li>
                <li><Link to="/verkkokauppa">Verkkokauppa</Link></li>
                <li><Link to="/valesokkelista">Valesokkelista</Link></li>
                <li><Link to="/suunnittelijoille">Suunnittelijoille</Link></li>
                <li><Link to="/asennusohjeet">Asennusohjeet</Link></li>
                <li><Link to="/terastassunedut">Terästassun Edut</Link></li>
                <li><Link to="/yhteydenotto">Yhteydenotto</Link></li>
            </ul>
        </nav>
        
    )
}

export default NavBar;