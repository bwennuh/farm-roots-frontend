import React, { Component } from 'react';
import ProductCard from './ProductCard.js'

class FarmerPage extends Component {


  render(){
       
    return(
      <div className="home-page">

        <h1>{this.props.farm.name} Farm Information Page</h1>

        <h2>Bio: {this.props.farm.bio}</h2>

        <h2>Current Product Offerings:</h2>

        {this.props.products?.map(product => <ProductCard name={product.name} price={product.price} addToCart={this.props.addToCart} farmerPage={true}/> )}

      </div>
    )
  }
}

export default FarmerPage