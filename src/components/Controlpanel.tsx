import { ReactNode } from "react";
import './Controlpanel.css'
import { TextInput,AddTask } from './TaskInput'

export const Controlpanel = () =>(
    <div className="Control-panel">
        <div className="Text-input">
            <TextInput/>
            <AddTask>Hinzufügen</AddTask>
        </div>
        <div>
            <input type="checkbox" id="showAll" name="showAll"></input>
            <label htmlFor="showAll">Alle anzeigen</label>
        </div>
    </div>
)