import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Set_ACTIVE_USER: (state, actions) => {
      const { email, userName, userId } = actions.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.userId = userId;
    },
  },
});

export const { Set_ACTIVE_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsEmail = (state) => state.auth.email;
export const selectIsUserName = (state) => state.auth.userName;
export const selectIsUserId = (state) => state.auth.userId;

export default authSlice.reducer;
