import { useMfiContext } from "../hooks/useMfiContext";

function SchemeMetrics() {

    const { state } = useMfiContext();

    return (
        <div className="min-h center-div bg-lite max-width">
            {
                !state &&
                <div className="text-white text-center">
                    <h2>You might have hit refresh/ Page might have reloaded. Click Back button on the top to to to details page.</h2>
                </div>
            }
            {
                state &&
                <div>
                    <table className="table-fixed relative tb">
                        <thead className="tb">
                            <tr>
                                <th className="tb sticky z-40 top-[64px] font-bold bg-toolite">Date</th>
                                <th className="tb sticky z-40 top-[64px] font-bold bg-toolite">NAV</th>
                            </tr>
                        </thead>
                        <tbody className="tb">
                            {
                                state.data.map((item, idx) => (
                                    <tr key={`${state.meta.scheme_code + idx}`}
                                        className="tb bg-toolite even:bg-lite"
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
        </div>
    )
}

export default SchemeMetrics;