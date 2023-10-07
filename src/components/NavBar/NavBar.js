import './NavBar.css'
import { Outlet, Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <header className="Nav-header">
                <h6>Jon's Code Odyssey: <br></br>Navigating the Programming Universe</h6>
                <ul className='Nav-header'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blogpage'>Blog</Link>
                    </li>
                </ul>
            </header>

            <Outlet />
        </>
    );
}