import { Link } from 'react-router-dom';
import { FcNext } from 'react-icons/fc';

function Card(props) {
    const obj = props;
    const { fundingInstitute } = obj;

    return (
        <div className='text-center text-toodark font-custom text-sm min-h-[200px] space-y-2 bg-toolite items-center justify-center flex flex-col p-5'>
            <div>{fundingInstitute.schemeName}</div>
            <p>{fundingInstitute.schemeCode}</p>
            <span>
                <Link to={`/${fundingInstitute.schemeCode}`}>
                    <FcNext className='items-center text-center font-bold' />
                </Link>
            </span>
        </div>
    )
}

export default Card;