import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  images:{},
  imageresponse:false
};

export const UploadMultipleFile = (payload) => async (dispatch) => {

  dispatch(setResponseImage(false))
  try {
      let response = await axios.post(`http://localhost:3001/applicationImage`,payload ,{
          withCredentials: true,
      })

      if (response.status === 200) {
        console.log(response)
          dispatch(setResponseImage(true))
      }
      
  } catch (error) {
    dispatch(setResponseImage(false))
      console.log(error)
  }

};

export const UploadImageSlice = createSlice({
  name: "UploadImageSlice",
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.images = action.payload;
    },
    setResponseImage:(state,action)=>{
      state.imageresponse=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setFiles ,setResponseImage} = UploadImageSlice.actions;

export default UploadImageSlice.reducer;
