import React, { useEffect, useState } from 'react';
import store from '../redux/store';
import { useDispatch } from 'react-redux';
import { addNotification } from '../redux/notificationSlice';
import './SaveButton.css';

const SaveButton = () => {
    const [ saveButtonText, setSaveButtonText ] = useState("Save Game");
    const [ saveButtonFocused, setSaveButtonFocused ] = useState(false);
    const dispatch = useDispatch();
    
    const handleSave = () => {
        setSaveButtonText("Saving game... ");
        let saveData  = JSON.stringify(store.getState())
        localStorage.setItem('boba_clicker', saveData);

        console.log("Game saved:", JSON.parse(saveData));
        setSaveButtonText("Game Saved!");
        dispatch(addNotification({
            type: 'success',
            message: 'Game saved successfully!',
            autoClose: 2000
        }));
        setTimeout(() => {
            setSaveButtonText("Save Game");
        }, 2000);
    };

    useEffect(() => {
       const autosaveInterval = setInterval(() => {
            handleSave();
        }
       , 60000);
        return () => clearInterval(autosaveInterval);
    }, []);

    const handleMouseEnter = () => {
        setSaveButtonFocused(true);
    }

    const handleMouseLeave = () => {
        setTimeout(() => {
            setSaveButtonFocused(false);
        }, 1000);
    }

    return (
        <div className="save-button-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="save-button" onClick={handleSave}>
                {saveButtonText}
            </button>
            <span className={`save-button-info ${saveButtonFocused ? 'focused' : ''}`}>
                Game autosaves every minute.
            </span>
        </div>
    );
};
export default SaveButton;
