import React from 'react'
import './App.css'
import { AppHeader } from './components/AppHeader'
import { Controlpanel } from './components/Controlpanel'
import Task from './components/Tasks'
import { useState } from 'react'

function App() {

  const tasks: { id: number, checked: boolean, priority: number, text: string }[] = [
    {
      id: 1,
      checked: false,
      priority: 0,
      text: 'Task bla bla',
    },
    {
      id: 5,
      checked: true,
      priority: 0,
      text: 'lele listeneintrag 2',
    },
    {
      id: 3,
      checked: false,
      priority: 0,
      text: 'leider nicht sortiert nach id',
    },
  ];
  return (
    <div className="App">
      <AppHeader>Todo App</AppHeader>
      <Controlpanel />
      <div>
        <input type="checkbox" id="showAll" name="showAll"></input>
        <label htmlFor="showAll">Alle anzeigen</label>
      </div>
      <div className="Tasks">
        <Task tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
