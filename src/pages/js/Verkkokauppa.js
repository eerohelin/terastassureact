import React, { useState} from "react";
import { AddToCart} from './Cart';
import '../css/Verkkokauppa.css';
import Select from 'react-select'

export const products = {
    tt125vakio : ["TT 125 Vakio", "30.70€", 'Asennusväli betonin ja puurungon väliin 125mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. "Haarukan" säätö välille 44mm - 52mm (kapeampiin runkoihin lisätään täytettä niin, että mitta vastaa paksuudeltaan edellämainittua). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt125pieli : ["TT 125 Pieli", "27.70€", 'Asennusväli betonin ja puurungon väliin 125mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. Asennus niin, että kahdella erikätisellä pielitassulla on kiinteä rakenneyhteys toisiinsa (kts. asennusohje). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt125xl : ["TT 125 XL", "34.50€", 'Asennusväli betonin ja puurungon väliin 125mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosaa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt125xlpieli : ["TT 125 XL Pieli", "30.50€", 'Asennusväli betonin ja puurungon väliin 125mm. Soveltuu käytettäväksi 4x4 ja 5x5 runkoihin. Asennus niin, että kahdella erikätisellä pielitassulla on kiinteä rakenneyhteys toisiinsa (kts. asennusohje). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt125xlnurkka : ["TT 125 XL Nurkka", "34.50€", 'Asennusväli betonin ja puurungon väliin 125mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) nurkkatolppiin. Soveltuu myös 5x5 (125mm) nurkkatolppiin. Materiaalina kuumasinkitty teräs (runko-osat M20).', "Terästassu+kiinnitysruuvit."],
    tt125xltupla : ["TT 125 XL Tupla", "67.00€", 'Asennusväli betonin ja puurungon väliin 125mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Teräsosien leveys yhteensä 90mm. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosaa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt150vakio : ["TT 150 Vakio", "31.00€", 'Asennusväli betonin ja puurungon väliin150mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. "Haarukan" säätö välille 44mm - 52mm (kapeampiin runkoihin lisätään täytettä niin, että mitta vastaa paksuudeltaan edellämainittua). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt150pieli : ["TT 150 Pieli", "28.00€", 'Asennusväli betonin ja puurungon väliin 150mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. Asennus niin, että kahdella erikätisellä pielitassulla on kiinteä rakenneyhteys toisiinsa (kts. asennusohje). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt150xl : ["TT 150 XL", "34.80€", 'Asennusväli betonin ja puurungon väliin 150mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosaa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt150xlpieli : ["TT 150 XL Pieli", "30.80€", 'Asennusväli betonin ja puurungon väliin 150mm. Soveltuu käytettäväksi 4x4 ja 5x5 runkoihin. Asennus niin, että kahdella erikätisellä pielitassulla on kiinteä rakenneyhteys toisiinsa (kts. asennusohje). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt150xlnurkka : ["TT 125 XL Pieli", "30.50€", 'Asennusväli betonin ja puurungon väliin 150mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) nurkkatolppiin. Soveltuu myös 5x5 (125mm) nurkkatolppiin. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt150xltupla : ["TT 150 XL Tupla", "68.00€", 'Asennusväli betonin ja puurungon väliin 150mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Teräsosien leveys yhteensä 90mm. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosaa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt200vakio : ["TT 200 Vakio", "31.60€", 'Asennusväli betonin ja puurungon väliin 200mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. "Haarukan" säätö välille 44mm - 52mm (kapeampiin runkoihin lisätään täytettä niin, että mitta vastaa paksuudeltaan edellämainittua). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt200pieli : ["TT 200 Pieli", "28.60€", 'Asennusväli betonin ja puurungon väliin 200mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. Asennus niin, että kahdella erikätisellä pielitassulla on kiinteä rakenneyhteys toisiinsa (kts. asennusohje). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt200xl : ["TT 200 XL", "35.40€", 'Asennusväli betonin ja puurungon väliin 200mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt200xlpieli : ["TT 200 XL Pieli", "31.40€", 'Asennusväli betonin ja puurungon väliin 200mm. Soveltuu käytettäväksi 4x4 ja 5x5 runkoihin. Asennus niin, että kahdella erikätisellä pielitassulla on kiinteä rakenneyhteys toisiinsa (kts. asennusohje). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt200xlnurkka : ["TT 200 XL Nurkka", "35.40€", 'Asennusväli betonin ja puurungon väliin 200mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) nurkkatolppiin. Soveltuu myös 5x5 (125mm) nurkkatolppiin. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt200xltupla : ["TT 200 XL Tupla", "70.00€", 'Asennusväli betonin ja puurungon väliin 200mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Teräsosien leveys yhteensä 90mm. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosaa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt225vakio : ["TT 225 Vakio", "31.90€", 'Asennusväli betonin ja puurungon väliin 225mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. "Haarukan" säätö välille 44mm - 52mm (kapeampiin runkoihin lisätään täytettä niin, että mitta vastaa paksuudeltaan edellämainittua). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt225pieli : ["TT 225 Pieli", "28.90€", 'Asennusväli betonin ja puurungon väliin 225mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. Asennus niin, että kahdella erikätisellä pielitassulla on kiinteä rakenneyhteys toisiinsa (kts. asennusohje). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt225xl : ["TT 225 XL", "35.70€", 'Asennusväli betonin ja puurungon väliin 225mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt225xlpieli : ["TT 225 XL Pieli", "31.70€", 'Asennusväli betonin ja puurungon väliin 225mm. Soveltuu käytettäväksi 4x4 ja 5x5 runkoihin. Asennus niin, että kahdella erikätisellä pielitassulla on kiinteä rakenneyhteys toisiinsa (kts. asennusohje). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt225xlnurkka : ["TT 225 XL Nurkka", "35.70€", 'Asennusväli betonin ja puurungon väliin 225mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) nurkkatolppiin. Soveltuu myös 5x5 (125mm) nurkkatolppiin. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt225xltupla : ["TT 225 XL Tupla", "71.00€", 'Asennusväli betonin ja puurungon väliin 225mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Teräsosien leveys yhteensä 90mm. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosaa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt350vakio : ["TT 350 Vakio", "35.90€", 'Asennusväli betonin ja puurungon väliin 350mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. "Haarukan" säätö välille 44mm - 52mm (kapeampiin runkoihin lisätään täytettä niin, että mitta vastaa paksuudeltaan edellämainittua). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt350pieli : ["TT 350 Pieli", "32.90€", 'Asennusväli betonin ja puurungon väliin 350mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. "Haarukan" säätö välille 44mm - 52mm (kapeampiin runkoihin lisätään täytettä niin, että mitta vastaa paksuudeltaan edellämainittua). Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt350xl : ["TT 350 XL", "39.70€", 'Asennusväli betonin ja puurungon väliin 350mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosaa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt350xlpieli : ["TT 350 XL Pieli", "35.70€", 'Asennusväli betonin ja puurungon väliin 350mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosaa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt350xlnurkka : ["TT 350 XL Nurkka", "39.70€", 'Asennusväli betonin ja puurungon väliin 350mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosaa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
    tt350xltupla : ["TT 350 XL Tupla", "79.00€", 'Asennusväli betonin ja puurungon väliin 350mm. Soveltuu käytettäväksi 4x4 (90 mm - 105 mm) runkotolppiin. Teräsosien leveys yhteensä 90mm. Soveltuu myös 5x5 (125mm) runkotolppiin, mikäli rungon alaosaa kavennetaan sivutukien korkeudelta vastaamaan 4x4 (100mm) runkomitoitusta. Materiaalina kuumasinkitty teräs (runko-osat M20).'],
}

const types = ["vakio", "pieli", "xl", "xlpieli", "xlnurkka", "xltupla"]
const lengths = ["125", "150", "200", "225", "350"]

var lengthOptions = [
    {value : "125", label : "125"},
    {value : "150", label : "150"},
    {value : "200", label : "200"},
    {value : "225", label : "225"},
    {value : "350", label : "350"},
]
var typeOptions = [
    {value : "vakio", label : "Vakio"},
    {value : "pieli", label : "Pieli"},
    {value : "xl", label : "XL"},
    {value : "xlpieli", label : "XL-Pieli"},
    {value : "xlnurkka", label : "XL-Nurkka"},
    {value : "xltupla", label : "XL-Tupla"}
]


function Product(props) { // PRODUCT CREATOR

    var imagePath = props.path + ".jpg"


    var filterType
    var filterLength
    var productIncludes

    types.forEach(function(type) {
        if (props.path.includes(type)) {
            filterType = type
            return filterType
        }
    })
    lengths.forEach(function(length) {
        if (props.path.includes(length)) {
            filterLength = length
            return filterLength
        }
    })

    if (filterType.includes("tupla")) {
        productIncludes = "2kpl (kuvanmukaiset) Terästassu+kiinnitysruuvit."
    } else {
        productIncludes = "Terästassu+kiinnitysruuvit."
    }

    return(
        <div className="vk-product-wrapper" value={filterType + " " + filterLength}>
            <img src={require("../../imgs/products/" + imagePath)} alt="" />
            <div className="vk-product-info-wrapper">
                <div className="vk-product-info-section">
                    <div className="vk-productName"><h3>{props.name}</h3></div>
                    <div className="vk-price">Hinta: {props.price}</div>
                    <div className="vk-productIncludes">Toimitussisältö: {productIncludes}</div>
                    <div className="vk-product-description">
                        <p>{props.description}</p>
                        <p><br /> Puristus- ja nurjahdustestin tulos 13 600kg (testi suoritettu TT 350 mallille).</p>
                    </div>
                    <div className="vk-product-delivery-time">
                        Toimitusaika 1-4 arkipäivää.
                    </div>
                    <div className="vk-add-to-cart-wrapper">
                        <button onClick={() => AddToCart(props.path, props.name)}>
                            Lisää Ostoskoriin
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

function filterProducts(type, length) {
    var productValue
    var productValues
    var products = document.getElementsByClassName("vk-product-wrapper")

    for (var item2 of products) {
        item2.style.display = "none";
    }

    if (type === null && length === null) {
        for (var item3 of products) {
            item3.style.display = "flex";
        }
    }

    if (type != null) {
        type = type["value"]
    }
    if (length != null) {
        length = length["value"]
    }
    
    if (length === null || type === null) {
        for (var item of products) {
            productValue = item.getAttribute("value")
            productValues = productValue.split(" ")
            if (productValues[0] === type || productValues[1] === length) {
                console.log(item)
                console.log(productValues[0], productValues[1])
                item.style.display = "flex";
            }
        }
    } else {
        for (var item1 of products) {
            productValue = item1.getAttribute("value")
            productValues = productValue.split(" ")
            if (productValues[0] === type && productValues[1] === length) {
                console.log(item1)
                console.log(productValues[0], productValues[1])
                item1.style.display = "flex";
            }
        }
    }
    
}

function Verkkokauppa() { // MAIN


    const [selectValueType, setValueType] = useState(null);

    const handleChangeType = (value) => {
        setValueType(value);
        filterProducts(value, selectValueLength)
    };
    const [selectValueLength, setValueLength] = useState(null);

    const handleChangeLength = (value) => {
        setValueLength(value);
        filterProducts(selectValueType, value)
    };

    return(
        <div id="page">

            <div id="vk-shop-container">
                <div id="vk-shop-wrapper">
                    <div id="vk-shop-title-wrapper">
                        <div id="vk-shop-title">
                            <h1>Tuotteet</h1>
                        </div>
                    </div>

                    <div id="vk-shop">
                        <div id="vk-product-list">
                            {Object.entries(products).map(([key, value]) => (
                                <Product name={value[0]} price={value[1]} path={key} description={value[2]}/>
                            ))}
                        </div>
                        <div id="vk-product-filter-wrapper">
                            <div id="vk-product-filter-container">
                                <div id="vk-filter-title-wrapper">
                                    <div id="vk-filter-title">
                                        <h1>Tuotehaku</h1>
                                        
                                    </div>
                                </div>
                                <div id="vk-filter-body-wrapper">
                                    <div id="vk-filter-filters">
                                        <Select 
                                        options={typeOptions}
                                        isClearable="true"
                                        isSearchable="true"
                                        placeholder="Malli"
                                        onChange={handleChangeType}
                                        value={selectValueType}
                                        className="vk-filter-select"
                                        />
                                        <br />
                                        <Select
                                        options={lengthOptions}
                                        isClearable="true"
                                        isSearchable="true"
                                        placeholder="Korkeus"
                                        onChange={handleChangeLength}
                                        value={selectValueLength}
                                        className="vk-filter-select"
                                        />
                                        <br />
                                    </div>
                                </div>
                                <div id="vk-filter-footer">
                                    <button onClick={function() {setValueLength(null); setValueType(null); filterProducts(null, null); localStorage.clear()}}>Tyhjennä</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="vk-order-info-container">
                <div id="vk-order-info-wrapper">
                    <div id="vk-order-info">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verkkokauppa;