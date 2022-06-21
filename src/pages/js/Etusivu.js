import React from "react";
import '../css/Etusivu.css';
import { Link } from "react-router-dom";
 

function listener1() {
    let offset = window.pageYOffset;
    const parallax2 = document.getElementById("video-player-section")
    parallax2.style.backgroundPositionY = offset * 0.6 + "px";
}

class Etusivu extends React.Component {

    componentDidMount() {
        window.addEventListener("scroll", listener1)
        // console.log("Mounted")
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", listener1)
        // console.log("Dismounted")
    }

    render() {
        return(
            <div id="page">

                <div id="description-wrapper">
                    <div id="description-section-wrapper">

                        <div className="description-section">
                            <Link to="/verkkokauppa" className="description-image-link">
                                <img src={require("../../imgs/verkkokauppa.png")} alt="" />
                            </Link>
                            <div className="description-section-text">
                                <p><Link to="/">Verkkokaupassamme</Link> näet kaikki tuotteet hintoineen ja laajasta valikoimasta löydät tuotteet lähes jokaiseen valesokkeliin. Mikäli mallistostamme ei löydy juuri sinun kohteeseesi sopivaa mallia, niin ratkaisemme kyllä ongelman (kysy sähköpostitse).</p>
                            </div>
                        </div>

                        <div className="description-section">
                            <Link to="/valesokkelista" className="description-image-link">
                                <img src={require("../../imgs/valesokkelista.png")} alt="" />
                            </Link>
                            <div className="description-section-text">
                                <p className="centered-text"><Link to="/">Valesokkelista Yleisesti</Link> - Täältä voit lukea valesokkelista, sen historiasta ja siihen liittyvistä terveyshaitoista.</p>
                            </div>
                        </div>

                        <div className="description-section">
                            <Link to="/suunnittelijoille" className="description-image-link">
                                <img src={require("../../imgs/suunnittelijoille1.png")} alt="" />
                            </Link>
                            <div className="description-section-text">
                                <p className="centered-text"><Link to="/">Suunnittelijoille</Link> - Täältä saat ladattua Terästassun DWG malleja, puristus/nurjahdustestejä, ja muuta samanlaista.</p>
                            </div>
                        </div>

                    </div>

                    <div id="description-info">
                        <p id="info-text">
                            Terästassu on suunniteltu erityisesti valesokkelin puurunkorakenteiden korjauksiin. <br />
                            Tuotteillamme on korjattu jo yli <strong>tuhat</strong> kohdetta, niin omakoti- kuin rivitalokiinteistöjä. <br />
                            Meiltä NOPEAT ja LUOTETTAVAT toimitukset <strong>rahtivapaasti</strong> 1-4 arkipäivässä koko Suomeen. <br />
                            Asennuksen helppous ja varmuus, sekä valikoiman monipuolisuus ovat olleet Terästassumalliston suunnittelun lähtökohtana. 
                        </p>
                        <p>
                            Asentajilta saadun palautteen mukaan tässä on onnistuttu mainiosti.
                        </p>
                        <p>
                            <Link to="/terastassunedut">Lue lisää Terästassun eduista</Link>
                        </p>
                    </div>
                </div>

                <div id="video-player-section">
                    <div id="video-player-wrapper">
                        <div id="video-player-container">
                            <iframe id="video-player" title="video-player"
                            src="https://www.youtube.com/embed/v5u6y-AYd_o">
                            </iframe>
                        </div>
                    </div>
                 </div>

            </div>
        )
    }
    
}

export default Etusivu;