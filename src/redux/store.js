import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userReducer";

let store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

export let server = 'https://twitter-api-mipn.onrender.com/api/v1'

export default store