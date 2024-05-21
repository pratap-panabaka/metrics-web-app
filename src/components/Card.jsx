import { Link } from 'react-router-dom';
import { FcNext } from 'react-icons/fc';

function Card(props) {
    const obj = props;
    const { fundingInstitute } = obj;

    return (
        <div className='text-center text-sm min-h-[200px] space-y-2 bg-lite items-center justify-center flex flex-col p-5'>
            <div>{fundingInstitute.schemeName}</div>
            <div>
                {fundingInstitute.schemeCode}
                <span>
                    <Link to={`/${fundingInstitute.schemeCode}`}>
                        <FcNext className='items-center text-center text-xl font-bold' />
                    </Link>
                </span>
            </div>
        </div>)
}

export default Card;