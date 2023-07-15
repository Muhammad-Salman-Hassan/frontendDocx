import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import auth from '../features/user/authSlice'
import clearence  from '../components/ClearenceForm/Slices'
import UploadImageSlice from '../components/uploadfile/UploadSlice'
import Applications from "../pages/AdminSlice"
import SubmitApplication from "../pages/Dashboard/Verification/SubmitSlice"

export const store = configureStore({
    reducer: {
      auth,
      clearence,
      UploadImageSlice,
      Applications,
      SubmitApplication
    //   activate
    },
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  })