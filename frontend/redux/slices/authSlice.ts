"use client";
import { createSlice } from "@reduxjs/toolkit";
const getUserData = () => {
  if (typeof window !== "undefined") {
    let storedUserData = localStorage.getItem("customer");
    if (storedUserData && storedUserData !== "undefined") {
      try {
        return JSON.parse(storedUserData);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return null;
};

const initialState = {
  currentUser: getUserData(),
  token:null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogOut: (state, _action) => {
      state.currentUser = null;
      localStorage.removeItem("customer");
    },
    setUserCredentials: (state, action) => {
      const userPayload = action.payload.user
      state.currentUser = userPayload?.user;
      state.currentUser = userPayload?.token
      // console.log(action.payload)
      localStorage.setItem("customer", JSON.stringify(userPayload?.user));
      localStorage.setItem("token", JSON.stringify(userPayload?.token));
    },
  },
});

export const { LogOut, setUserCredentials } = authSlice.actions;

export default authSlice.reducer;
