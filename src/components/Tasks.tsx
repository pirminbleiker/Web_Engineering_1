import React from 'react'
import { SingleTask, Task } from './Task'


interface Props {
    tasks: Task[];
}

export const Tasks = ({tasks}: Props) => {
    const taskList = tasks.map((task) => (
         <SingleTask key={task.id}id={task.id}checked={task.checked}priority={task.priority}text={task.text}/>
    ));
    <List data={taskList} />
}

