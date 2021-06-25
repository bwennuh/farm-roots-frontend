import React, { Component } from 'react';

class CustomerForm extends Component {

  state = {
    name: "",
    address: "",
    phone_number: 0
  }

  submitHandler = (e) => {
      e.preventDefault()
      
      //Make a reqObj
      const reqObj = {}
      reqObj.headers = {"Content-Type": "application/json"}
      reqObj.method = "POST"
      reqObj.body = JSON.stringify({...this.state})

      fetch("http://localhost:3001/customers", reqObj)
          .then(res => res.json())
          .then((newUser) => {
              this.setState({
                name: "",
                address: "",
                phone_number: 0
              })
            this.props.changeToLogin()
          })
  } 

  render(){
    return(
      <div id="customer-form-page">
        <h1 id="new-customer-form-header">New Customer Form</h1>
        <form className="new-customer-form" onSubmit = {e => this.submitHandler(e)}>

          <label>Name:</label><br></br>
          <input type="text" placeholder="Customer Name" onChange={(e) => this.setState({name: e.target.value})} /><br></br><br></br>

          <label>Address:</label><br></br>
          <input type="text" placeholder="Customer Address" onChange={(e) => this.setState({address: e.target.value})}/><br></br><br></br>

          <label>Phone Number:</label><br></br>
          <input type="number" placeholder="123" onChange={(e) => this.setState({phone_number: +e.target.value})}/><br></br><br></br>

          <button id="submit-customer-button" type="submit">Register</button>
        </form>

      </div>
    )
  }
}

export default CustomerForm