import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo App
      </header>
      <div className="Control-panel">
        <div>
          <input type="text"></input>
          <button className="button">Hinzufügen</button>
        </div>
        <div>
        <input type="checkbox" id="showAll" name="showAll"></input>
        <label htmlFor="showAll">Alle anzeigen</label>
        </div>
      </div>
      <div className="Tasks">
        <div className="Single-Task">
          <input type="checkbox"></input>
          <div className="flash-on">{'\u26A1'}</div>
          <div>{'\u26A1'}</div>
          <div>{'\u26A1'}</div>
          <div>Task bla bla</div>
          <button className="button">Löschen</button>
        </div>
      </div>
    </div>
  );
}

export default App;
