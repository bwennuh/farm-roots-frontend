import React from 'react'
import {useState} from 'react'
import { DateRange } from 'react-date-range';


export default function ProductCalendar() {
    const [state, setState] = useState([
        {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
        }
    ]);

    function getDates(){
        
        console.log(Date.parse(state[0].startDate))
        console.log(state[0].endDate)
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