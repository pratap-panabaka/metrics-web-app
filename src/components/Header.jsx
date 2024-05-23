import { Link, useMatch, useParams } from "react-router-dom";
import { FcNext } from 'react-icons/fc';
import { FcPrevious } from 'react-icons/fc';

function Header() {

    const { id } = useParams();

    const root = useMatch("/");
    const details = useMatch(`/${id}`);
    const metrics = useMatch(`/${id}/metrics`);

    return (
        <header className='bg-toodark sticky top-0 z-50'>
            <nav className='max-width h-16 flex space-x-2 font-custom justify-between items-center p-5'>
                <div className="flex-none w-[24px]">{root ? null : details ? <Link to={"/"}><FcPrevious fontSize={24} /></Link> : <Link to={`/${id}`}><FcPrevious fontSize={24} /></Link>}</div>
                <div className='flex-grow text-center text-xl text-white'><Link to={"/"}>Indian Mutual Funds</Link></div>
                <div className="flex-none w-[24px]">{root ? null : details ? <Link to={`/${id}/metrics`}><FcNext fontSize={24} /></Link> : null}</div>
            </nav>
        </header >
    )
}

export default Header