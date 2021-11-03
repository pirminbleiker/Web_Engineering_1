import './Controlpanel.css'
import { ShowAll } from './ShowAll'
import { TextInput } from './TextInput'
interface Props {
    addTask: (text: string) => void
    onChange: (value: string) => void
}

export const Controlpanel = ({addTask, onChange}: Props) =>(
    <div className="Control-panel">
        <TextInput onChange={onChange}addTask={addTask}/>
        <ShowAll/>
    </div>
)