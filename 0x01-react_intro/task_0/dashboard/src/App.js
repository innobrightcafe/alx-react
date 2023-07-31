import React from "react"
import "./App.css"
import ME from './Holberton Logo.jpg'

const App = () => {
    return (
        <div>
            <div className="App-header">
                <img src={ME} alt="me"/>
                <h1>School dashboard</h1>
            </div>
            <div className="App-body">
                <p>Login to access the full dashboard</p>

            </div>
            <div className="App-footer">
                <p>Copyright 2020 - holberton School</p>

            </div>
        </div>

    )
}

export default App