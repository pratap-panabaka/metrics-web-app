import { useMfiContext } from "../hooks/useMfiContext";

function SchemeMetrics() {

    const { state } = useMfiContext();
    console.log(state);

    return (
        <>
            {
                !state &&
                <div className='min-h center-div bg-lite max-width font-bold text-dark text-center'>
                    <div className='font-bold text-dark text-center'>
                        <p>You might have hit refresh.</p>
                        <p>Click back button on the top to go back.</p>
                    </div>
                </div>
            }
            {
                state &&
                <div className='min-h bg-lite p-5 space-y-5 max-width'>
                    <div className="bg-dark text-white p-5 flex flex-col space-y-2">
                        <div className="text-center font-bold font-custom">Metrics for Scheme Code - {state.meta.scheme_code}</div>
                        <div className="border border-toodark px-4 py-2">
                            <p>Funding House Name:-</p>
                            <p className="font-bold font-custom text-toolite">{state.meta.fund_house}</p>
                        </div>
                        <div className="border border-toodark px-4 py-2">
                            <p>Scheme Code:-</p>
                            <p className="font-bold font-custom text-toolite">{state.meta.scheme_code}</p>
                        </div >
                        <div className="border border-toodark px-4 py-2">
                            <p>Number of rows found:-</p>
                            <p className="font-bold font-custom text-toolite">{state.data.length}</p>
                        </div >
                    </div >
                    <table className="table-fixed w-full">
                        <thead>
                            <tr className="font-custom sticky z-40 top-[63px] text-toolite bg-dark">
                                <th className="tb font-bold">Date</th>
                                <th className="tb font-bold">NAV</th>
                            </tr>
                        </thead>
                        <tbody className="tb text-center">
                            {
                                state.data.map((item, idx) => (
                                    <tr key={`${state.meta.scheme_code + idx}`}
                                        className="tb bg-lite even:bg-toolite text-toodark"
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