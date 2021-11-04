import './App.css'
import { AppHeader } from './components/AppHeader'
import { Controlpanel } from './components/Controlpanel'
import React, { useState } from "react";
import { Task, createTask } from './components/Task'
import { Tasks } from './components/Tasks'
import { Footer } from './components/Footer'

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
    priority: 1,
    text: 'lele listeneintrag 2',
  },
  {
    id: "3",
    checked: false,
    priority: 2,
    text: 'leider nicht sortiert nach id',
  },
];




export function App() {
  const [tasks, setTask] = useState<Task[]>(initialTasks);
  const [unfilteredTasks, setUnfiltered]=useState<Task[]>(tasks);
  const [showAll, setShowAll]=useState<boolean>(false);

  const addItem = (text: string) => {
    const newTask = [ ...unfilteredTasks, createTask(text)]
    setUnfiltered(newTask)
    if (showAll){
      setTask(newTask)
    }
    else{
      const filteredTasks=newTask.filter(t => t.checked===false)
      setTask(filteredTasks)
    }
  }

  const removeItem = (id: string) => {
    const newTask = unfilteredTasks.filter(t => t.id !== id)
    setUnfiltered(newTask)
    setTask(newTask)
  }

  const updateItem = (id: string, done: boolean, prio: number) => {
    const newTask = unfilteredTasks.map(t => {
      if (t.id === id) {
        return { ...t, checked: done, priority: prio}
      }
      return t
    })
    setUnfiltered(newTask)
    setTask(newTask)
  }

  const filterItem = (text: string) => {
    if(text.length>0){
      let newTask
      if(showAll){
        newTask = unfilteredTasks.filter(t => t.text.toLowerCase().includes(text.toLowerCase()))
      }
      else{
        newTask = unfilteredTasks.filter(t => t.text.toLowerCase().includes(text.toLowerCase())&&t.checked===false)
      }
      setTask(newTask)
    }
    else{
      if (showAll){
        setTask(unfilteredTasks)
      }
      else{
        const filteredList=unfilteredTasks.filter(t=>t.checked===false)
        setTask(filteredList)
      }
    }
  }

  const showAllItems = () => {
      if(showAll){
        const newTask=unfilteredTasks.filter(t => t.checked===false)
        setTask(newTask)
        setShowAll(false)
      }
      else{
        setTask(unfilteredTasks)
        setShowAll(true)
      }
  }

  return (
    <div className="App">
      <AppHeader>Todo App</AppHeader>
      <Controlpanel addTask={addItem} onChange={filterItem} cbValue={showAll} cbChange={showAllItems} />
      <div>
        <Tasks tasks={tasks}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
