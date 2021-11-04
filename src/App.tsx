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
    deleted: false
  },
  {
    id: "5",
    checked: true,
    priority: 0,
    text: 'lele listeneintrag 2',
    deleted: false
  },
  {
    id: "3",
    checked: false,
    priority: 0,
    text: 'leider nicht sortiert nach id',
    deleted: true
  },
];




export function App() {
  const [tasks, setTask] = useState<Task[]>(initialTasks);
  const [unfilteredTasks, setUnfiltered]=useState<Task[]>(tasks);

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
    if(text.length>0){
      const newTask = unfilteredTasks.filter(t => t.text.toLowerCase().includes(text.toLowerCase()))
      setTask(newTask)
    }
    else{
      setTask(unfilteredTasks)
    }
  }

  const showAllItems = () => {

  }

  return (
    <div className="App">
      <AppHeader>Todo App</AppHeader>
      <Controlpanel addTask={addItem} onChange={filterItem} />
      <div>
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
