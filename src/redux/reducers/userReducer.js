import { fabClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setLoadingTrue(state) {
      state.loading = true;
    },
    setLoadingFalse(state) {
      state.loading = true;
    },
    setUserDetails(state, action) {
      state.user = action.payload.user
      state.authenticated = true
      state.message = action.payload.message
    },
    getLoginError(state, action){
      state.authenticated = false
      state.user = null
      state.error = action.payload
    }
  },
});

export default userSlice;

export let { setLoadingTrue, setLoadingFalse, setUserDetails, getLoginError } =
  userSlice.actions;
