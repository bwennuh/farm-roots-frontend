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

    function getDates(){
        
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
    

    return (
        <div>
            <DateRange
            onMouseUp = {getDates()}
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            />
            
        </div>
    )
}