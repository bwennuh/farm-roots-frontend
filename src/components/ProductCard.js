import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'


export default class ProductCard extends Component {

    state = {
        productNames: [],
        productPrices: [],
        datesAvailable: [],
    }

    sendToFarmPage = () => {
        // let x = "Brenna"
        // let price = 9
        // let info = "hey"
        // this.props.productCartInfo(x, price, info)

        let productName = this.props.name
        let price = 9
        let info = "hey"

        this.props.addToCart(productName, price, info)
    }

    render() {
        return (
            <div>
                <div>
                    <img ></img>
                    <h3>Product Name: {this.props.name}</h3>
                    <p>Dates Available</p>
                    <p>Price</p>
                </div>
                <button value = {"prods"} onClick={()=>this.sendToFarmPage()}>Add to Cart</button>

            </div>

        )
    }
}