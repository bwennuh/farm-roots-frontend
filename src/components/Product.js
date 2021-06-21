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
        const [startDate, setStartDate] = useState(new Date());
        return (
            <div className="product-page">
  
                <h1>Add a Product</h1>

                <div>
                <h1>New Farm Form</h1>
                <form className="new-farm-form">

                <label>Describe Your Produce:</label><br></br>
                <input value={""} type="text" placeholder="Farm Name" /><br></br><br></br>

                <label>Harvest Dates</label>
                <ProductCalendar />

                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /><br></br><br></br> */}

                <label>Price:</label><br></br>
                <input value={""} type="text" placeholder="Price" /><br></br><br></br>


                <label>Upload Farm Picture:</label><br></br>
                <input value={""} type="file" placeholder="Farm Picture" /><br></br><br></br>

                <button type="submit">Submit Farm</button>

        </form>

      </div>

        

      </div>
    )
  }

export default Product