import { useState } from 'react'
import './style.css'
import NewNote from '../new-note'
import InputBar from '../input-bar'

function Header() {

    const [note, setNote] = useState<string>('')

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }

    return (
        <div id="header">
            <NewNote onNew={() => null}/>
            <InputBar value={note} onChange={onTextChange}/>
        </div>
    )
}

export default Header