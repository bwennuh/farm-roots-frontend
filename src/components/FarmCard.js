import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class FarmCard extends Component {

  render(){
    return(
      <div>
        
        <h2>Farm Cards</h2>

        <Link to='/farm-info'>
          <button>Farm Info Page</button>
        </Link>

      </div>

    )
  }
}

export default FarmCard