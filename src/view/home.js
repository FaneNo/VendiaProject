export default function Home() {
    return <nav className="nav">
        <div className="homeImg" >
            <a href="/"><img className="vendiaLogo" src={require("../vendiaLogo.png")} /></a>
            
        </div>
        <a href="/" className="title">Site name</a>
        <ul>
            <li>
                <a href="/fda">FDA</a>   
            </li>
            <li>
                <a href="/patient">Patient</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
            
        </ul>
    </nav>
}