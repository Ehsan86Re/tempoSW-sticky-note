import { useState, createContext, useContext, useEffect } from 'react';
import { getStickyNotesAPI, removeStickyNoteAPI, saveStickyNoteAPI } from '../../../mockAPI/mockAPIs'
import type { ColorType } from '../types';

export interface StickyNote {
  id: number;
  value: string;
  initPosition: { top: number, left: number }
  color: ColorType
}

export type StickyNoteContextType = {
  stickyNotes: StickyNote[];
  saveStickyNote: (note: string) => void;
  removeStickNote: (id: number) => void;
};

export const StickyNoteContext = createContext<StickyNoteContextType | null>(null);

export const useStickyNotes = () => {
  const { stickyNotes, saveStickyNote, removeStickNote } = useContext(StickyNoteContext) as StickyNoteContextType;

  return { stickyNotes, saveStickyNote, removeStickNote }
}

const StickyNoteProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>([]);

  useEffect(() => {
    (async () => {
      const list: StickyNote[]= await getStickyNotesAPI()
      setStickyNotes(list)
    })()
  }, [])

  const saveStickyNote = async (note: string) => {
    const newStickyNote = await saveStickyNoteAPI(note)
    setStickyNotes([...stickyNotes, newStickyNote]);
  };

  const removeStickNote = async (id:  number) => {

    const newList = await removeStickyNoteAPI(id)

    setStickyNotes(newList)
  }

  return <StickyNoteContext.Provider value={{ stickyNotes, saveStickyNote, removeStickNote }}>
    {children}
  </StickyNoteContext.Provider>;
};

export default StickyNoteProvider;