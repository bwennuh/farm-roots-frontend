import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import ProductCard from './ProductCard'
import Cart from './Cart';
// import FarmPage from './FarmPage.js'

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

  // addtoCart = (e) => {
  //   console.log (e)
  // }



  render(){
       
    return(
      <div className="home-page">

        <h1>Farm Information Page</h1>

        <ProductCard productCartInfo={this.productCartInfo} addToCart={this.props.addToCart}/>

        <div style = {{display:"none"}}>
          <Switch>
            <Route path='/cart'>
              <Cart productNames = {this.state.productNames} productPrices = {this.state.productPrices} productInfo = {this.state.productInfo}/>
            </Route>
          </Switch>

        </div>

      </div>
    )
  }
}

export default FarmPage