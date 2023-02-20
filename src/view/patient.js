import NavBar from '../view/home';
export default function Patient() {
    return (<>
        <NavBar/>
        <h1>Patient</h1>
        <div className='box'>
            <div className='profile'>
                <ul className='profile-list'>
                    <li>Name</li>
                    <li>DOB/age</li>
                    <li>Update:</li>
                </ul>
            </div>
            <div className='temp'>
                
            </div>
            <div className='blood-pressure'>
                
            </div>
            <div className='blood-type'>
                
            </div>
        </div>
    
    </> 
    )
}