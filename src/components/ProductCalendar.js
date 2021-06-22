import React from 'react'
import {useState} from 'react'
import { DateRange } from 'react-date-range';


export default function ProductCalendar(props) {
    const [state, setState] = useState([
        {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
        }
    ]);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    function getDates(event){
        event.preventDefault()
        
        // console.log(Date.parse(state[0].startDate))
        // console.log(state[0].endDate)

        // console.log("Start date examples:")
        // console.log(state[0].startDate)
        // console.log(state[0].startDate.toDateString())
        // console.log(state[0].startDate.toLocaleDateString())
        // console.log(state[0].startDate.toLocaleDateString('us-US', options))

        // console.log("---------")
        // console.log("End date examples:")
        // console.log(state[0].endDate)
        // console.log(state[0].endDate.toLocaleDateString())

        let startDate = state[0].startDate
        let endDate = state[0].endDate

        props.showDateSelections(startDate, endDate)
        // console.log(props)
    };

    function getCalendarDiv(){
        // let calendarDiv = document.getElementsByClassName("rdrDays").item(0)
        // console.log(calendarDiv)

        // calendarDiv?.addEventListener('mouseup', e => {
        //     console.log("Div mouseup test")
        // })

        // let calendarDiv = document.getElementsByClassName("rdrDays").item(0)
        // // console.log(calendarDiv)

        // calendarDiv?.addEventListener('click', e => {
        //     console.log("hi")
        //     debugger
        // })
        
    }
    

    return (
        <div>
            {/* {getCalendarDiv()} */}
            {/* <div id="date-range" onMouseUp={(event) => getDates(event)}> */}
            <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            />
            {/* </div> */}
            <br></br>
            <button onClick={(event) => getDates(event)}>Choose Date</button>
        </div>
    )
}