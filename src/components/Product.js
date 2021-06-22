import React, { Component } from 'react';
import  ProductCalendar  from "./ProductCalendar";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import { Link } from 'react-router-dom'

// import FarmCardContainer from './FarmCardContainer.js'


const Product = () => {

    const [startDate1, setStartDate1] = useState(null)
    const [endDate1, setEndDate1] = useState(null)

    // const [superStartDate, setSuperStartDate] = useState(new Array(0))
    const [superStartDate, setSuperStartDate] = useState([])

    function showDateSelections(startDate, endDate){

      setStartDate1(startDate)
      setEndDate1(endDate)

      console.log("From Product Component:")
      console.log("Start Date: " + startDate1)
      console.log("End Date: " + endDate1)

      console.log(superStartDate)

      // superStartDate.push(startDate)
      setSuperStartDate([...superStartDate, startDate])
    }

    useEffect(() => {
      console.log("Testing the use effect hook: " + superStartDate.length)

      let dateList = document.getElementById('date-list')
      let listItem = document.createElement('li')

      listItem.textContent = `Start Date: ${superStartDate.slice(-1)[0]?.toLocaleDateString()}`

      if (typeof superStartDate.slice(-1)[0]?.toLocaleDateString() !== 'undefined'){
        dateList.appendChild(listItem)
      }
    })

    return (
    <div className="product-page">

          <h1>Add a Product</h1>

          <form className="new-product-form">

          <label>Describe Your Produce:</label><br></br>
          <input value={""} type="text" placeholder="" /><br></br><br></br>

          <label>Harvest Dates</label>
          <ProductCalendar showDateSelections={showDateSelections} />

          <ul id="date-list">
            <li>{`Start Date: ${startDate1?.toLocaleDateString()} - End Date: ${endDate1?.toLocaleDateString()}`}</li>
          </ul>


          {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /><br></br><br></br> */}

          <label>Price:</label><br></br>
          <input value={""} type="text" placeholder="Price" /><br></br><br></br>


          <label>Upload Farm Picture:</label><br></br>
          <input value={""} type="file" placeholder="Farm Picture" /><br></br><br></br>

          <button type="submit">Submit Farm</button>

    </form>

    </div>
  )
}

export default Product