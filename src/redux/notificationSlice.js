import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initalState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState: initalState,
  reducers: {
    addNotification: (state, action) => {
      action.payload.id = uuidv4();
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action) => {
      console.log(
        "Removing notification with id:",
        action.payload,
        "from state:",
        state.notifications,
      );
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload,
      );
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

const { actions, reducer } = notificationSlice;
export const { addNotification, removeNotification, clearNotifications } =
  actions;
export default reducer;
