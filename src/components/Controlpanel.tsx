import './Controlpanel.css'
import { TextInput } from './TaskInput'
interface Props {
    addTask: (text: string) => void
    onChange: (value: string) => void
}

export const Controlpanel = ({addTask, onChange}: Props) =>(
    <div className="Control-panel">
        <TextInput onChange={onChange}addTask={addTask}/>
    </div>
)