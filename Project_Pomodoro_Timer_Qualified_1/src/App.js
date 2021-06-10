import React, {useState} from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";


function App() {
  const [count, setCount] = useState(25);
  
  return (
    <div className="App">
      <header className="App-header container">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container">
        <Pomodoro />
   
      </div>
    </div>
  );
}

export default App;
