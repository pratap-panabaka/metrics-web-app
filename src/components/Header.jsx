import { Link, useMatch, useParams } from "react-router-dom";
import { FcNext } from 'react-icons/fc';
import { FcPrevious } from 'react-icons/fc';

function Header() {

    const { id } = useParams();

    const matchForBoth = useMatch(`/${id}`);
    const matchForBack = useMatch(`/${id}/metrics`);

    return (
        <header className='sticky top-0 z-50'>
            <nav className='bg-toodark'>
                <div className="flex max-w-7xl text-white mx-auto h-16 p-5">
                    <div className="flex-none w-fit text-left">{matchForBoth && <Link to={"/"}><FcPrevious /></Link>}</div>
                    <div className="flex-none w-fit text-left">{matchForBack && <Link to={`/${id}`}><FcPrevious /></Link>}</div>
                    <div className='flex-grow text-center font-bold'><Link to={"/"}>Indian Mutual Funds</Link></div>
                    <div className="flex-none w-fit text-right">{matchForBoth && <Link to={`/${id}/metrics`}><FcNext /></Link>}</div>
                </div>
            </nav>
        </header >
    )
}

export default Header