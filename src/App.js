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

const BASE_URL = 'http://localhost:3001/'
const customers_URL = 'http://localhost:3001/customers/'
const purchases_URL = 'http://localhost:3001/purchases/'
const products_URL = 'http://localhost:3001/products/'
const farms_URL = 'http://localhost:3001/farms/'

class App extends Component {



  state = {
    username: "",
    checked: false,
    display: "login",
    user: {},
    purchases: [],
    products: [],
    farms: []
  }

  fetchUser = (username, checked) => {
    if (checked === false) {
      console.log("Testing if statement for checked = false")
      fetch(customers_URL)
      .then(response => response.json())
      .then(customersArray => {
        let foundCustomer = customersArray.find(customer => customer.name === username)
        this.setState({
          user: foundCustomer
        })
        this.renderCustomer(foundCustomer.id)
    })
    } else if (checked === true) {
      console.log("Testing if statement for checked = true")
      fetch(farms_URL)
      .then(response => response.json())
      .then(farmsArray => {
        let foundFarm = farmsArray.find(farm => farm.farmer_name === username)
        this.setState({
          user: foundFarm
        })
        this.renderFarm(foundFarm.id)
    })
    }
  }

  renderCustomer = (id) => {
    fetch(customers_URL + id)
        .then(response => response.json())
        .then(customerObject => {
          console.log(customerObject)
          this.fetchCustomerPurchases(id)
        })
  }

  renderFarm = (id) => {
    fetch(farms_URL + id)
        .then(response => response.json())
        .then(farmObject => {
          console.log(farmObject)
          this.fetchFarmProducts(id)
        })
  }

  fetchFarmProducts = (id) => {
    fetch(products_URL)
    .then(response => response.json())
    .then(productsArray => {
        let products = productsArray.filter(product => product.farm_id === id)
        console.log(products)
      })
  }



  fetchCustomerPurchases = (id) => {
    fetch(purchases_URL)
        .then(response => response.json())
        .then(purchasesArray => {
          let foundPurchases = purchasesArray?.filter(purchase => purchase.customer_id === id)
          console.log(foundPurchases)
          this.fetchCustomerProducts(foundPurchases)
    })
  }

  fetchCustomerProducts = (purchases) => {
    fetch(products_URL)
        .then(response => response.json())
        .then(productsArray => {
          purchases.map(purchase => {
            let product = productsArray.find(product => product.id === purchase.product_id)
            console.log(product)
          })
    })
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

  changeToNewFarmForm = () => {
    this.setState({
      display: "new farm form"
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar changeToLogin = {this.changeToLogin} changeToHome = {this.changeToHome} changeToNewFarmForm={this.changeToNewFarmForm} />

        { this.state.display === "home" ? <Home changeToLogin = {this.changeToLogin} username = {this.state.username} checked = {this.state.checked} /> : null }
        { this.state.display === "login" ? <Login changeToHome = {this.changeToHome} getUsername = {this.getUsername} checked={this.state.checked} username={this.state.username} fetchUser={this.fetchUser}/> : null }
        { this.state.display === "new farm form" ? <FarmForm /> : null }


        <Switch>
          <Route path='/farm-info'>
            <FarmPage />
          </Route>

          {/* <Route path='/cart'>
            <Cart />
          </Route> */}

          {/* <Route path='/new-farm'>
            <FarmForm />
          </Route> */}

          <Route path='/product'>
            <Product />
          </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
