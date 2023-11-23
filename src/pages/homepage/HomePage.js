import './HomePage.css';
import { Outlet, Link } from 'react-router-dom';
import videoBg from '../../video/JON_CODE.mp4';

export default function HomePage() {
    return (
        <>
        <div className='hero-page'>
            <div className='overlay'></div>
            <video src={videoBg} autoPlay loop muted></video>
            <div className='content'>
                <h1>My Coding Journey</h1>
                <h2>Welcome</h2>
            </div>
        </div>
        <div className='bio-page'>
            <h1>Software Developer</h1>
            <h3> My Journey into programming</h3>
            <p></p>
        </div>
        <Outlet />
        </>
    );
}