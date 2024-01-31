import React from "react";
import { useState, ReactNode } from "react";
import Context from './Context';

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {

    const [element, setElement] = useState<any | null>([]);

    return (
        <Context.Provider value={{ element, setElement }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider