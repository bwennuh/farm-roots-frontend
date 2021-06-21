import './App.css';
import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import FarmPage from './components/FarmPage.js'
import Cart from './components/Cart.js'
import FarmForm from './components/FarmForm.js'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path={['/', '/login']}>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/farm-info'>
            <FarmPage />
          </Route>

          <Route path='/cart'>
            <Cart />
          </Route>

          <Route path='/new-farm'>
            <FarmForm />
          </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
