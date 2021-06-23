import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'


export default class ProductCard extends Component {

    state = {
        farmerPage: this.props.farmerPage,
        productNames: [],
        productPrices: [],
        datesAvailable: [],
    }

    sendToFarmPage = () => {
        let productName = this.props.name
        let price = this.props.price
        let info = "fruit"

        this.props.addToCart(productName, price, info)
    }

    render() {
        return (
            <div>
                <div>
                    <img></img>
                    <h3>Product Name: {this.props.name}</h3>
                    <p>Dates Available</p>
                    <p>Price: ${this.props.price}</p>
                </div>
                {this.state.farmerPage === true ? <button value = {"prods"} onClick={() => console.log("Add edit produce logic")}>Edit Produce</button> : <button value = {"prods"} onClick={()=>this.sendToFarmPage()}>Add to Cart</button> }
                

            </div>

        )
    }
}