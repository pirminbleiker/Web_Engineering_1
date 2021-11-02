import React from 'react'
import { SingleTask, Task } from './Task'


interface Props {
    tasks: Task[];
}

export const Tasks = ({tasks}: Props) => {
    const taskList = tasks.map((task) => (
        <div>
         <SingleTask key={task.id}id={task.id}checked={task.checked}priority={task.priority}text={task.text}/>
        </div>
    ));
    return <div>{taskList} </div>
}

