import './ShowAll.css'

interface Props{
    cbValue: boolean;
    cbChange: () => void
}

export const ShowAll = (props: Props) =>{

    return(
        <div>
            <input type="checkbox" id="showAll" name="showAll" checked={props.cbValue} onClick={props.cbChange}/>
            <label htmlFor="showAll">Alle anzeigen</label>
        </div>
    )
}