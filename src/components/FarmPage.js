import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import ProductCard from './ProductCard'
import Cart from './Cart';
import FarmPage from './FarmPage.js'

class FarmPage extends Component {

  state = {
    productNames: [],
    productPrices: [],
    productInfo: [],
  }

  productCartInfo = (name, price, info) => {
    this.setState({
      productNames: [...this.state.productNames, name],
      productPrices: [...this.state.productPrices, price],
      productInfo: [...this.state.productInfo, info]
    })
  }

  addtoCart = (e) => {
    console.log (e)

  }


  render(){
       
    return(
      <div className="home-page">

        <h1>Farm Information Page</h1>

        <ProductCard productCartInfo = {this.productCartInfo}/>

        <div style = {{display:"none"}}>
                <Cart productNames = {this.state.productNames} productPrices = {this.state.productPrices} productInfo = {this.state.productInfo}/>
        </div>

      </div>
    )
  }
}

export default FarmPage