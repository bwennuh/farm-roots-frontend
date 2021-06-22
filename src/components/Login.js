import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Switch from "react-switch";

class Login extends Component {


  constructor() {
    super();
    this.state = { 
      checked: false,
      username: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(checked) {
    this.setState({ checked });
  }
  
  submitHandler(e) {
    e.preventDefault()
    let user = e.target[0].value
    this.setState({
      username: user
    })
    this.props.getUsername(user)
  }
  

  render(){
    return(
      <div className="login-page">

        <h1 className="farm-roots">Farm Roots 🥕</h1>


        <label>
          <span>I am a farmer</span><br></br>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </label>


        <h2>Enter username:</h2>
        <form onSubmit = {(e) => this.submitHandler(e)}>
          <input placeholder="username"/><br></br><br></br>
          {/* <Link to='/home'> */}
            <button id="login-button">Login</button><br></br><br></br><br></br>
          {/* </Link> */}
        </form>







      
      </div>
    )
  }
}

export default Login