import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class FarmForm extends Component {

  state = {
    name: "",
    bio: "",
    address: "",
    farmer_name: ""
}

submitHandler = (e) => {
    e.preventDefault()
    
    // //Contains a new PokemonMon
    // const newPokemon = {
    //     name: this.state.name,
    //     weight: this.state.weight,
    //     sprite: this.state.sprite,
    //     type: this.state.type,
    //     description: this.state.description
    // }

    //Make a reqObj
    const reqObj = {}
    reqObj.headers = {"Content-Type": "application/json"}
    reqObj.method = "POST"
    reqObj.body = JSON.stringify({...this.state})


   
    //POST ---- /pokemon (index)
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
      <div>
        <h1>New Farm Form</h1>
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

          <button type="submit">Submit Farm</button>

        </form>

      </div>
    )
  }
}

export default FarmForm