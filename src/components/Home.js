import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import Cart from './Cart'
import FarmCardContainer from './FarmCardContainer.js'
import Navbar from './Navbar.js'

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

  render(){
    return(
      <div className="home-page">
        <Navbar display={this.state.display} changeToHome={this.changeToHome} />

        <h1>Customer Home Page</h1>
        <FarmCardContainer addToCart={this.addToCart}/>


        {/* <h1>Farm Home Page</h1> */}

        {/* { this.state.display === "Home" ? <FarmCardContainer /> : null }
        { this.state.display === "Cart" ? <Cart /> : null} */}

        <Cart cart={this.state.cart} />
        

      </div>
    )
  }
}

export default Home