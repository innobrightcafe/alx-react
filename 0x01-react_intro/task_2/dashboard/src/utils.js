import React from "react";

const getFullYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  
const getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  };

const timeOfDay =() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let timeOfDayString;

    if (hours >= 6 && hours < 12) {
      timeOfDayString = 'Morning';
    } else if (hours >= 12 && hours < 18) {
      timeOfDayString = 'Afternoon';
    } else if (hours >= 18 && hours < 24) {
      timeOfDayString = 'Evening';
    } else {
      timeOfDayString = 'Night';
    }

    const currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  return (
    <div>
      Good {`${timeOfDayString} The Time IS = ${currentTime}`}
    </div>)
}

const getLatestNotification = () => {
  return  "<strong>Urgent requirement</strong> - complete by EOD"
    
}

export { getLatestNotification, getFullYear, getFooterCopy, timeOfDay};
