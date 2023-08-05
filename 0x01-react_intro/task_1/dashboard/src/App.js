import React from "react"
import "./App.css"
import ME from './Holberton Logo.jpg'
import {getFullYear} from './utils'
import {getFooterCopy} from './utils'
import {timeOfDay} from './utils'


const App = () => {
    const isIndexPage = true;
    let time = timeOfDay()
     
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
                
                <p>Copyright {getFullYear()} - {getFooterCopy(isIndexPage)} {time}</p>
                
            </div>
        </div>

    )
}

export default App