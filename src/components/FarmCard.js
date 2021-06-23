import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import FarmPage from './FarmPage';
import ProductCard from './ProductCard';

class FarmCard extends Component {

  showFarmInfoPage = () => {

  }

  render(){
    return(
      <div>
        
        <h2>Farm Name: {this.props.farm}</h2>

        {/* <Link to='/farm-info'>
          <button>Farm Info Page</button>
        </Link> */}

        <button>Farm Info Page</button>
        <FarmPage addToCart={this.props.addToCart} />


        {/* <Link to='/product'> */}
          <button>Add Product</button>
          {this.props.produce?.map(product => <ProductCard name={product.name} addToCart={this.props.addToCart}/> )}
          {/* <ProductCard /> */}
        {/* </Link> */}

      </div>

    )
  }
}

export default FarmCard