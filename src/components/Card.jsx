import { Link } from 'react-router-dom';
import { FcNext } from 'react-icons/fc';

function Card(props) {
    const obj = props;
    const { fundingInstitute, index } = obj;

    return (
        <div className='relative text-white font-custom text-sm md:text-base min-h-[200px] space-y-2 bg-dark items-center justify-center flex flex-col p-5'>
            <div>{fundingInstitute.schemeName}</div>
            <p>{fundingInstitute.schemeCode}</p>
            <Link to={`/${fundingInstitute.schemeCode}`}>
                <FcNext className='items-center text-center text-xl' />
            </Link>
            <p className='absolute top-1 right-1 font-normal font-sans text-white'>{index + 1}</p>
        </div>
    )
}

export default Card;