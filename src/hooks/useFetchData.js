import { useState } from "react";
import { useMfiContext } from "./useMfiContext";

export const useFetchData = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState(null);

    const API = import.meta.env.VITE_API_URL;
    const { setState } = useMfiContext();

    const fetchData = async (id) => {
        try {
            setIsLoading(true);
            setError(null);
            setData(null);
            setState(null)
            const response = await fetch(`${API}/${id}`);
            const json = await response.json();
            setData(json);
            setState(json);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    return { fetchData, isLoading, data, error }
}