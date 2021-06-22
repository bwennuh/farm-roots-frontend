import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {

  render(){
    return(
      <div className="login-page">

        <h1 className="farm-roots">Farm Roots 🥕</h1>

        <h2>Enter username:</h2>
        <input value="username" /><br></br><br></br>

        <Link to='/home'>
          <button id="login-button">Login</button>
        </Link>


      
      </div>
    )
  }
}

export default Login