import { useContext } from "react";
import { FullDataContext } from "../context/FullDataContext";

export const useFullDataContext = () => {
    const context = useContext(FullDataContext)

    if (!context) {
        throw Error('Context must be used only inside provider')
    }

    return context;
}