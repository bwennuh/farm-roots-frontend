import './App.css';
import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import FarmPage from './components/FarmPage.js'
import Cart from './components/Cart.js'
import FarmForm from './components/FarmForm.js'
import Product from './components/Product.js'

class App extends Component {

  state = {
    username: "",
    checked: false,
    display: "login"
  }

  getUsername = (user, checked) => {
    this.setState({
      username: user,
      checked: checked
    })
  }

  changeToHome = () => {
    this.setState({
      display: "home"
    })
  }

  changeToLogin = () => {
    this.setState({
      display: "login"
    })
  }



  
  
  render(){
    return (
      <div className="App">
        <Navbar changeToLogin = {this.changeToLogin}/>

        { this.state.display === "home" ? <Home changeToLogin = {this.changeToLogin} username = {this.state.username} checked = {this.state.checked}/> : null }
        { this.state.display === "login" ? <Login changeToHome = {this.changeToHome} getUsername = {this.getUsername}/> : null }


        <Switch>
          <Route path='/farm-info'>
            <FarmPage />
          </Route>

          {/* <Route path='/cart'>
            <Cart />
          </Route> */}

          <Route path='/new-farm'>
            <FarmForm />
          </Route>

          <Route path='/product'>
            <Product />
          </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
