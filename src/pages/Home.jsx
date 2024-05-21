import { useEffect, useState } from 'react'

import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Header from '../components/Header';
import Search from '../components/Search';
import sliceArray from '../helperFunctions/sliceArray';

const API = import.meta.env.VITE_API_URL;

function Home() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // search
    const [search, setSearch] = useState(null);
    const [fullData, setFullData] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(API)
            const json = await response.json();
            setFullData(json);

            // set random 20
            const result = sliceArray(json);
            setData(result);
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
                        <Search setSearch={setSearch} />
                        {
                            search
                                ?
                                <div className='grid grid-cols-2 gap-5 md:max-w-4xl mx-auto'>
                                    {
                                        fullData
                                            .filter((item) => item.schemeName.toLowerCase().startsWith(search.toLowerCase()) ||
                                                item.schemeCode.toString().startsWith(search) ||
                                                item.schemeCode.toString().endsWith(search)
                                            )
                                            .map((fund, index) => (
                                                <div key={fund.schemeCode + index}>
                                                    <Card fundingInstitute={fund} index={index} />
                                                </div>
                                            ))
                                    }
                                </div>
                                :
                                <div className='grid grid-cols-2 gap-5 md:max-w-4xl mx-auto'>
                                    {
                                        data
                                            .map((fund, index) => (
                                                <div key={fund.schemeCode + index}>
                                                    <Card fundingInstitute={fund} index={index} />
                                                </div>
                                            ))
                                    }
                                </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Home;