import './HomePage.css';
import { Outlet, Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
        <div className='hero-page'>
            <h1>My Coding Journey</h1> 
        </div>
        <Outlet />
        </>
    );
}