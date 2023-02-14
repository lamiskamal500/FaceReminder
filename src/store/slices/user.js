import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  defaultUser: null,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDefaultUser: (state, action) => {
      state.defaultUser = action.payload;
    },
  },
});
// actions
export const {setDefaultUser} = userSlice.actions;
// state
export const defaultUser = state => state.user.defaultUser;
export default userSlice.reducer;
