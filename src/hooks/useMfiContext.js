import { useContext } from "react";
import { MfiContext } from "../context/MfiContext";

export const useMfiContext = () => {
    const context = useContext(MfiContext)

    if (!context) {
        throw Error('Context must be used only inside provider')
    }

    return context;
}