import { v4 } from 'uuid';
import './Task.css'
import { IoFlashSharp,IoFlashOutline } from 'react-icons/io5'
import { ChangeEvent } from 'react';

export interface Task {
    id: string;
    checked: boolean;
    priority: number;
    text: string;
}
interface Props {
    task: Task;
    onDelete: (id: string) => void;
    onChanged: (id: string, checked: boolean, priority: number) => void;
}

export const SingleTask = ({task, onDelete, onChanged}: Props) => {

    const onClick = () => {
        onDelete(task.id)
    }

    const onChecked = (e: ChangeEvent<HTMLInputElement>) => {
        onChanged(task.id, e.target.checked, task.priority)
    }

    const getText =() =>{
        if(task.checked){
            return (<div className="grid__text"><s>{task.text}</s></div>)
        }
        else{
            return (<div className="grid__text">{task.text}</div>)
        }
    }
    
    const getPriority = () =>{
        return(
            <div className="grid__priority priority_table">
                    <div className="priority_mouseover">{(task.priority>0)?(<IoFlashSharp/>):(<IoFlashOutline/>)}</div>
                    <div className="priority_mouseover">{(task.priority>1)?(<IoFlashSharp/>):(<IoFlashOutline/>)}</div>
                    <div className="priority_mouseover">{(task.priority>2)?(<IoFlashSharp/>):(<IoFlashOutline/>)}</div>
                </div>
        )
    }

    return (
        <div className='task'>

            <input className="grid__checkbox" type="checkbox" onChange={onChecked} checked={task.checked}/>
            {getPriority()}
            {getText()}
            <button className="grid__delete delete-button" onClick={onClick}>Löschen</button>

        </div>
    )
}

export const createTask = (props: string): Task => {
    return { id: v4(), checked: false, priority: 1, text: props};
  }
