import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images:{}
};

export const UploadImageSlice = createSlice({
  name: "UploadImageSlice",
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.images = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFiles } = UploadImageSlice.actions;

export default UploadImageSlice.reducer;
