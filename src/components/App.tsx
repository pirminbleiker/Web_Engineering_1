import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AppHeader } from './AppHeader'
import { Controlpanel } from './Controlpanel'
import { Task } from '../models/Task'


function App() {
  const[tasks,setTasks]=useState<Task[]>()
  return (
    <div className="App">
     <AppHeader>Todo App</AppHeader>
      <Controlpanel/>
      <div className="Tasks">
        <div>CB</div>
        <div>Task</div>
        <div>Button löschen</div>
      </div>
    </div>
  );
}

export default App;
