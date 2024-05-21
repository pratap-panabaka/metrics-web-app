import { useParams } from "react-router-dom";
import { useMfiContext } from "../hooks/useMfiContext";
import Spinner from "./Spinner";
import { useFetchData } from "../hooks/useFetchData";
import { useEffect } from "react";

function SchemeDetails() {
    const { id } = useParams();
    const { fetchData, isLoading, error } = useFetchData();

    useEffect(() => {
        fetchData(id);
    }, [])

    const { state } = useMfiContext();

    return (
        <>
            {
                isLoading &&
                <div className='min-h center-div bg-lite'>
                    <Spinner />
                </div>
            }
            {
                error &&
                <div className='min-h center-div bg-lite'>
                    <p className='font-bold text-xl'>Error while fetching data</p>
                </div>
            }
            {
                state &&
                <div className='min-h bg-lite p-5'>
                    <h3 className="text-base text-toodark font-bold text-center">Details of Scheme Code {state.meta.scheme_code}</h3>
                    <div className="bg-toodark text-lite p-5 flex flex-col shadow-custom">
                        <p>Funing House Name: <span>{state.meta.fund_house}</span></p>
                        <p>Scheme Category: <span>{state.meta.scheme_category}</span></p>
                        <p>Scheme Code: <span>{state.meta.scheme_code}</span></p>
                        <p>Scheme Name: <span>{state.meta.scheme_name}</span></p>
                        <p>Scheme Type: <span>{state.meta.scheme_type}</span></p>
                    </div>
                </div>
            }
        </>
    )
}

export default SchemeDetails