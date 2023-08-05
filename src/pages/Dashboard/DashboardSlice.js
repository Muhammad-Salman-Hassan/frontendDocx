import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const GetStatus=()=>async (dispatch)=>{
  try {
      let response = await axios.get(`http://localhost:3001/status`, {
          withCredentials: true,
      })
      if (response.status === 200) {
          dispatch(setApplication(response.data))
      }
  } catch (error) {
      console.log(error)
  }
}
const initialState = {
 application:{}
};

export const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setApplication: (state, action) => {
      state.application=action.payload
    },
  },
});


export const { setApplication } = dashboard.actions;

export default dashboard.reducer;

