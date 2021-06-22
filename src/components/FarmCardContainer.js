import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import FarmCard from './FarmCard.js'

class FarmCardContainer extends Component {



  render(){

    let farmArray = ["Farm 1", "Farm 2", "Farm 3"]
    let productsArray = ["banana", "apple", "carrot", "corn"]

    return(
      <div>

        <h1>Farm Card Container</h1>
        <FarmCard farm="Brenna" addToCart={this.props.addToCart} products={productsArray}/>
        {farmArray.map(farm => <FarmCard farm={farm} addToCart={this.props.addToCart} products={productsArray} />)}

      </div>
    )
  }
}

export default FarmCardContainer