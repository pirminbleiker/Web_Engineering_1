import './Controlpanel.css'
import { ShowAll } from './ShowAll'
import { TextInput } from './TextInput'
interface Props {
    addTask: (text: string) => void
    onChange: (value: string) => void
    cbValue:boolean
    cbChange: () => void
}

export const Controlpanel = ({addTask, onChange,cbValue,cbChange}: Props) =>(
    <div className="Control-panel">
        <TextInput onChange={onChange}addTask={addTask}/>
        <ShowAll cbValue={cbValue} cbChange={cbChange}/>
    </div>
)