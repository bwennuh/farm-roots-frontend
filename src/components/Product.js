import React, { Component } from 'react';
import  ProductCalendar  from "./ProductCalendar";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import { Link } from 'react-router-dom'

// import FarmCardContainer from './FarmCardContainer.js'


const Product = () => {

    const [startDate1, setStartDate1] = useState(null)
    const [endDate1, setEndDate1] = useState(null)

    // const [superStartDate, setSuperStartDate]

    function showDateSelections(startDate, endDate){
      console.log("From Product Component:")
      console.log("Start Date: " + startDate1)
      console.log("End Date: " + endDate1)

      setStartDate1(startDate)
      setEndDate1(endDate)

    }

    return (
    <div className="product-page">

          <h1>Add a Product</h1>

          <form className="new-product-form">

          <label>Describe Your Produce:</label><br></br>
          <input value={""} type="text" placeholder="" /><br></br><br></br>

          <label>Harvest Dates</label>
          <ProductCalendar showDateSelections={showDateSelections} />
          <ul>
            <li>{`Start Date: ${startDate1?.toLocaleDateString()} - End Date: ${endDate1?.toLocaleDateString()}`}</li>
            {/* <li>Date Selection 1</li>
            <li>Date Selection 2</li>
            <li>Date Selection 3</li> */}
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