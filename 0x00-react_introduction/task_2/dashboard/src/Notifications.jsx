import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils"

export function Notifications() {
    const click = () => {console.log('Close button has been clicked')}
    
    return (
    <div className="Notifications" style={{ padding: '0.5rem', border: 'dash red' }}>
        <p>Here is the list of notifications</p>
        <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent" >New resume available</li>
            <li dangerouslySetInnerHTML={{__html: getLatestNotification()}} />
        </ul>
        <button onClick={click} style={{ position: 'absolute', top: '1rem', right: '1rem' }} aria-label="Close">
            <img src="close-icon.png" alt="close-icon" />
        </button>
    </div>
    )
};