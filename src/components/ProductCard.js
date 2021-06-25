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
                    <h4>Product Name: </h4>
                    <h3>{this.props.name}</h3>
                    <img className="fruit-pic" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg?crop=0.982xw:0.736xh;0,0.189xh&resize=1200:*"></img>
                    <p>Dates Available: 6/25/2021</p>
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