import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  submited:false
};

export const SubmitApplication = (payload) => async (dispatch) => {

  dispatch(setSubmitResponse(false))
  try {
      let response = await axios.post(`http://localhost:3001/application`,payload ,{
          withCredentials: true,
      })

      if (response.status === 200) {
        console.log(response)
          dispatch(setSubmitResponse(true))
      }
      
  } catch (error) {
    dispatch(setSubmitResponse(false))
      console.log(error)
  }

};

export const Application = createSlice({
  name: "Application",
  initialState,
  reducers: {
    
    setSubmitResponse:(state,action)=>{
      state.submited=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setSubmitResponse} = Application.actions;

export default Application.reducer;
