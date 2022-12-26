import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   user:null,
  isAuth: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      //   const {user}=action.payload

      //   state.user=user
      state.isAuth = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;