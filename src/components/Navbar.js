import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className ="navbar">

        <div className="login-button">
          <Link to='/login'>
            <button className="navbar-button" id="login-button">Login Page</button>
          </Link>
        </div>

        <div className="home-button">
          <Link to='/home'>
            <button className="navbar-button" id="home-button">Home Page</button>
          </Link>
        </div>

        <div className="search-bar">
          <input className="navbar-search" type="text" id="search-bar" value="Search" /><br></br>
        </div>   

        <div className="cart-button">
          <Link to='/cart'>
            <button className="navbar-button" id="cart-button">See Cart <span id="cart-emoji">🛒</span></button>
          </Link>
        </div>  

        <div className ="create-farm">
          <Link to='/new-farm'>
            <button className="navbar-button" id="create-farm-button">Add New Farm</button>
          </Link>
        </div>  

    </div>
  );
};

export default Navbar 

