import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import Cart from './Cart'
import FarmCardContainer from './FarmCardContainer.js'
import FarmPage from './FarmPage.js'

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

  seeCart = () => {
    this.setState({
      display: "Cart"
    })
  }

  closeCart = () => {
    this.setState({
      display: "Home"
    })
  }

  render(){
    return(
      <div className="home-page">
        
        { this.props.checked == true ? <h1>Farmer Home Page</h1> : <h1>Customer Home Page</h1> }
        {/* <h1>Customer Home Page</h1> */}
        <h2>{`Username: ${this.props.username}`}</h2>
        <button onClick={() => this.seeCart()}>See Cart</button>
        <button onClick={() => this.closeCart()}>Close Cart</button>

        { this.state.display === "Home" ? <FarmCardContainer farms={this.props.farms} addToCart={this.addToCart} products={this.props.products} /> : null }


        {/* { this.state.display === "Home" ? <FarmCardContainer farms={this.props.farms} addToCart={this.addToCart} products={this.props.products} changeToFarmPage={this.changeToFarmPage}/> : null } */}

        {/* { this.state.display === "Farm" ? <FarmPage /> : null} */}
        
        { this.state.display === "Cart" ? <Cart cart={this.state.cart} /> : null}

      </div>
    )
  }
}

export default Home