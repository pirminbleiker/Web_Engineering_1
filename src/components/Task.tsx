import { v4 } from 'uuid';
import './Task.css'
import { IoFlashSharp,IoFlashOutline } from 'react-icons/io5'

export interface Task {
    id: string,
    checked: boolean,
    priority: number,
    text: string; 
}

export const SingleTask = (props: Task) => {
    const getText =() =>{
        if(props.checked){
            return (<div className="grid__text"><s>{props.text}</s></div>)
        }
        else{
            return (<div className="grid__text">{props.text}</div>)
        }
    }
    
    const getPriority = () =>{
        return(
            <div className="grid__priority priority_table">
                    <div className="priority_mouseover">{(props.priority>0)?(<IoFlashSharp/>):(<IoFlashOutline/>)}</div>
                    <div className="priority_mouseover">{(props.priority>1)?(<IoFlashSharp/>):(<IoFlashOutline/>)}</div>
                    <div className="priority_mouseover">{(props.priority>2)?(<IoFlashSharp/>):(<IoFlashOutline/>)}</div>
                </div>
        )
    }

    return (

        <div className='task'>
            <input className="grid__checkbox" type="checkbox" checked={props.checked}/>
            {getPriority()}
            {getText()}
            <button className="grid__delete delete-button">Löschen</button>
        </div>
    )
}



export const createTask = (props: string): Task => {
    return { id: v4(), checked: false, priority: 1, text: props};
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