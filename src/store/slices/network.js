import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  defaultNetwork: null,
};
export const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setDefaultNetwork: (state, action) => {
      state.defaultNetwork = action.payload;
    },
  },
});
// actions
export const {setDefaultNetwork} = networkSlice.actions;
// state
export const defaultNetwork = state => state.network.defaultNetwork;
export default networkSlice.reducer;
