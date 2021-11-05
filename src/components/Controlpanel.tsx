import './Controlpanel.css'
import { ChangeEvent } from "react";
import { TextInput } from './TextInput';

interface Props {
    addTask: (text: string) => void
    onChange: (value: string) => void
    onShowAll: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Controlpanel = ({addTask, onChange, onShowAll}: Props) =>(
    <div className="Control-panel">
        <div>
            <TextInput onChange={onChange}addTask={addTask}/>
        <br/>
            <input type="checkbox" onChange={onShowAll} id="showAll" name="showAll"/>
            <label htmlFor="showAll">Alle anzeigen</label>
        </div>
    </div>)

