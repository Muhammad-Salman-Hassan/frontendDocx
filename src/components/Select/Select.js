import React, { useEffect, useState } from 'react'
import "./Select.css"
import { UpdateStatus } from '../../pages/AdminSlice';
import { useDispatch } from 'react-redux';
const Select = (props) => {
    const [selectedValue, setSelectedValue] = useState(0);
    const dispatch=useDispatch()
    const handleSelectChange = (event) => {
        const newValue = parseInt(event.target.value);
        setSelectedValue(newValue);
        dispatch(UpdateStatus(props.appID,newValue))
        
    };
    
    
    console.log(selectedValue)
    return (
        <select name="select"
        disabled={props.status === 1 ? true : false}
        style={{
            backgroundColor: `${props.status === 1 ? "#7FFF00" : ""}`,
            color: "gray"
        }}
        value={selectedValue}
        onChange={handleSelectChange}>
            
            <option value={1}>{props.status===1?"Verifed":"Verify"}</option>
            <option value={2}>Reject</option>
            <option value={3}>On Hold</option>
           
        </select>
    )
}

export default Select
