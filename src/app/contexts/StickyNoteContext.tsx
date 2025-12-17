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
};

export const StickyNoteContext = createContext<StickyNoteContextType | null>(null);

export const useStickyNotes = () => {
  const { stickyNotes, saveStickyNote } = useContext(StickyNoteContext) as StickyNoteContextType;

  return { stickyNotes, saveStickyNote }
}

const StickyNoteProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>([]);

  const saveStickyNote = (note: string) => {
    const newStickyNote: StickyNote = {
      id: Math.random(),
      value: note,
      initPosition: { top: Math.random() * 100, left: Math.random() * 100 },
      color: selectRandomColorType()
    };
  
    setStickyNotes([...stickyNotes, newStickyNote]);
  };

  return <StickyNoteContext.Provider value={{ stickyNotes, saveStickyNote }}>
    {children}
  </StickyNoteContext.Provider>;
};

export default StickyNoteProvider;