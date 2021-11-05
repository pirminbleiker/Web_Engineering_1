interface Props {
     onChanged: (value: number) => void;
     id: number
}

export const Flash = ({id, onChanged}: Props) => {
    const changePriority = () => {
        onChanged(id)
    }

    return (
        <div className="flash" onClick={changePriority}>
            <div>{'\u26A1'}</div>
        </div>
    )
}

