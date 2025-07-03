import React, { useState, useEffect } from 'react';
import './ToastNotification.css';

function ToastNotification({ message, notificationType, onClose, autoClose = 30000 }) {

    const [isClosing, setIsClosing] = useState(false);
    const notificationTypes = {
        info: '✨',
        success: '🧋',
        failure: '❌'
    }

    useEffect(() => {
        if (autoClose) {
            const startCloseTimer = setTimeout(() => {
                setIsClosing(true);
            }, autoClose - 500);
            const fullCloseTimer = setTimeout(() => {
                onClose();
            }, autoClose);

            return () => {
                clearTimeout(startCloseTimer)
                clearTimeout(fullCloseTimer)
            }
        }
    }, [autoClose, onClose]);    

    return (
        <div className={`toast${isClosing ? ' closing' : ''}`} onClick={onClose}>
            <div className="toast-icon">{notificationTypes[notificationType]}</div>
            <div className="toast-message">{message}</div>
        </div>
    );
}
export default ToastNotification;