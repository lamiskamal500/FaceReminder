import {configureStore} from '@reduxjs/toolkit';
import { tokenSlice } from './slices/token';
import userSlice from './slices/user';
export default configureStore({
  reducer: {
    user: userSlice,
    token : tokenSlice
  },
});
