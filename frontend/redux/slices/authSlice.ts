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
      state.currentUser = action.payload.user;
      // console.log(action.payload)
      localStorage.setItem("customer", JSON.stringify(action.payload.user));
    },
  },
});

export const { LogOut, setUserCredentials } = authSlice.actions;

export default authSlice.reducer;
