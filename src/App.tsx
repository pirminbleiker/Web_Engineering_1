import './App.css'
import { AppHeader } from './components/AppHeader'
import { Controlpanel } from './components/Controlpanel'
import { ChangeEvent, useState } from "react";
import { Task, createTask } from './components/Task'
import { Tasks } from './components/Tasks'
import { Footer } from './components/Footer'
import { v4 } from 'uuid';

// TODO Folie 18 als Info für Array bearbeitung!!!

const initialTasks: Task[] = [
  {
    id: v4(),
    checked: false,
    priority: 1,
    text: 'Task bla bla',
  },
  {
    id: v4(),
    checked: true,
    priority: 3,
    text: 'lele listeneintrag 2',
  },
  {
    id: v4(),
    checked: false,
    priority: 2,
    text: 'leider nicht sortiert nach id',
  },
];




export function App() {
  const [tasks, setTask] = useState<Task[]>(initialTasks);
  const [filteredTasks, setFilteredTask] = useState<Task[]>(initialTasks.filter(t => t.checked===false));
  const [text, setText] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(false);

  const addItem = (text: string) => {
    const newTask = [ ...tasks, createTask(text)]
    setText('')
    setTask(newTask)
    filterItem(newTask,'',showAll)
  }

  const removeItem = (id: string) => {
    const newTask = tasks.filter(t => t.id !== id)
    setTask(newTask)
    filterItem(newTask,text,showAll)
  }


  const updateItem = (id: string, checked: boolean, priority: number) => {
    const newTask = tasks.map(t => {
      if (t.id === id) {
        return { ...t, checked: checked, priority: priority}
      }
      return t
    })
    setTask(newTask)
    filterItem(newTask,text,showAll)
  }

  const onTextInput = (text: string) => {
    setText(text)
    filterItem(tasks,text,showAll)
  }

  const onShowAll = (event: ChangeEvent<HTMLInputElement>)=>{
    setShowAll(event.target.checked)
    filterItem(tasks,text,event.target.checked)
  }

  const filterItem = (tasks: Task[], text: string, showAll: boolean) => {
    const newTask = tasks.filter(t => (t.text.toLowerCase().includes(text) && !t.checked) || t.text.toLowerCase().includes(text) && showAll)
    setFilteredTask(newTask)
  }

  return (
    <div className="App">
      <AppHeader>Todo App</AppHeader>

      <Controlpanel addTask={addItem} onChange={onTextInput} onShowAll={onShowAll} />
      <div>
        <Tasks tasks={filteredTasks} onDelete={removeItem} onChanged={updateItem}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
