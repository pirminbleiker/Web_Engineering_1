import { ReactNode } from "react";
import './Controlpanel.css'
import { TextInput,AddTask } from './TaskInput'

export const Controlpanel = () =>(
    <div className="Control-panel">
        <TextInput/>
        <AddTask>Hinzufügen</AddTask>
        
    </div>
)