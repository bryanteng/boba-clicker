import { configureStore } from '@reduxjs/toolkit';
import { default as bobaReducer } from './bobaSlice';
import { default as userReducer } from './userSlice';

const store = configureStore({
  reducer: {
    boba: bobaReducer,
    user: userReducer,
  },
});
export default store;