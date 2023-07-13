import {configureStore} from '@reduxjs/toolkit';
import tokenSlice from './slices/token';
import userSlice from './slices/user';
import networkSlice from './slices/network';

export default configureStore({
  reducer: {
    user: userSlice,
    token : tokenSlice,
    network : networkSlice,
  },
});
