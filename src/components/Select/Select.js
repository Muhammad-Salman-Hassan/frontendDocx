import React from 'react'
import "./Select.css"
const Select = (props) => {
    console.log(props.status)
    return (
        <select name="select" disabled={props.status===1?true:false} style={{backgroundColor:`${props.status===1?"#7FFF00":""}`,color:"gray"}}>
            
            <option value={0}>{props.status===1?"Verifed":"Verify"}</option>
            <option value={1}>Reject</option>
            <option value={2}>On Hold</option>
           
        </select>
    )
}

export default Select
