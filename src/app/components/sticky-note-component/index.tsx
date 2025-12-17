import { useCallback, useRef, useState, type DragEvent, type RefObject } from 'react'
import './style.css'
import { useStickyNotes, type StickyNote } from '../../contexts/StickyNoteContext'

type StickyNoteComponentProp = {
  data: StickyNote,
  containerRef: RefObject<HTMLDivElement | null>
  removeRef: RefObject<HTMLDivElement | null>
}

function StickyNoteComponent({ data, containerRef, removeRef }: StickyNoteComponentProp) {

  const { removeStickNote } = useStickyNotes()
  const [position, setPosition] = useState<{ left: number, top: number }>({ ...data.initPosition })

  const elementRef = useRef<HTMLDivElement | null>(null);
  const offset = useRef({ x: 0, y: 0 });

  const onDragStart = useCallback((e: DragEvent<HTMLDivElement>) => {

    // Calculate the initial offset from the pointer position to the element's edge
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      offset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  }, []);

  const onDrag = (e: DragEvent<HTMLDivElement>) => {

    if (containerRef.current && elementRef.current && removeRef.current) {
      const removeElement = removeRef.current.getBoundingClientRect();
      const parentRect = containerRef.current.getBoundingClientRect();
      const elementRect = elementRef.current.getBoundingClientRect();


      // if pointer is in remove button area
      if (
        removeElement.left < e.clientX && e.clientX < removeElement.left + removeElement.width &&
        removeElement.top < e.clientY && e.clientY < removeElement.top + removeElement.height
      ) {
        removeStickNote(data.id)
        return
      }

      // Calculate new position relative to the parent container
      let newX = e.clientX - parentRect.left - offset.current.x;
      let newY = e.clientY - parentRect.top - offset.current.y;

      // Constrain movement within the parent boundaries
      newX = Math.max(0, Math.min(newX, parentRect.width - elementRect.width));
      newY = Math.max(0, Math.min(newY, parentRect.height - elementRect.height));

      setPosition({ left: newX, top: newY })
    }
  }

  return (
    <div ref={elementRef} draggable onDragEnd={onDrag} onDragStart={onDragStart} className='sticky-note' style={{ ...position, backgroundColor: data.color }}>
      {data.value}
    </div>
  )
}

export default StickyNoteComponent
