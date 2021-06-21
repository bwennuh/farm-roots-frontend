import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import FarmCardContainer from './FarmCardContainer.js'

class Home extends Component {

  render(){
    return(
      <div className="home-page">

        <h1>Customer Home Page</h1>
        <FarmCardContainer />

        <h1>Farm Home Page</h1>
        

      </div>
    )
  }
}

export default Home