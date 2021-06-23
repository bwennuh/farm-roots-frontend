import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import FarmCard from './FarmCard.js'

class FarmCardContainer extends Component {

  state = {
    produce: []
  }


  sendProduceToCards = (id) => {
      let produce = this.props.products.filter(product => product.farm_id === id)
      console.log(produce)
      // this.setState({
      //   produce: produce
      // })
  }


  render(){

    let farmArray = this.props.farms


    // console.log(farmArray)
    // let productsArray = this.props.products

    return(
      <div>

        <h1>Farm Card Container</h1>

        {farmArray.map(farm => this.sendProduceToCards(farm.id))}
        
        {farmArray.map(farm => (<FarmCard farm={farm.name} addToCart={this.props.addToCart} produce = {this.state.produce}/>
         ))}
      

      </div>
    )
  }
}

export default FarmCardContainer