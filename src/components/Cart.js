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

  deleteCartItem = (index) => {
    let deletedItem = this.props.cart.pop(index)
    let updatedCart = this.props.cart
    console.log(deletedItem)
    console.log(updatedCart)
    this.props.updateCart(updatedCart)
  }

  render(){
    return(
      <div className="cart-display">

        <h1>Customer Cart Page</h1>
        {/* <ul>
          {this.showCartProducts()}
        </ul> */}
        <h2>Items in Cart:</h2>
        {/* <ol className="cart-list"> 
          {this.props.cart.map(cartArray => (
          <li className="cart-list-item">
            {cartArray[0]} - price: ${cartArray[1]}, info: {cartArray[2]}
            </li>
          ))}
        </ol> */}

        <ol className="cart-list"> 
          {this.props.cart.map((cartArray, index) => (
          <li className="cart-list-item">
            <span className="delete-cart-item-button">{cartArray[0]}<button id={+index} onClick={() => this.deleteCartItem(+index)}>X</button></span>
            <ul>
              <li>{`Price: $${cartArray[1]}`}</li>
              <li>{`Info: ${cartArray[2]}`}</li>
            </ul>
          </li>
          ))}
        </ol>

        <h2>Cart Total:</h2>
        <h3>${this.getCartTotal()}</h3>
        <h3>Number of Items: {this.props.cart.length}</h3>

      </div>
    )
  }
}

export default Cart