import { FC } from "react";
import { useState, ReactNode } from "react";
import { ElementContext, ElementInterface } from './Context';

interface ContextProviderProps {
  children: ReactNode;
}

// Provider of the context
const ContextProvider: FC<ContextProviderProps> = ({ children }) => {

  // Defines the element list and title as states
  const [element, setElement] = useState<ElementInterface[]>([]);
  const [title, setTitle] = useState<string>('Natural Geography');

  return (
    <ElementContext.Provider value={{ element, setElement, title, setTitle }}>
      {children}
    </ElementContext.Provider>
  )
}

export default ContextProvider