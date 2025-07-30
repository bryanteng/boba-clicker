import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToastNotification from "../components/ToastNotification";
import {
  removeNotification,
  clearNotifications,
} from "../redux/notificationSlice";
import "./NotificationsContainer.css";

function NotificationsContainer() {
  const notifications = useSelector(
    (state) => state.notification.notifications,
  );
  const [notificationButtonText, setNotificationButtonText] = useState("X");
  const dispatch = useDispatch();

  const closeNotification = (id) => {
    console.log("Closing notification with id:", id);
    dispatch(removeNotification(id));
  };

  const handleMouseEnter = () => {
    if (notifications.length === 0) {
      setNotificationButtonText("X");
      return;
    }
    setNotificationButtonText("Close All Notifications");
  };

  const handleMouseLeave = () => {
    setNotificationButtonText("X");
  };

  const handleCloseAllNotificationsButtonClick = () => {
    dispatch(clearNotifications());
  };

  // TODO: fix issue with multiple of the same notification being displayed
  return (
    <div
      className="notifications-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      alt="Close all notifications"
      role="button"
    >
      <button
        title="Close Notifications"
        className={`close-all-notifications ${notifications.length == 0 ? "disabled" : ""}`}
        onClick={handleCloseAllNotificationsButtonClick}
        disabled={notifications.length == 0}
      >
        {notificationButtonText}
      </button>
      {notifications.map((notification) => (
        <ToastNotification
          key={notification.id}
          message={notification.message}
          onClose={() => closeNotification(notification.id)}
          notificationType={notification.type}
          autoClose={notification.autoClose}
        />
      ))}
    </div>
  );
}
export default NotificationsContainer;
