import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class FarmForm extends Component {

  render(){
    return(
      <div>
        <h1>New Farm Form</h1>
        <form className="new-farm-form">

          <label>Farm Name:</label><br></br>
          <input value={""} type="text" placeholder="Farm Name" /><br></br><br></br>

          <label>Farm Bio:</label><br></br>
          <input value={""} type="text" placeholder="Bio" /><br></br><br></br>

          <label>Farm Address:</label><br></br>
          <input value={""} type="text" placeholder="Address" /><br></br><br></br>

          <label>Upload Farm Picture:</label><br></br>
          <input value={""} type="file" placeholder="Farm Picture" /><br></br><br></br>

          <button type="submit">Submit Farm</button>

        </form>

      </div>
    )
  }
}

export default FarmForm