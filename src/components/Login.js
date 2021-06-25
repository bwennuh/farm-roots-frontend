import React, { Component } from 'react';
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

  handleChange(checked){
    this.setState({ checked });
  }
  
  submitHandler(e){
    e.preventDefault()
    let user = e.target[0].value
    this.setState({
      username: user
    })
    this.props.getUsername(user, this.state.checked)
    this.props.fetchUser(user, this.state.checked)
    this.props.changeToHome()
  }

  render(){
    return(
      <div className="login-page">
        <h1 className="farm-roots">Farm Roots 🥕</h1><br></br>
          <div className="login-form">
            <h2 id="enter-username">Enter username:</h2>
            <form onSubmit = {(e) => this.submitHandler(e)}>
              <input placeholder="username"/><br></br><br></br>
              <button type="submit" id="login-button">Login</button>
              {/* <button type="submit" id="signup-button">Sign Up</button> */}
            </form>

            <label>
              <span id="i-am-a-farmer">I am a farmer</span><br></br>
              <Switch onChange={this.handleChange} checked={this.state.checked} />
            </label><br></br><br></br><br></br>

            <button onClick={() => this.props.changeToNewUserForm()} id="signup-button">Sign Up</button>
         </div>
      </div>
    )
  }
}

export default Login