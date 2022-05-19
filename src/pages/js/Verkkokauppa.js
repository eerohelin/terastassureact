import React, { useState} from "react";
import '../css/HeaderPadding.css';
import '../css/Verkkokauppa.css';
import Select from 'react-select'

const products = {
    tt125vakio : ["TT 125 Vakio", "5€"],
    tt150pieli : ["TT 150 Pieli", "15€"]
}

const types = ["vakio", "pieli", "xl", "kynnys"]
const lengths = ["125", "150", "350"]

var lengthOptions = []
var typeOptions = []
var filterType1
var filterLabel
var filterLength1

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function createOptions(key) {
    types.forEach(function(type) {
        if (key.includes(type)) {
            filterType1 = type
            filterLabel = capitalizeFirstLetter(type)
        }
    })
    lengths.forEach(function(length) {
        if (key.includes(length)) {
            filterLength1 = length
        }
    })
    lengthOptions.push({value : filterLength1, label : filterLength1})
    typeOptions.push({value : filterType1, label : filterLabel})
}

Object.entries(products).map(([key, value]) => (
    createOptions(key)
))


function Product(props) { // PRODUCT CREATOR

    var imagePath = props.path + ".jpg"


    var filterType
    var filterLength

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

    return(
        <div className="vk-product-wrapper" value={filterType + " " + filterLength}>
            <img src={require("../../imgs/products/" + imagePath)} alt="" />
            <div className="vk-product-info-section">
                <div className="vk-productName"><h3>{props.name}</h3></div>
                <div className="vk-price">Hinta: {props.price}</div>
                <div className="vk-product-description">
                    <p>Asennusväli betonin ja puurungon väliin125mm. Soveltuu käytettäväksi 2x4, 2x5 ja 2x6 runkoihin. "Haarukan" säätö välille 44mm - 52mm (kapeampiin runkoihin lisätään täytettä niin, että mitta vastaa paksuudeltaan edellämainittua). Materiaalina kuumasinkitty teräs (runko-osat M20).</p>
                    <p><br /> Puristus- ja nurjahdustestin tulos 13 600kg (testi suoritettu TT 350 mallille).</p>
                </div>
                <div className="vk-add-to-cart-wrapper">
                    <button>
                        Lisää Ostoskoriin
                    </button>
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
            <div id="vk-title-wrapper">
                <div id="vk-title-section">
                    <div id="vk-title-text">
                        <h1>Verkkokauppa</h1>
                        <h3>Mikäli mallistostamme ei löydy juuri sinun kohteeseesi sopivaa mallia, niin ratkaisemme kyllä ongelman (kysy sähköpostitse).</h3>
                    </div>
                </div>
            </div>

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
                                <Product name={value[0]} price={value[1]} path={key}/>
                            ))}
                        </div>
                        <div id="vk-product-filter-wrapper">
                            <div id="vk-filter-title-wrapper">
                                <div id="vk-filter-title">
                                    <h1>Tuote Filtteri</h1>
                                    
                                </div>
                            </div>
                            <div id="vk-filter-body-wrapper">
                                <div id="vk-filter-filters">
                                    <Select 
                                    options={typeOptions}
                                    isClearable="true"
                                    isSearchable="true"
                                    onChange={handleChangeType}
                                    value={selectValueType}
                                    />
                                    <Select
                                     options={lengthOptions}
                                     isClearable="true"
                                     isSearchable="true"
                                     onChange={handleChangeLength}
                                     value={selectValueLength}
                                     />
                                </div>
                            </div>
                            <div id="vk-filter-footer">
                                <button onClick={function() {setValueLength(null); setValueType(null); filterProducts(null, null)}}>Tyhjennä</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verkkokauppa;