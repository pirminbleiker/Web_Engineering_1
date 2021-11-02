import './App.css'
import { AppHeader } from './components/AppHeader'
import { Controlpanel } from './components/Controlpanel'
import React, { useState } from "react";
import { SingleTask, Task } from './components/Task'
import { Tasks } from './components/Tasks'

// TODO Folie 18 als Info für Array bearbeitung!!!

const initialTasks: Task[] = [
  {
    id: "1",
    checked: false,
    priority: 0,
    text: 'Task bla bla',
  },
  {
    id: "5",
    checked: true,
    priority: 0,
    text: 'lele listeneintrag 2',
  },
  {
    id: "3",
    checked: false,
    priority: 0,
    text: 'leider nicht sortiert nach id',
  },
];


export function App() {
  const [tasks, setTask] = useState<Task[]>(initialTasks);


  return (
    <div className="App">
      <AppHeader>Todo App</AppHeader>
      <Controlpanel />
      <div>
        <input type="checkbox" id="showAll" name="showAll"></input>
        <label htmlFor="showAll">Alle anzeigen</label>
      </div>
      <div className="Tasks">
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
