import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export const PageSelect = function PageSelector() {

    const pages = document.getElementsByClassName("link")
    
    return(
        pages
    )
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
        window.addEventListener("scroll", this.checkNav)
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
                            <li className="nav-bar-list-item"><Link to="/" class="link">Etusivu</Link></li>
                            <li className="nav-bar-list-item"><Link to="/verkkokauppa" class="link">Verkkokauppa</Link></li>
                            <li className="nav-bar-list-item"><Link to="/valesokkelista" class="link">Valesokkelista Yleisesti</Link></li>
                            <li className="nav-bar-list-item"><Link to="/suunnittelijoille" class="link">Suunnittelijoille</Link></li>
                            <li className="nav-bar-list-item"><Link to="/asennusohjeet" class="link">Asennusohjeet</Link></li>
                            <li className="nav-bar-list-item"><Link to="/terastassunedut" class="link">Terästassun Edut</Link></li>
                            <li className="nav-bar-list-item"><Link to="/yhteydenotto" class="link">Yhteydenotto</Link></li>                            
                        </ul>
                    </div>
                    <div id="cart-wrapper">
                        <Link to="/ostoskori" id="cart">
                            <img id="cartIcon" src={require(("./imgs/cart-icon1.png"))} alt="" /> 
                            <p id="cartText">Ostoskori</p>
                        </Link>
                    </div>
                    
                </div>
                
            </nav>
            
        )
    }
    
}

export default NavBar;