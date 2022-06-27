import React from "react";
import { useState, useEffect } from 'react';
import { CartNotif } from '../../NavBar';
import { products } from './Verkkokauppa';
import '../css/Cart.css';


export const UpdateCart = function UpdateCart() {
    const cart = document.getElementById("cartText")
    cart.innerHTML = "Ostoskori (" + localStorage.length + ")"
}
 
export const AddToCart = function AddToCart(item, name) {
    if (typeof(localStorage.getItem(item)) !== "object") {
        // Pass
    } else {
        localStorage.setItem(item, [1, name]);
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            console.log(key + " : " + localStorage.getItem(key));
            UpdateCart()
        }
        CartNotif(name)
    }
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function UpdateTotalPrice() {
    const totalPriceAlv = document.getElementById("shopcart-total-price-alv")
    const totalPriceNoAlv = document.getElementById("shopcart-total-price-noalv")
    let keys = Object.keys(localStorage);
    var numbers = []
    for (let key of keys) {
        var price = products[key][1]
        var totalPrice = parseFloat(price) * parseFloat(localStorage.getItem(key))
        numbers.push(totalPrice)
    }
    var sum = 0
    for (let i=0; i<numbers.length; i++) {
        sum += numbers[i]
    }
    var newSum = (roundToTwo(sum)).toFixed(2)
    var alvCalc = (newSum/100) * 24
    var noAlv = (Math.round(((newSum - alvCalc) + Number.EPSILON) * 100) / 100).toFixed(2)
    totalPriceAlv.innerHTML = "<strong>Tuotteet Yhteensä: " + newSum + "€  </strong>(Sis. Alv)"
    totalPriceNoAlv.innerHTML = "Tuotteet Yhteensä: " + noAlv + "€ (Alv. 0)"
}

function CreateItems() {
    let items = Object.keys(localStorage);
    return(
    Object.entries(items).map(([key, value]) => (
        <ItemCreator item={value}/>
    ))
    )
}

function ItemCreator(props) {
    var text = localStorage.getItem(props.item)
    var item = text.split(",")

    var title = products[props.item][0]
    var price = products[props.item][1]
    
    useEffect(() => {
        var amount = document.getElementById(props.item)
        var cartPrice = document.getElementById(props.item + "price")
        amount.onchange = function() {
            var newPrice = parseFloat(price) * parseFloat(amount.value)
            cartPrice.innerHTML = (newPrice).toFixed(2) + "€"
            localStorage.setItem(props.item, amount.value)
            UpdateTotalPrice()
        }
    })


    return(
        <div className="shopcart-item-wrapper" id={props.item + "1"}>
            <div className="shopcart-item-title-container">
                <div className="shopcart-item-title">{title}</div>
            </div>
            <div id="shopcart-item-price-container">
                <div className="shopcart-item-price" id={props.item + "price"}>{price}</div>
            </div>
            <div id="shopcart-item-amount-container">
                <input type="number" min={1} id={props.item} className="shopcart-item-amount" defaultValue={parseInt(item[0])} />
            </div>
            <div id="shopcart-item-remove-button-container">
                <button className="shopcart-item-remove-button" onClick={() => {document.getElementById(props.item + "1").remove(); localStorage.removeItem(props.item); UpdateCart(); UpdateTotalPrice()}}>Poista</button>
            </div>
        </div>
    )
}


class Ostoskori extends React.Component {

    componentDidMount() {
        UpdateTotalPrice()
    }

    render() {
        return(
        <div id="page">
            <div id="shopcart-wrapper">
                <div id="shopcart-title-container">
                    <div id="shopcart-title-wrapper">
                        <div id="shopcart-title">
                            <h1>Tuotteet</h1>
                        </div>
                    </div>
                </div>

                

                <div id="shopcart-items-container">
                    <div id="shopcart-labels-container">
                        <div id="shopcart-label-product">Tuote</div>
                        <div id="shopcart-label-price">Hinta</div>
                        <div id="shopcart-label-amount">Määrä</div>
                        <div>&nbsp;</div>
                    </div>
                    <div id="shopcart-items">
                        {CreateItems()}
                    </div>
                </div>
                
                <div id="shopcart-bottom-menu-wrapper">
                    <div id="shopcart-bottom-menu-container">
                        <button id="shopcart-empty-cart-button" onClick={() => {
                            var items = document.querySelectorAll(".shopcart-item-wrapper")
                            for (let item of items) {
                                item.remove()
                            }
                            localStorage.clear(); 
                            UpdateCart(); 
                            UpdateTotalPrice()
                            }}>
                            Tyhjennä Ostoskori
                        </button>
                        <div id="shopcart-total-price-alv">
                            <strong>Tuotteet Yhteensä:</strong>
                        </div>
                        <div id="shopcart-total-price-noalv">
                            Tuotteet Yhteensä:
                        </div>
                        <button id="shopcart-continue-shopping-button">
                            Jatka Ostoksia
                        </button>
                        <button id="shopcart-checkout-button">
                            Kassalle
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}

export default Ostoskori;