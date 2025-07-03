// settings file 
// toggle floating boba
// toggle lifetime boba
// toggle dark mode?
// reset game
// save settings to user slice probably, re-set them on load

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Settings.css';


function SettingsModal() {
    const dispatch = useDispatch();
    const boba = useSelector(state => state.boba);
    const user = useSelector(state => state.user);

    const resetGame = () => {
        if (window.confirm("Are you sure you want to reset the game? This action cannot be undone.")) {
            dispatch({ type: 'boba/reset' });
            dispatch({ type: 'user/reset' });
            localStorage.removeItem('boba_clicker');
            alert("Game has been reset.");
        }
    };

    return (
        <div className="settings-modal">
            <h2>Settings</h2>
            <button onClick={resetGame}>Reset Game</button>
            <div className="settings-info">
                <p>Current Boba: {boba.totalBoba.toFixed(2)}</p>
                <p>Total Clicks: {boba.totalClicks}</p>
                <p>Player Name: {user.name}</p>
            </div>
        </div>
    );
}

export default SettingsModal;