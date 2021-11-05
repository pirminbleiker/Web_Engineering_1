import { SingleTask, Task } from './Task'


interface Props {
    tasks: Task[];
    onDelete: (id: string) => void;
    onChanged: (id: string, checked: boolean, priority: number) => void;
}

export const Tasks = ({tasks, onDelete, onChanged}: Props) => {
    const taskList = tasks.map((task) => (
        
        <SingleTask key={task.id} task={task} onDelete={onDelete} onChanged={onChanged}/>
        
    ));
    return <div>{taskList}</div>
}

