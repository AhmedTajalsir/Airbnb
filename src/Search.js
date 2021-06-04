// import React, { useState } from 'react'
// import './Search.css'
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range'
// import PeopleIcon from '@material-ui/icons/People';
// import { Button } from '@material-ui/core'
// //Data PICKER
// function Search() {
//     const [startDate , setStartDate] = useState(new Date());
//     const [endDate , setEndDate] = useState(new Date());
    
//     const selectionRange = {
//         startDate: startDate,
//         endDate: endDate,
//         key: "selection",
//     };
//     function handleSelect(ranges) {
//         setStartDate(ranges.selection.startDate);
//         setEndDate(ranges.selection.endDate);
//     }
//     return (
//         <div className="search">
//             <DateRangePicker ranges={ [selectionRange] }
//             onchange={handleSelect} />
//             <h2>
//                 Number of guests
//                 <PeopleIcon />
//             </h2>
//             <input min={0}
//             defaultValue={2}
//             />
//             <Button variant="outline"> Search Airbnb</Button>
//         </div>
        
//     )
// }

// export default Search


import React, {useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";


// DATE PICKER COMPONENT
function Search() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button >Search Airbnb</Button>
        </div>
    )
}

export default Search