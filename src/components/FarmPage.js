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


  render(){
       
    return(
      <div className="home-page">

        <button onClick={() => this.props.changeToAllFarms()}>Back to All Farms</button>
        <h1>{this.props.farm.name} Farm Information Page</h1>

        <h2>Bio: <span>{this.props.farm.bio}</span></h2>


        {/* <ProductCard productCartInfo={this.productCartInfo} addToCart={this.props.addToCart}/> */}

        {this.props.produce?.map(product => <ProductCard name={product.name} price={product.price} addToCart={this.props.addToCart} farmerPage={false}/> )}

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