import { configureStore } from '@reduxjs/toolkit';
import { default as bobaReducer } from './bobaSlice';
import { default as userReducer } from './userSlice';
import { default as notificationReducer } from './notificationSlice';

// TODO: create a monster slice to track monster stats, may also include click dmg increase
const store = configureStore({
  reducer: {
    boba: bobaReducer,
    user: userReducer,
    notification: notificationReducer,
  },
});
export default store;