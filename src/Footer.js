import React from "react";
import './Footer.css'

function Footer() {
    return(
        <footer>
            <div id="footer">
                <p>
                    <strong>Yhteystiedot:</strong> <br />
                    <strong>terastassuoy@gmail.com</strong> <br />
                    <br />
                    Vastaamme sähköpostin tai lomakkeen kautta tulleisiin viesteihin yleensä alle 2h sisällä, kuitenkin viimeistään 12h kuluessa (myös viikonloppuisin). <br />
                    <br />
                    Toimintamme tehostamiseksi hoidamme yhteydenpidot pääsääntöisesti sähköpostin ja yhteydenottolomakkeen kautta. <br />
                    <br />
                    Y-tunnus 2872298-8 <br />

                    <img src={require("./imgs/maksutavat.jpg")} alt="" id="maksutavat" />
                </p>
            </div>
        </footer>
    )
}

export default Footer;