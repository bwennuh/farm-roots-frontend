import React, { Component } from 'react';

class FarmForm extends Component {

  state = {
    name: "",
    bio: "",
    address: "",
    farmer_name: ""
  }

  submitHandler = (e) => {
      e.preventDefault()
      
      //Make a reqObj
      const reqObj = {}
      reqObj.headers = {"Content-Type": "application/json"}
      reqObj.method = "POST"
      reqObj.body = JSON.stringify({...this.state})

      fetch("http://localhost:3001/farms", reqObj)
          .then(res => res.json())
          .then((newFarm) => {
              this.props.createFarm(newFarm)
              this.setState({
                name: "",
                bio: "",
                address: "",
                farmer_name: ""
              })
          })
  } 

  render(){
    return(
      <div id="farm-form-page">
        <h1 id="new-farm-form-header">New Farm Form</h1>
        <form className="new-farm-form" onSubmit = {e => this.submitHandler(e)}>

          <label>Farm Name:</label><br></br>
          <input type="text" placeholder="Farm Name" onChange={(e) => this.setState({name: e.target.value})} /><br></br><br></br>

          <label>Farm Bio:</label><br></br>
          <input type="text" placeholder="Bio" onChange={(e) => this.setState({bio: e.target.value})}/><br></br><br></br>

          <label>Farm Address:</label><br></br>
          <input type="text" placeholder="Address" onChange={(e) => this.setState({address: e.target.value})}/><br></br><br></br>

          <label>Farmer Name:</label><br></br>
          <input type="text" placeholder="Farmer Name" onChange={(e) => this.setState({farmer_name: e.target.value})}/><br></br><br></br>

          {/* <label>Upload Farm Picture:</label><br></br>
          <input type="file" placeholder="Farm Picture" onChange={(e) => this.setState({weight: e.target.value})}/><br></br><br></br> */}

          <button id="submit-farm-button" type="submit">Submit Farm</button>

            { this.props.errors?.length > 0 ? 
            <div> 
              <h3>Error:</h3>
              <ul>
                {this.props.errors.map(error => <li>{error}</li>)}
              </ul>
            </div>
             : null }

        </form>

      </div>
    )
  }
}

export default FarmForm