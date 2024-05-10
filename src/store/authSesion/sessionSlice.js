import { createSlice } from "@reduxjs/toolkit";

const authSesion = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.error = null;
    },
    logout(state) {
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, logout } = authSesion.actions;

export default authSesion;
