import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import auth from '../features/user/authSlice'
import clearence  from '../components/ClearenceForm/Slices'
import UploadImageSlice from '../components/uploadfile/UploadSlice'
// import activate from '../features/user/activate-slice'
export const store = configureStore({
    reducer: {
      auth,
      clearence,
      UploadImageSlice,
    //   activate
    },
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  })