import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import FarmCard from './FarmCard.js'

import FarmPage from './FarmPage.js'

class FarmCardContainer extends Component {

  state = {
    produce: [],
    display: "All",
    farmId: 0,
    farm: {}
  }

  sendProduceToCards = (id) => {
      let produce = this.props.products.filter(product => product.farm_id === id)
      // this.setState({
      //   produce: produce
      // })
      return produce
  }

  changeToFarmPage = (e) => {
    this.findFarmPage(+e.target.value)

    this.setState({
      display: "Farm",
      farmId: +e.target.value
    })
  }

  changeToAllFarms = () => {
    this.setState({
      display: "All"
    })
  }

  findFarmPage = (id) => {
    let farm = this.props.farms.find(farm => farm.id === id)
    let produce = this.props.products.filter(product => product.farm_id === farm.id)
    this.setState({
      farm: farm,
      produce: produce
    })
  }

  render(){

    let farmArray = this.props.farms

    return(
      <div>

        { this.state.display === "All" ? farmArray.map(farm => (<FarmCard key={farm.id} id={farm.id} farm={farm.name} produce={this.sendProduceToCards(farm.id)} changeToFarmPage={this.changeToFarmPage}/>
         )) : null }

        { this.state.display === "Farm" ? <FarmPage farm={farmArray.find(farm => farm.id === this.state.farmId)} produce={this.state.produce} addToCart={this.props.addToCart} changeToAllFarms={this.changeToAllFarms}/> : null }

      </div>
    )
  }
}

export default FarmCardContainer