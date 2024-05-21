import { createContext, useState } from "react";

export const MfiContext = createContext();

export const MfiContextProvider = (props) => {
    const obj = props;
    const { children } = obj;
    const [state, setState] = useState(null);

    return (
        <MfiContext.Provider value={{ state, setState }}>
            {children}
        </MfiContext.Provider>
    )
}