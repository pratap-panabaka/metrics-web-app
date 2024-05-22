import { createContext, useState } from "react";

export const FullDataContext = createContext();

export const FullDataContextProvider = (props) => {
    const obj = props;
    const { children } = obj;
    const [fullData, setFullData] = useState(null);

    return (
        <FullDataContext.Provider value={{ fullData, setFullData }}>
            {children}
        </FullDataContext.Provider>
    )
}