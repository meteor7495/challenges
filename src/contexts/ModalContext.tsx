import { createContext, useContext, ReactNode, useState } from "react";
interface ModalContextType {
  isOpen: boolean;
  mode: "add" | "edit" | null;
  currentTodo: { id: number; title: string; checked: boolean } | null;
  openModal: (mode: "add" | "edit", todo?: { id: number; title: string; checked: boolean }) => void;
  closeModal: () => void;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"add" | "edit" | null>(null);
  const [currentTodo, setCurrentTodo] = useState<{ id: number; title: string; checked: boolean } | null>(null);

  const openModal = (mode: "add" | "edit", todo?: { id: number; title: string; checked: boolean }) => {
    setMode(mode);
    setCurrentTodo(todo || null);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
  return (
    <ModalContext.Provider value={{ isOpen, mode, currentTodo, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
