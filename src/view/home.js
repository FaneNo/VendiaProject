import {Link } from 'react-router-dom';
export default function Home() {
    return <nav className="nav">
        <div className="homeImg" >
            <Link to="/"><img className="vendiaLogo" src={require("../vendiaLogo.png")} /></Link>
        </div>
        <Link to="/" className="title">Site name</Link>
        <ul>
            <li>
                <Link to="/fda">FDA</Link>   
            </li>
            <li>
                <Link to="/patient">Patient</Link>
            </li>
            <li>
                <Link to="/doctor">Doctor</Link>
            </li>
            <li>
                <Link to="/new">New patient</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            
        </ul>
    </nav>
}