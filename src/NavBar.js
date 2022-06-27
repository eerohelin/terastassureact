import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UpdateCart } from './pages/js/Cart';
import './NavBar.css';

export const PageSelect = function PageSelector() {

    const pages = document.getElementsByClassName("link")
    
    return(
        pages
    )
}

function CloseCartNotif() {
    const cartNotifWrapper = document.getElementById("cartNotifWrapper")
    cartNotifWrapper.style.opacity = "0"
}

export const CartNotif = function CartNotif(item) {
    const cartNotifText = document.getElementById("cartNotifText")
    const cartNotifWrapper = document.getElementById("cartNotifWrapper")
    cartNotifText.innerHTML = item + " Lisätty ostoskoriin"
    cartNotifWrapper.style.opacity = "1"

}

export const ResizeListener = function ResizeListener() {
    const root = document.getElementById("root")

    if (root !== null) {
        var navWidth = Math.round(window.innerWidth * 0.027)
        root.style.setProperty("--nav-height", navWidth + "px")
    } else {
        // Pass
    }
    
}

class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {
            navBar: true
        }
    }

    checkNav= () => {
        
        let offset = window.pageYOffset
        if (offset < 350) {
            this.setState({navBar: true})
        }
        else {
            this.setState({navBar: false})
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.checkNav, {passive: true})
        UpdateCart()
        ResizeListener()
        // console.log("Mounted")
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.checkNav)
        // console.log("Dismounted")
    }

    render () {
        return(
            <nav className={this.state.navBar ? 'navbar showNav' : 'navbar'}>
                <div id="title-container">
                <div id="main-title">Terästassu Oy</div>
                </div>
                <div id="nav-bar-container">
                    <div id="nav-bar-links">
                        <ul id="nav-bar-list">
                            <li className="nav-bar-list-item"><Link to="/" className="link">Etusivu</Link></li>
                            <li className="nav-bar-list-item"><Link to="/verkkokauppa" className="link">Verkkokauppa</Link></li>
                            <li className="nav-bar-list-item"><Link to="/valesokkelista" className="link">Valesokkelista Yleisesti</Link></li>
                            <li className="nav-bar-list-item"><Link to="/suunnittelijoille" className="link">Suunnittelijoille</Link></li>
                            <li className="nav-bar-list-item"><Link to="/asennusohjeet" className="link">Asennusohjeet</Link></li>
                            <li className="nav-bar-list-item"><Link to="/terastassunedut" className="link">Terästassun Edut</Link></li>
                            <li className="nav-bar-list-item"><Link to="/yhteydenotto" className="link">Yhteydenotto</Link></li>                            
                        </ul>
                    </div>

                    <div id="cart-wrapper">
                        <Link to="/ostoskori" id="cart" >
                            <img id="cartIcon" src={require(("./imgs/cart-icon1.png"))} alt="" /> 
                            <p id="cartText">Ostoskori (0)</p>
                        </Link>
                        <div id="cartNotifWrapper">
                            <p id="cartNotifText"></p>
                            <button id="cartNotifClose" onClick={ CloseCartNotif }>X</button>
                        </div>
                    </div>
                    
                </div>
                
            </nav>
            
        )
    }
    
}

export default NavBar;