import React, { Component } from 'react'


export default class ProductCard extends Component {

    state = {
        farmerPage: this.props.farmerPage,
        productNames: [],
        productPrices: [],
        datesAvailable: []
    }

    sendToFarmPage = () => {
        let productName = this.props.name
        let price = this.props.price
        let info = "fruit"

        this.props.addToCart(productName, price, info)
    }


    render() {

        return (
            <div className="product-card">
                <div>
                    <img></img>
                    <h3>Product Name: {this.props.name}</h3>
                    <p>Dates Available</p>
                    <p>Price: ${this.props.price}</p>
                </div>
                { this.state.farmerPage === true ? 
                    <div>
                        <button value = {"prods"} onClick={() => this.props.renderEditProductForm(this.props.name, this.props.price, this.props.id)}>Edit Produce</button>
                        <button value = {"prods"} onClick={() => this.props.deleteAProduct(this.props.id)}>Delete Produce</button>
                    </div>
                     : 
                <button className="add-to-cart-button" value = {"prods"} onClick={()=>this.sendToFarmPage()}>Add to Cart</button> }
                

            </div>

        )
    }
}