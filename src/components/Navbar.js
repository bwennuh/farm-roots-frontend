import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <div className ="navbar">

        <div className="login-button">
            <button className="navbar-button" id="login-button" onClick = {() => props.changeToLogin()}>Login Page</button>
        </div>

        <div className="home-button">
          <button className="navbar-button" id="home-button" onClick = {() => props.changeToHome()}>Home Page</button>
        </div>

        <div className ="create-farm">
          <button className="navbar-button" id="create-farm-button" onClick={() => props.changeToNewFarmForm()}>Add New Farm</button>
        </div>  

        <div className="search-bar">
          <input className="navbar-search" type="text" id="search-bar" value="Search" /><br></br>
        </div>   

        {/* <div className="cart-button">
            <button className="navbar-button" id="cart-button">See Cart <span id="cart-emoji">🛒</span></button>
        </div>   */}

    </div>
  );
};

export default Navbar 

