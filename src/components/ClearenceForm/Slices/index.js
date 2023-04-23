import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clearence: {
    library: "",
    tuitionFee: "",
    bookBorrow: "",
  },
  isclear: false,
};

export const clearenceSlice = createSlice({
  name: "clearence",
  initialState,
  reducers: {
    setClearence: (state, action) => {
      state.clearence = action.payload;

      
    },
    setIsClear:(state,action)=>{
        state.isclear = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setClearence,setIsClear } = clearenceSlice.actions;

export default clearenceSlice.reducer;
