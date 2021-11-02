import './App.css'
import { AppHeader } from './components/AppHeader'
import { Controlpanel } from './components/Controlpanel'
import React, { useState } from "react";
import { Task, createTask } from './components/Task'
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

  const addItem = (text: string) => {
    const newTask = [ ...tasks, createTask(text)]
    setTask(newTask)
  }

  const removeItem = (id: string) => {
    const newTask = tasks.filter(t => t.id !== id)
    setTask(newTask)
  }

  const updateItem = (id: string, done: boolean, prio: number) => {
    const newTask = tasks.map(t => {
      if (t.id === id) {
        return { ...t, checked: done, priority: prio}
      }
      return t
    })
    setTask(newTask)
  }

  const filterItem = (text: string) => {
    const newTask = tasks.filter(t => t.text === text)
    return { newTask }
  }

  return (
    <div className="App">
      <AppHeader>Todo App</AppHeader>
      <Controlpanel addTask={addItem} onChange={filterItem} />
      <div>
        <input type="checkbox" id="showAll" name="showAll"/>
        <label htmlFor="showAll">Alle anzeigen</label>
      </div>
      <div>
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
