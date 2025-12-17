import Button from '../button'
import './style.css'

type NewNoteProps = {
    onNew: () => void
}

function NewNote({ onNew }: NewNoteProps) {

    return (
        <Button text="Add New Note" onClick={onNew}/>
    )
}

export default NewNote