import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import auth from '../features/user/authSlice'
import clearence  from '../components/ClearenceForm/Slices'
import UploadImageSlice from '../components/uploadfile/UploadSlice'
import Applications from "../pages/AdminSlice"
import SubmitApplication from "../pages/Dashboard/Verification/SubmitSlice"
import dashboard from "../pages/Dashboard/DashboardSlice"

export const store = configureStore({
    reducer: {
      auth,
      clearence,
      UploadImageSlice,
      Applications,
      SubmitApplication,
      dashboard
    //   activate
    },
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  })