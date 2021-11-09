import { ChangeEvent, useState } from "react"
import './TextInput.css'

interface Props {
    addTask: (text: string) => void
    onChange: (value: string) => void
}


export const TextInput = ({onChange,addTask}:Props) =>{

    const [text,setText]=useState('')

    const updateText = (event: ChangeEvent<HTMLInputElement>)=>{
        setText(event.target.value)
        onChange(event.target.value)
    }
    const ButtonClicked = () => {
        if (text !== '') {
            setText('');
            return addTask(text);
  
        }
        console.log('textfield empty')
    }
    return (
    <div className="text-input">
        <input className="text-field" placeholder="Aufgabe..."type="text" onChange={updateText} value={text}/>
        <button className="add-button" onClick={ButtonClicked}>Hinzufügen</button>
    </div>
    )
}
