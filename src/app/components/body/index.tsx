import './style.css'
import { useStickyNotes, type StickyNote } from '../../contexts/StickyNoteContext'
import StickyNoteComponent from '../sticky-note-component';
import { useRef } from 'react';

function Body() {
    const { stickyNotes } = useStickyNotes();
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} id="container">
            {stickyNotes.map((stickyNote: StickyNote) => <StickyNoteComponent key={stickyNote.id} data={stickyNote} containerRef={containerRef}/>)}
        </div>
    )
}

export default Body
