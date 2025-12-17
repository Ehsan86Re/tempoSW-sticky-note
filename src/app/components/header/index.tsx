import { useState } from 'react'
import './style.css'
import InputBar from '../input-bar'
import { useStickyNotes } from '../../contexts/StickyNoteContext'
import Button from '../button'

function Header() {

    const [note, setNote] = useState<string>('')
    const { saveStickyNote } = useStickyNotes()

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }

    const onNew = () => {
        if (!!note) {
            saveStickyNote(note)
        }
        setNote('')
    }

    return (
        <div id="header">
            <Button text='Add New Note' onClick={onNew}/>
            <InputBar value={note} onChange={onTextChange}/>
        </div>
    )
}

export default Header