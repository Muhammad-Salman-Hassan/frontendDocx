import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    cnic: "",
    createdAt: "",
    email: "",
    id: null,
    name: "",
    password: "",
    tokens: null,
    updatedAt: "",
  },
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user } = action.payload;

      state.user = user;
      // const {isAuth}=action.payload
      state.isAuth = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
