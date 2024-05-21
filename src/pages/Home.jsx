import { useEffect, useState } from 'react'

import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Header from '../components/Header';

const API = import.meta.env.VITE_API_URL;

function Home() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(API)
            const json = await response.json();
            setData(json.slice(0, 20));
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
            <div className='min-h center-div bg-lite'>
                {
                    loading &&
                    <Spinner />
                }
                {
                    error &&
                    <p className='font-bold text-xl'>Error while fetching data</p>
                }
                {
                    data &&
                    <div className='grid grid-cols-2 gap-5 md:max-w-4xl mx-auto'>
                        {
                            data
                                .map((fund, index) => (
                                    <div key={fund.schemeCode + index}>
                                        <Card fundingInstitute={fund} />
                                    </div>
                                ))
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default Home;