import React from 'react';

export class getFullYear extends React.Component { 
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <div>
        <p>Current Year: {currentYear}</p>

      </div>
    ) 
  }
}

export class getFooterCopy extends React.Component {
  render() {
    if (this.props.isIndex) {
      return 'Holberton School';
    }
    return 'Holberton School main dashboard';
  };
}

export class getLatestNotification extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
  } 
}
