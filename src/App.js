import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>My first React App - Counter</h2>
      </header>
      <div>
        <Counter initialNumber={0} />
          <Counter initialNumber={-10} />
          <Counter initialNumber={99}/>

      </div>
    </div>
  );
}

export default App;
