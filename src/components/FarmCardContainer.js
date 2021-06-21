import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import FarmCard from './FarmCard.js'

class FarmCardContainer extends Component {

  render(){
    return(
      <div>

        <h1>Farm Card Container</h1>
        <FarmCard />
        <FarmCard />
        <FarmCard />
        <FarmCard />

      </div>
    )
  }
}

export default FarmCardContainer