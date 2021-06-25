import React, { Component } from 'react';
import  ProductCalendar  from "./ProductCalendar";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

const EditProduct = (props) => {

    console.log('!')

    const [startDate1, setStartDate1] = useState(null)
    const [endDate1, setEndDate1] = useState(null)

    const [superStartDate, setSuperStartDate] = useState([])
    const [superEndDate, setsuperEndDate] = useState([])

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    // const [farm_id, setFarmId] = useState(0)
    
    function showDateSelections(startDate, endDate){

      setStartDate1(startDate)
      setEndDate1(endDate)

      superStartDate.push(1)
      setSuperStartDate([...superStartDate, startDate])
      setsuperEndDate([...superEndDate, endDate])
    }

    useEffect(() => {
      let dateList = document.getElementById('date-list')
      let listItem = document.createElement('li')

      listItem.textContent = `Start Date: ${superStartDate.slice(-1)[0]?.toLocaleDateString()} - End Date: ${superEndDate.slice(-1)[0]?.toLocaleDateString()}`

      if (typeof superStartDate.slice(-1)[0]?.toLocaleDateString() !== 'undefined'){
        dateList.appendChild(listItem)
      }
    })

    function submitHandler(e){
      e.preventDefault()
      console.log("Edited product submitted!")
      const newProduct = {
          name: name,
          price: price,
          farm_id: props.farmId
      }

      const reqObj = {}

      reqObj.headers = {"Content-Type": "application/json"}
      reqObj.method = "PATCH"
      reqObj.body = JSON.stringify(newProduct)
        
      fetch(`http://localhost:3001/products/${props.product.id}`, reqObj)
          .then(res => res.json())
          .then((updatedProduct) => {
            setName("")
            setPrice(0)
          })
  } 

    return (
    <div className="product-page">

      <button onClick={() => props.changeToHome()}>Go Back to Home Page</button>
      <h1>Edit a Product</h1>

      <form className="new-product-form" onSubmit={(e) => submitHandler(e)}>

        <label>Produce Name:</label><br></br>
        <input type="text" placeholder={props.product.name} onChange={(e) => setName(e.target.value)} /><br></br><br></br>

        <label>Harvest Dates</label>
        <ProductCalendar showDateSelections={showDateSelections} />

        <ul id="date-list">
          {/* <li>{`Start Date: ${startDate1?.toLocaleDateString()} - End Date: ${endDate1?.toLocaleDateString()}`}</li> */}
        </ul>

        <label>Price:</label><br></br>
        <span>$</span><input type="text" placeholder={props.product.price} onChange={(e) => setPrice(+e.target.value)} /><br></br><br></br>


        <label>Upload Farm Picture:</label><br></br>
        <input type="file" placeholder="Farm Picture" /><br></br><br></br>

        <button type="submit">Update Product</button>

      </form>

    </div>
  )
}

export default EditProduct