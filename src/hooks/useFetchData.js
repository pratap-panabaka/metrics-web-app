import { useState } from "react";

export const useFetchData = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState(null);

    const API = import.meta.env.VITE_API_URL;

    const fetchData = async (id) => {
        try {
            setIsLoading(true);
            setError(null);
            setData(null);
            const response = await fetch(`${API}/${id}`);
            const json = await response.json();
            setData(json);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    return { fetchData, isLoading, data, error }
}