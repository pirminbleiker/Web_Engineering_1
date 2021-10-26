import { ChangeEvent, ReactNode, useState } from "react"
import { isPropertySignature } from "typescript"
import './TaskInput.css'

interface Props{
    children: ReactNode
}

export const TextInput = () =>{
    const [text,setText]=useState('')

    const updateText = (event: ChangeEvent<HTMLInputElement>)=>{
        setText(event.target.value)
    }

    return (
        <input onChange={updateText} value={text}/>
    )
}

export const AddTask = (props: Props) =>{
    const ButtonClicked = () => {
        console.log('Task Button clicked')
    }

    return (
        <button className="button" onClick={ButtonClicked}>{props.children}</button>
    )
}
