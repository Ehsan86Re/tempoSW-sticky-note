import { useState, createContext, useContext } from 'react';
import selectRandomColorType from '../utils/selectRandomColor';
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

  const saveStickyNote = (note: string) => {
    const newStickyNote: StickyNote = {
      id: Math.floor(Math.random() * 1000),
      value: note,
      initPosition: { top: Math.random() * 100, left: Math.random() * 100 },
      color: selectRandomColorType()
    };
  
    setStickyNotes([...stickyNotes, newStickyNote]);
  };

  const removeStickNote = (id:  number) => {
    const newStickyNoteList = stickyNotes.filter((stickyNote: StickyNote) => stickyNote.id != id)

    setStickyNotes(newStickyNoteList)
  }

  return <StickyNoteContext.Provider value={{ stickyNotes, saveStickyNote, removeStickNote }}>
    {children}
  </StickyNoteContext.Provider>;
};

export default StickyNoteProvider;