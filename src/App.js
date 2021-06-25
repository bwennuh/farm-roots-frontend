import './App.css';
import React, { Component } from 'react';

import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import FarmForm from './components/FarmForm.js'
import CustomerForm from './components/CustomerForm.js'

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
    farms: [],
    errors: []
  }

  fetchUser = (username, checked) => {
    if (checked === false) {
      fetch(customers_URL)
      .then(response => response.json())
      .then(customersArray => {
        let foundCustomer = customersArray.find(customer => customer.name === username)
        this.setState({
          user: foundCustomer
        })
        this.renderCustomer(foundCustomer.id)
        this.renderAllFarms()
        this.fetchAllFarmProducts()

    })
    } else if (checked === true) {
      fetch(farms_URL)
      .then(response => response.json())
      .then(farmsArray => {
        let foundFarm = farmsArray.find(farm => farm.farmer_name === username)
        this.setState({
          user: foundFarm
        })
        this.renderFarm(foundFarm.id)
        // this.renderAllFarms()
    })
    }
  }

  renderCustomer = (id) => {
    fetch(customers_URL + id)
        .then(response => response.json())
        .then(customerObject => {
          this.fetchCustomerPurchases(id)
        })
  }

  renderAllFarms = () => {
    fetch(farms_URL)
        .then(response => response.json())
        .then(allFarms => {
          this.setState({
            farms: allFarms
          })
        })
  }

  fetchAllFarmProducts = () => {
    fetch(products_URL)
    .then(response => response.json())
    .then(productsArray => {
        this.setState({
          products: productsArray
        })
      })
  }

  renderFarm = (id) => {
    fetch(farms_URL + id)
        .then(response => response.json())
        .then(farmObject => {
          this.setState({
            farms: [farmObject]
          })
          this.fetchFarmProducts(id)
        })
  }

  fetchFarmProducts = (id) => {
    fetch(products_URL)
    .then(response => response.json())
    .then(productsArray => {
        let products = productsArray.filter(product => product.farm_id === id)
        this.setState({
          products: products
        })
      })
  }

  fetchCustomerPurchases = (id) => {
    fetch(purchases_URL)
        .then(response => response.json())
        .then(purchasesArray => {
          let foundPurchases = purchasesArray?.filter(purchase => purchase.customer_id === id)
          this.fetchCustomerProducts(foundPurchases)
    })
  }

  fetchCustomerProducts = (purchases) => {
    fetch(products_URL)
        .then(response => response.json())
        .then(productsArray => {
          purchases.map(purchase => {
            let product = productsArray.find(product => product.id === purchase.product_id)
          })
    })
  }

  deleteAProduct = (id) => {
    const newProducts = this.state.products.filter(product => product.id !== id)

    // e.preventDefault()
    
    fetch(`http://localhost:3001/products/${id}`, {method: "DELETE"})
        .then(res => res.json())
        .then(() => this.setState({
          products: newProducts
        }))
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

  changeToNewUserForm = () => {
    this.setState({
      display: "new user form"
    })
  }

  createFarm = (farm) => {
    if (farm.hasOwnProperty("exception")){
      console.log(farm.exception)

      let errorsArray = farm.exception.split(", ")
      let firstError = errorsArray[0].split("Validation failed: ").splice(-1)[0]
      let lastError = errorsArray.slice(-1)[0].substring(0, errorsArray.slice(-1)[0].length - 1)

      errorsArray.shift()
      errorsArray.unshift(firstError)
      errorsArray.pop()
      errorsArray.push(lastError)

      this.setState({
        errors: errorsArray
      })

    } else {
      this.setState({
        farms: [...this.state.farms, farm]
      })
    }
  }
  
  render(){
    return (
      <div className="app">
        <Navbar changeToLogin = {this.changeToLogin} changeToHome = {this.changeToHome} changeToNewFarmForm={this.changeToNewFarmForm} />

        { this.state.display === "home" ? <Home changeToLogin = {this.changeToLogin} username = {this.state.username} checked={this.state.checked} farms = {this.state.farms} products = {this.state.products} deleteAProduct={this.deleteAProduct}/> : null }
        { this.state.display === "login" ? <Login changeToHome = {this.changeToHome} getUsername = {this.getUsername} checked={this.state.checked} username={this.state.username} fetchUser={this.fetchUser} changeToNewUserForm={this.changeToNewUserForm}/> : null }
        
        <div className="farm-form">
        { this.state.display === "new farm form" ? <FarmForm createFarm = {this.createFarm} errors={this.state.errors}/> : null }
        </div>

        <div className="customer-form">
        { this.state.display === "new user form" ? <CustomerForm changeToLogin={this.changeToLogin}/> : null }
        </div>

      </div>
    );
  }
}

export default App;
