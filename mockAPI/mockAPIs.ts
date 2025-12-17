import type { StickyNote } from "../src/app/contexts/StickyNoteContext"
import selectRandomColorType from "../src/app/utils/selectRandomColor";

export const saveStickyNoteAPI = async (text: string): Promise<StickyNote> => {
    const newStickyNote: StickyNote = {
      id: Math.floor(Math.random() * 1000),
      value: text,
      initPosition: { top: Math.random() * 100, left: Math.random() * 100 },
      color: selectRandomColorType()
    };

    let list = await localStorage.getItem('sticky-list') ?? '[]'
    list = JSON.parse(list)
    await localStorage.setItem('sticky-list', JSON.stringify([...list, newStickyNote]))

    return newStickyNote;
}

export const removeStickyNoteAPI = async (id: number): Promise<StickyNote[]> => {
    let list = await localStorage.getItem('sticky-list') ?? '[]'
    let parsedList: StickyNote[] = JSON.parse(list)

    const newStickyNoteList = parsedList.filter((stickyNote: StickyNote) => stickyNote.id != id)
    await localStorage.setItem('sticky-list', JSON.stringify(newStickyNoteList))

    return newStickyNoteList
}

export const getStickyNotesAPI = async (): Promise<StickyNote[]> => {
    let list = await localStorage.getItem('sticky-list') ?? '[]'
    let parsedList: StickyNote[] = JSON.parse(list)

    return parsedList
}
