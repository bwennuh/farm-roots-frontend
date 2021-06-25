import React, { Component } from 'react';

class FarmCard extends Component {

  state = {
    display: ""
  }

  showFarmInfoPage = () => {

  }

  render(){
    return(
      <div className="farm-card">
        
        <h3>Farm Name:</h3>
        <h2>{this.props.farm}</h2>

        <img src="https://images-na.ssl-images-amazon.com/images/I/616x1dTdTaL.jpg"></img>

        {/* <Link to='/farm-info'>
          <button>Farm Info Page</button>
        </Link> */}

        <h3>Products Available for Purchase:</h3>
        <ul className="farm-products-list">
          {this.props.produce.map(product => <li className="list-product">{product.name}</li>)}
        </ul>

        <button className="farm-info-button" value={this.props.id} onClick={(e) => this.props.changeToFarmPage(e)}>Farm Info Page</button>

        {/* <FarmPage addToCart={this.props.addToCart} /> */}

        {/* {this.props.produce?.map(product => <ProductCard name={product.name} addToCart={this.props.addToCart}/> )} */}

      </div>

    )
  }
}

export default FarmCard