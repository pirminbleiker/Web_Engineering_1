import { v4 } from 'uuid';
import { ChangeEvent } from "react"
import { Flash } from './Flash';

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

    const changePriority = (priority: number) => {
        onChanged(task.id, task.checked, priority)
    }

    return (
        <div className='task'>
            <input type="checkbox" onChange={onChecked} checked={task.checked}/>
            <Flash id={1} onChanged={changePriority}/>
            <Flash id={2} onChanged={changePriority}/>
            <Flash id={3} onChanged={changePriority}/>
            <div>{task.text}</div>
            <button className="button" onClick={onClick}>Löschen</button>
        </div>
    )
}

export const createTask = (props: string): Task => {
    return { id: v4(), checked: false, priority: 1, text: props };
  }

//export default Task
// switch ({priority}) {
//     case 0:
//         <div>{'\u26A1'}</div>
//         <div>{'\u26A1'}</div>
//         <div>{'\u26A1'}</div>
//         break;
//     case 1:
//         <div className="flash-on">{'\u26A1'}</div>
//         <div>{'\u26A1'}</div>
//         <div>{'\u26A1'}</div>
//         break;
//     case 2:
//         <div className="flash-on">{'\u26A1'}</div>
//         <div className="flash-on">{'\u26A1'}</div>
//         <div>{'\u26A1'}</div>
//         break;
//     case 3:
//         <div className="flash-on">{'\u26A1'}</div>
//         <div className="flash-on">{'\u26A1'}</div>
//         <div className="flash-on">{'\u26A1'}</div>
//         break;
//     default:
//         break;
//}