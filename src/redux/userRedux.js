import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutUser: () => initialState,
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser.firstname = action.payload.user.firstname;
      state.currentUser.lastname = action.payload.user.lastname;
      state.currentUser.email = action.payload.user.email;
      state.currentUser.phone = action.payload.user.phone;
      state.currentUser.img = action.payload.user.img;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateUserCancel: (state) => {
      state.isFetching = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutUser,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserCancel,
} = userSlice.actions;
export default userSlice.reducer;
