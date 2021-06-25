import React, { Component } from 'react';

import Cart from './Cart'
import FarmCardContainer from './FarmCardContainer.js'
import FarmerPage from './FarmerPage.js'

class Home extends Component {

  state = {
    display: "Home",
    searchText: "",
    farms: [],
    cart: []
  }

  // Changes the display to the cart
  changeToCart = () => {
    this.setState({display: "Cart"})
  }

   // Changes the display to the Home page
  changeToHome = () => {
    this.setState({display: "Home"})
  }

  addToCart = (name, price, info) => {
    this.setState({
      cart: [...this.state.cart, [name, price, info]]
    })
  }

  getFarmerPage = () => {
    let farm = this.props.farms.find(farm => farm.farmer_name === this.props.username)
    return farm
  }

  updateCart = (cart) => {
    this.setState({
      cart: cart
    })
  }

  render(){
    return(
      <div className="home-page">
        { this.props.checked === true ? 

          <div id="farmer-page">

            <h2 id="username-header">{`Logged in as: ${this.props.username}`}</h2>
            <FarmerPage farm={this.getFarmerPage()} products={this.props.products} deleteAProduct={this.props.deleteAProduct}/>

          </div>

          :

          <div id="customer-page">

            <h2 id="username-header">{`Logged in as: ${this.props.username}`}</h2>
            <button id="see-cart-button" onClick={() => this.changeToCart()}>See Cart</button>
            <button id="close-cart-button" onClick={() => this.changeToHome()}>Close Cart</button>
            { this.state.display === "Home" ? <FarmCardContainer farms={this.props.farms} addToCart={this.addToCart} products={this.props.products} /> : null }
        
            { this.state.display === "Cart" ? <Cart cart={this.state.cart} updateCart={this.updateCart}/> : null}

          </div> 
        }
         
        {/* { this.props.checked == true ? <h1>Farmer Home Page</h1> : <h1>Customer Home Page</h1> } */}

        {/* <h1>Customer Home Page</h1> */}
        {/* <h2>{`Username: ${this.props.username}`}</h2>
        <button onClick={() => this.seeCart()}>See Cart</button>
        <button onClick={() => this.closeCart()}>Close Cart</button> */}

        {/* { this.state.display === "Home" ? <FarmCardContainer farms={this.props.farms} addToCart={this.addToCart} products={this.props.products} /> : null }
        
        { this.state.display === "Cart" ? <Cart cart={this.state.cart} /> : null} */}

      </div>
    )
  }
}

export default Home