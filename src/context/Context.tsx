import { createContext } from "react";

export interface ElementInterface {
  name: string,
  value: number,
  color: string
}

export interface ContextInterface {
  element: ElementInterface[];
  setElement: (value: ElementInterface[]) => void; 
  title: string;
  setTitle: (value: string) => void;
}

export const ElementContext = createContext<ContextInterface | null>(null);