import { Link, useMatch, useParams } from "react-router-dom";
import { FcNext } from 'react-icons/fc';
import { FcPrevious } from 'react-icons/fc';

function Header() {

    const { id } = useParams();

    const matchForBoth = useMatch(`/${id}`);
    const matchForBack = useMatch(`/${id}/metrics`);

    return (
        <header className='bg-toodark sticky top-0 z-50'>
            <nav className="max-width">
                <div className="flex max-w-7xl text-white mx-auto items-center h-16 p-5">
                    <div className="flex-none w-fit text-3xl text-left">{matchForBoth && <Link to={"/"}><FcPrevious /></Link>}</div>
                    <div className="flex-none w-fit text-3xl text-left">{matchForBack && <Link to={`/${id}`}><FcPrevious /></Link>}</div>
                    <div className='flex-grow text-center text-2xl font-bold'><Link to={"/"}>Indian Mutual Funds</Link></div>
                    <div className="flex-none w-fit text-3xl text-right">{matchForBoth && <Link to={`/${id}/metrics`}><FcNext /></Link>}</div>
                </div>
            </nav>
        </header >
    )
}

export default Header