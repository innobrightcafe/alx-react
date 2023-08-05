import React from "react";
import "./Notifications.css"
import NI from "./close-icon.png"
import { getLatestNotification } from "./utils";

const MyNotifications = () => {
    const handleButtonClick = () => {
      console.log('Close button has been clicked');
    };

    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority = "default" className="default-item" > New course available</li>
                <li data-priority = "augent" className="urgent-item"> New resume available</li>
                <div dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />

            </ul>
            <button
                style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                padding: '5px 10px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'non',
                cursor: 'pointer',
                }}
                aria-label="Close"
                onClick={handleButtonClick} > Close
                <img src={NI} alt="NIcon" />
            </button>
        </div>
    )
}

export default MyNotifications