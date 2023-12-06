import { createSlice } from '@reduxjs/toolkit';

const user = window.localStorage.getItem('token');
const initialState = {
  isLoading: false,
  isLogin: !!user,
  userInfo: {},
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.isLoading = false;
    },
    loginSuccess: (state) => {
      state.isLogin = true;
    }
  }
});

export const {
  startLoading,
  endLoading,
  loginFailure,
  loginSuccess
} = commonSlice.actions;

export default commonSlice.reducer;
