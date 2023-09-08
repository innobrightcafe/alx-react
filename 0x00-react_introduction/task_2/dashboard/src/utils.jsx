import React from "react";

export function GetFullYear() {
   const currentYear = new Date().getFullYear()
    return <span>{currentYear}</span>
    
};

export function getFooterCopy(isIndex) { 
        return isIndex ? "Holberton School" : "Holberton School main dashboard"
};

export function getLatestNotification() {
        return "<strong>Urgent requirement</strong> - complete by EOD";
};

 
