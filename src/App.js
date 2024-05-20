import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import {useArray} from "./useArray";
import {useThrottle} from "./useThrottle";

function App() {
   const [value,setValue] = useState('')
    const throttleValue = useThrottle(value, 1000)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
          <p>{throttleValue}</p>
      </header>
    </div>
  );
}


export default App;