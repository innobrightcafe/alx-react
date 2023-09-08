import logo from "./HolbertonLogo.jpg";
import {getFooterCopy} from "./utils";
import { GetFullYear } from "./utils";
import "./App.css";

function App(props) {
  const isindex = props.isindex
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="mail">Email</label>
        <input type="email" id="mail" />
        <label htmlFor="pw">Password</label>
        <input type="password" id="pw" />
        <button>Ok</button>

      </div>
      <div className="App-footer">
        <p>{getFooterCopy(isindex)} <GetFullYear/></p>
        
      </div>
    </>
  );
}

export default App;
