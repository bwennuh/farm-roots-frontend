import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class Cart extends Component {


  state = {
    productNames: [],
    productPrices: [],
    productInfo: [],
  }

  showCartProducts = () => {
    let productNames = this.props.productNames
    console.log(productNames)

    // productNames.map(name => {
    //   <li>{name}</li>
    // })
  }

  getCartTotal = () => {
    let prices = this.props.cart.map(product => product[1])

    let total = prices.reduce(function(a,b){
      return a + b
    }, 0)

    return total
  }


  render(){
    return(
      <div>

        <h1>Customer Cart Page</h1>
        {/* <ul>
          {this.showCartProducts()}
        </ul> */}
        <h2>Items in Cart:</h2>
        <ol> 
          {this.props.cart.map(cartArray => <li>{cartArray[0]} - price: ${cartArray[1]}, info: {cartArray[2]}</li>)}
        </ol>

        <h2>Cart Total:</h2>
        <h3>${this.getCartTotal()}</h3>

      </div>
    )
  }
}

export default Cart