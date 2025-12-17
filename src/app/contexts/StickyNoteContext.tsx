import { useState, createContext, useContext } from 'react';

export interface StickyNote {
  id: number;
  value: string;
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
  const [stickyNotes, setStickyNotes] = useState<StickyNote[]>([{ id: 10, value: 'Sample Text for test' }]);

  const saveStickyNote = (note: string) => {
    const newStickyNote: StickyNote = {
      id: Math.random(),
      value: note
    };
  
    setStickyNotes([...stickyNotes, newStickyNote]);
  };

  return <StickyNoteContext.Provider value={{ stickyNotes, saveStickyNote }}>
    {children}
  </StickyNoteContext.Provider>;
};

export default StickyNoteProvider;