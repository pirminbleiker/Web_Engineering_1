import React from 'react'
import logo from './logo.svg'
import './App.css'
import { AppHeader } from './AppHeader'
import { Controlpanel } from './Controlpanel'

function App() {
  return (
    <div className="App">
     <AppHeader>Todo App</AppHeader>
      <Controlpanel/>
      <div>
        <input type="checkbox" id="showAll" name="showAll"></input>
        <label htmlFor="showAll">Alle anzeigen</label>
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
