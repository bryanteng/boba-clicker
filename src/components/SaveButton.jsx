import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './SaveButton.css';

const SaveButton = () => {
    const [ saveButtonText, setSaveButtonText ] = useState("Save Game");
    const gameState = useSelector(state => state);

    const handleSave = () => {
        setSaveButtonText("Saving game... ");
        let saveData  = JSON.stringify(gameState)
        localStorage.setItem('boba_clicker', saveData);

        console.log("Game saved:", saveData, JSON.parse(saveData));
        setSaveButtonText("Game Saved!");

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

    return (
        <div className="save-button-container">
            <button className="save-button" onClick={handleSave}>
                {saveButtonText}
            </button>
            <span className="save-button-info">
                Game autosaves every minute.
            </span>
        </div>
    );


};
export default SaveButton;
