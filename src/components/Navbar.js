import React from 'react';
// import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className ="navbar">

        <div className ="home-button">
          <button>Home</button>
        </div>

        <div className ="search-bar">
          <input type="text" id="search-bar" value="Search" /><br></br>
        </div>   

        <div className ="cart">
          <button>See Cart 🛒</button>
        </div>  

    </div>
  );
};

export default Navbar 

