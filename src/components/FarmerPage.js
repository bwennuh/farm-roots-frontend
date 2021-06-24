import React, { Component } from 'react';
import ProductCard from './ProductCard.js'
import Product from './Product.js'
import EditProduct from './EditProduct.js'

class FarmerPage extends Component {

  state = {
    display: "Home",
    product: {}
  }

  renderNewProductForm = () => {
    this.setState({
      display: "New Form"
    })
  }

  renderEditProductForm = (name, price, id) => {
    this.setState({
      display: "Edit Form",
      product: {name: name, price: price, farm_id: this.props.farm.id, id: id}
    })
  }

  changeToHome = () => {
    this.setState({
      display: "Home"
    })
  }

  render(){
       
    return(
      <div className="home-page">

        <h1>{this.props.farm?.name} Farm Information Page</h1>

        <h2>Bio: {this.props.farm?.bio}</h2>

        <h2>Current Product Offerings:</h2>
        <button onClick={() => this.renderNewProductForm()}>Add Product</button>

        { this.state.display === "Home" ? 
        this.props.products?.map(product => <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} addToCart={this.props.addToCart} farmerPage={true} renderEditProductForm={this.renderEditProductForm} deleteAProduct={this.props.deleteAProduct}/>)
        :
        null }

        { this.state.display === "New Form" ? <Product farmId={this.props.farm.id}/> : null }
        { this.state.display === "Edit Form" ? <EditProduct farmId={this.props.farm.id} product={this.state?.product} changeToHome={this.changeToHome}/> : null }


      </div>
    )
  }
}

export default FarmerPage