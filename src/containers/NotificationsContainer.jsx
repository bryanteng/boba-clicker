import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToastNotification from '../components/ToastNotification';
import { removeNotification } from '../redux/notificationSlice';
import './NotificationsContainer.css';

function NotificationsContainer() {
    const notifications = useSelector(state => state.notification.notifications);
    const dispatch = useDispatch();
    
    const closeNotification = (id) => {
        console.log("Closing notification with id:", id);
        dispatch(removeNotification(id));
    }

    // TODO: add a greyed close all notifications button that lights up if there are notifications
    // TODO: fix issue with multiple of the same notification being displayed
    return (
        <div className='notifications-container'>
            {notifications.map( notification => (
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