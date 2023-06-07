import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const GetAllApplications = () => async (dispatch) => {


try {
    let response=await axios.get(`http://localhost:3001/allApplications`,{
        withCredentials: true,
      })

      if(response.status===200){
        dispatch(setApplications(response.data))
      }
    console.log("REPOSNCE",response)
} catch (error) {
    console.log(error)
}
    
};




const initialState = {
    AllApplications: [],

};

const Applications = createSlice({
    name: 'Applications',
    initialState,
    reducers: {
        setApplications:(state,action)=>{
            state.AllApplications=action.payload
        }
    }
});

export const {
setApplications
} = Applications.actions;

export default Applications.reducer;
