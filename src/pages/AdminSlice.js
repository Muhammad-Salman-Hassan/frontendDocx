import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const GetAllApplications = () => async (dispatch) => {


    try {
        let response = await axios.get(`http://localhost:3001/allApplications`, {
            withCredentials: true,
        })

        if (response.status === 200) {
            dispatch(setApplications(response.data))
        }
        console.log("REPOSNCE", response)
    } catch (error) {
        console.log(error)
    }

};

export const GetSingleApplication=(applicationId)=>async (dispatch)=>{
    try {
        let response = await axios.get(`http://localhost:3001/application/${applicationId}`, {
            withCredentials: true,
        })
        if (response.status === 200) {
            dispatch(setSingleApplication(response.data))
        }
    } catch (error) {
        console.log(error)
    }
}

export const UpdateStatus=(applicationId,applicationStatus)=>async (dispatch)=>{
    try {
        let response = await axios.put(`/updateStatus`,{
            applicationId,
            applicationStatus
        },{
            withCredentials: true,
        })
        if (response.status === 200) {
            console.log("updated")
        }
    } catch (error) {
        console.log(error)
    }
}



const initialState = {
    AllApplications: [],
    singleApplication:[]

};

const Applications = createSlice({
    name: 'Applications',
    initialState,
    reducers: {
        setApplications: (state, action) => {
            state.AllApplications = action.payload
        },
        setSingleApplication:(state,action)=>{
            state.singleApplication=action.payload
        }
    }
});

export const {
    setApplications,
    setSingleApplication
} = Applications.actions;

export default Applications.reducer;
