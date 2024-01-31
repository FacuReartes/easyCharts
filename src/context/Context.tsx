import { createContext } from "react";

interface ContextInterface {
    element: any | null;
    setElement: (value: any | null) => void; 
    title: any | null;
    setTitle: (value: any | null) => void;

}

const ElementContext = createContext<ContextInterface | null>(null);

export default ElementContext;