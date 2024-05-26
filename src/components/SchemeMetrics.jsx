import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { useEffect } from "react";
import Spinner from "./Spinner";

function SchemeMetrics() {
    const { id } = useParams();
    const { fetchData, isLoading, error, data } = useFetchData();

    useEffect(() => {
        fetchData(id);
    }, [id])

    return (
        <>
            {
                isLoading &&
                <div className='min-h center-div bg-lite max-width font-bold text-dark text-center'>
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
                data &&
                <div className='min-h bg-lite p-5 space-y-5 max-width'>
                    <div className="bg-dark text-white p-5 flex flex-col space-y-2">
                        <div className="text-center font-bold font-custom">Metrics for Scheme Code - {data.meta.scheme_code}</div>
                        <div className="border border-toolite px-4 py-2">
                            <p>Funding House Name:-</p>
                            <p className="font-bold font-custom text-white">{data.meta.fund_house}</p>
                        </div>
                        <div className="border border-toolite px-4 py-2">
                            <p>Scheme Code:-</p>
                            <p className="font-bold font-custom text-white">{data.meta.scheme_code}</p>
                        </div >
                        <div className="border border-toolite px-4 py-2">
                            <p>Number of rows found:-</p>
                            <p className="font-bold font-custom text-white">{data.data.length}</p>
                        </div >
                    </div >
                    <table className="table-fixed w-full">
                        <thead>
                            <tr className="font-custom sticky z-40 top-[63px] text-white bg-dark">
                                <th className="tb font-bold">Date</th>
                                <th className="tb font-bold">NAV</th>
                            </tr>
                        </thead>
                        <tbody className="tb text-center">
                            {
                                data.data.map((item, idx) => (
                                    <tr key={`${data.meta.scheme_code + idx}`}
                                        className="tb bg-lite even:bg-dark even:text-white text-toodark"
                                    >
                                        <td className="tb p-2 font-bold">{item.date}</td>
                                        <td className="tb p-2 font-bold">{item.nav}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

export default SchemeMetrics;