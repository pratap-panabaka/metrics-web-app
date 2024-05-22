import { useEffect, useState } from 'react'

import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Header from '../components/Header';
import Search from '../components/Search';

const API = import.meta.env.VITE_API_URL;

function Home() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // search
    const [search, setSearch] = useState(null);

    const [nPerPage] = useState(100);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(API)
            const json = await response.json();
            setData(json);
            console.log(json);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Header />
            {
                loading &&
                <div className='min-h center-div bg-lite max-width'>
                    <Spinner />
                </div>
            }
            {
                error &&
                <div className='min-h center-div bg-lite max-width'>
                    <div className='font-bold text-dark text-center'>
                        <p>Error while fetching data.</p>
                        <p>Server might be down.</p>
                        <p>Please refresh the page or try after sometime.</p>
                    </div>
                </div>
            }
            {
                data &&
                <div className='min-h bg-lite max-width'>
                    <div className='flex flex-col space-y-5 p-5'>
                        <div className='text-dark font-bold'>{data.length} Mutual Funds data fetched</div>
                        <Search setSearch={setSearch} />
                        {
                            search
                                ?
                                <div className='grid grid-cols-2 gap-5 md:max-w-4xl mx-auto'>
                                    {
                                        data
                                            .filter((item) => item.schemeName.toLowerCase().includes(search.toLowerCase()) ||
                                                item.schemeCode.toString().includes(search)
                                            )
                                            .map((fund, index) => (
                                                <div key={fund.schemeCode + index}>
                                                    <Card fundingInstitute={fund} index={index} />
                                                </div>
                                            ))
                                    }
                                </div>
                                :
                                <>
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        setPage(e.target[0].value);
                                    }}>
                                        <div>
                                            <label className='text-dark font-bold'>
                                                Go to Page Number
                                            </label>
                                            <input
                                                type='number'
                                                placeholder='Page'
                                                defaultValue={1}
                                                min={1}
                                                max={Math.ceil(data.length / nPerPage)}
                                                className='mx-2 remove-arrow text-center border border-toolite text-dark h-8 outline-none focus:border-2 font-custom placeholder:font-custom'
                                                required
                                            />
                                            <label className='text-dark font-bold'>
                                                /{Math.ceil(data.length / nPerPage)} <span className='text-sm text-toolite'>(100 per page)</span>
                                            </label>
                                        </div>
                                    </form>
                                    <div className='text-dark font-bold'>Showing Funding companies from {(page - 1) * 100 + 1} to {(page * 100) > data.length ? data.length : page * 100}</div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        {
                                            data
                                                .slice((page - 1) * 100, (page * 100))
                                                .map((fund, index) => (
                                                    <div key={fund.schemeCode + index}>
                                                        <Card fundingInstitute={fund} index={((page - 1) * 100) + index} />
                                                    </div>
                                                ))
                                        }
                                    </div>
                                </>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Home;