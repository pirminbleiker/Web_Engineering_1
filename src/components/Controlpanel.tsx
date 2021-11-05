import './Controlpanel.css'
import { TextInput } from './TaskInput'
import React, { ChangeEvent } from "react";

interface Props {
    addTask: (text: string) => void
    onChange: (value: string) => void
    onShowAll: (event: ChangeEvent<HTMLInputElement>) => void
}

// const onChecked = (event: ChangeEvent<HTMLInputElement>)=>{
//     setShowAll(event.target.checked)
//     onChange('text')
//   }

export const Controlpanel = ({addTask, onChange, onShowAll}: Props) =>(
    <div className="Control-panel">
        <div>
            <TextInput onChange={onChange}addTask={addTask}/>
        <br/>
            <input type="checkbox" onChange={onShowAll} id="showAll" name="showAll"/>
            <label htmlFor="showAll">Alle anzeigen</label>
        </div>
    </div>
  
)