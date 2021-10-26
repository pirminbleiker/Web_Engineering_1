export interface singleTask {
    id: number,
    checked: boolean,
    priority: number,
    text: string;    
}

const Task = (props: singleTask) => {
    return (
        <div className='task'>
            <h3>{props.checked} {props.priority} {props.text} </h3>
        </div>
    )
}



export default Task
