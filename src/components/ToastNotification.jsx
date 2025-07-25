import React, { useState, useEffect } from 'react';
import './ToastNotification.css';

function ToastNotification({ message, notificationType, onClose, autoClose = 30000 }) {

    // TODO: maybe direct inject notifications into the DOM instead of using state
    // to avoid re-rendering issues with animations
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
        <div 
            className={`toast ${isClosing ? 'closing' : ''}`} 
            onClick={onClose}
            role="button"
            style={{ '--toast-duration': `${autoClose}ms` }}
            >
            <div className="toast-icon">{notificationTypes[notificationType]}</div>
            <div className="toast-message">{message}</div>
            <button className="toast-close-button" onClick={onClose} aria-label="Close notification">
                &times;
            </button>
            <div className="toast-fuse" />
        </div>
    );
}
export default ToastNotification;