import React, { Component } from 'react';

import FarmPage from './FarmPage';
import ProductCard from './ProductCard';

class FarmCard extends Component {

  state = {
    display: ""
  }

  showFarmInfoPage = () => {

  }

  render(){
    return(
      <div>
        
        <h2>Farm Name: {this.props.farm}</h2>

        {/* <Link to='/farm-info'>
          <button>Farm Info Page</button>
        </Link> */}

        <h3>Products Available for Purchase:</h3>
        <ul>
          {this.props.produce.map(product => <li>{product.name}</li>)}
        </ul>

        <button value={this.props.id} onClick={(e) => this.props.changeToFarmPage(e)}>Farm Info Page</button>

        {/* <FarmPage addToCart={this.props.addToCart} /> */}

        <button>Add Product</button>
        {/* {this.props.produce?.map(product => <ProductCard name={product.name} addToCart={this.props.addToCart}/> )} */}

      </div>

    )
  }
}

export default FarmCard