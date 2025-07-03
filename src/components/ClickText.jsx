import React, { useState, useEffect } from 'react';

function ClickText({ location, amount }) {
    // later want to set text to higher amounts with upgrades and random events
    const [text, setText] = useState(amount || "+1");
    return (
        <div style={{ height: '300px', border: '1px solid black', position: 'relative' }}>
        <span
            className="click-text"
            style={{
                position: 'absolute',
                left: location.x,
                top: location.y,
                fontSize: '24px',
                color: 'black',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '5px',
                borderRadius: '5px',
                transition: 'all 0.3s ease-in-out'
            }}>
            {text}
        </span>

        </div>

    );
}
export default ClickText;