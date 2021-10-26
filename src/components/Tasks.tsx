import React, { FC } from 'react'
import Task from './Task'


interface List {
    tasks: {
        id: number,
        checked: boolean,
        priority: number,
        text: string;
    }[]
}

const Tasks: FC<List> = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} {...task}/>
            ))}
        </>


        // <div className="Single-Task">
        //   <input type="checkbox"></input>
        //   <div className="flash-on">{'\u26A1'}</div>
        //   <div>{'\u26A1'}</div>
        //   <div>{'\u26A1'}</div>
        //   <div>Task bla bla</div>
        //   <button className="button">Löschen</button>
        // </div>
    )
}

export default Tasks
