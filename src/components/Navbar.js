import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className ="navbar">

        <div className ="home-button">
          <Link to='/login'>
            <button>Login Page</button>
          </Link>
        </div>

        <div className ="home-button">
          <Link to='/home'>
            <button>Customer Home Page</button>
          </Link>
        </div>

        <div className ="search-bar">
          <input type="text" id="search-bar" value="Search" /><br></br>
        </div>   

        <div className ="cart">
          <Link to='/cart'>
            <button>See Cart 🛒</button>
          </Link>
        </div>  

        <div className ="create-farm">
          <Link to='/new-farm'>
            <button>Add New Farm</button>
          </Link>
        </div>  

    </div>
  );
};

export default Navbar 

