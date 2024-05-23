import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMfiContext } from "../hooks/useMfiContext";
import { useFetchData } from "../hooks/useFetchData";
import Spinner from "./Spinner";

function SchemeDetails() {
    const { state } = useMfiContext();
    const { id } = useParams();
    const { fetchData, isLoading, error } = useFetchData();

    useEffect(() => {
        !state && fetchData(id);
    }, [id, state])

    return (
        <>
            {
                isLoading &&
                <div className='min-h center-div bg-lite max-width'>
                    <Spinner />
                </div>
            }
            {
                error &&
                <div className='min-h center-div bg-lite max-width font-bold text-dark text-center'>
                    <p>Error while fetching data.</p>
                    <p>Server might be down.</p>
                    <p>Please refresh the page or try after sometime.</p>
                </div>
            }
            {
                state &&
                <div className='min-h bg-lite p-5 space-y-2 max-width'>
                    <div className="bg-dark text-white p-5 flex flex-col shadow-custom space-y-2">
                        <div className="text-center font-bold font-custom">Details of Scheme Code - {state.meta.scheme_code}</div>
                        <div className="border border-toolite px-4 py-2">
                            <p>Funding House Name:-</p>
                            <p className="font-bold font-custom text-white">{state.meta.fund_house}</p>
                        </div>
                        <div className="border border-toolite px-4 py-2">
                            <p>Scheme Category:-</p>
                            <p className="font-bold font-custom text-white">{state.meta.scheme_category}</p>
                        </div>
                        <div className="border border-toolite px-4 py-2">
                            <p>Scheme Code:-</p>
                            <p className="font-bold font-custom text-white">{state.meta.scheme_code}</p>
                        </div >
                        <div className="border border-toolite px-4 py-2">
                            <p>Scheme Name:-</p>
                            <p className="font-bold font-custom text-white">{state.meta.scheme_name}</p>
                        </div >
                        <div className="border border-toolite px-4 py-2">
                            <p> Scheme Type:-</p>
                            <p className="font-bold font-custom text-white">{state.meta.scheme_type}</p>
                        </div >
                        <div className="border border-toolite px-4 py-2">
                            <p>Number of rows found:-</p>
                            <p className="font-bold font-custom text-white">{state.data.length}</p>
                        </div >
                    </div >
                </div >
            }
        </>
    )
}

export default SchemeDetails