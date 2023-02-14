import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
};
export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const {setToken} = tokenSlice.actions;
export const defaultToken = state => state.user.token;
export default tokenSlice.reducer;
