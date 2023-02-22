import NavBar from '../view/home';

export default function New() { 
 
    return (<>
        <NavBar/>
        <h1>Patient</h1>
        <form action='' method=''>
        <div className='container-md text center'>
            <div className='row justify-content-md-center'>
                <div className='col'>
                    {/* <ul className='profile-list'>
                        <li>Name</li>
                        <li>DOB/age</li>
                        <li>Update:</li>
                    </ul> */}
                    
                        <label className='form-label' for= 'name'>Name</label>
                        <input type={'text'} id='name' className='form-control'/>
                        <label className='form-label' for= 'dob'>DOB</label>
                        <input type={'text'} id='dob' className='form-control'/>
                        <label className='form-label' for= 'age'>Age</label>
                        <input type={'text'} id='age' className='form-control'/>
                        <label className='form-label' for= 'update'>Update</label>
                        <input type={'text'} id='update' className='form-control'/>
                    
                </div>
                <div className='col'>
                    <label className='form-label' for= 'temp'>Temp</label>
                    <input type={'text'} id='temp' className='form-control'/>
                </div>
                <div className='col'>
                    <label className='form-label' for= 'pressure'>Blood Pressure</label>
                    <input type={'text'} id='pressure' className='form-control'/>
                </div>
                <div className='col'>
                    <label className='form-label' for= 'btype'>Blood Type</label>
                    <input type={'text'} id='btype' className='form-control'/>
                </div>
                
            </div>
        </div>
        <div className='container'>
            
            <div className='row '>
                <div className='col'>
                    
                        <label className='form-label' for= 'height'>Height</label>
                        <input type={'text'} id='height' className='form-control'/>
                        <label className='form-label' for= 'weight'>Weight</label>
                        <input type={'text'} id='weight' className='form-control'/>
                        <label className='form-label' for= 'employed'>Currently Employed</label>
                        <input type={'text'} id='employed' className='form-control'/>
                        <label className='form-label' for= 'oxygen'>Oxygen Saturation</label>
                        <input type={'text'} id='oxygen' className='form-control'/>
                        <label className='form-label' for= 'allergies'>Allergies</label>
                        <input type={'text'} id='allergies' className='form-control'/>
                        <label className='form-label' for= 'insured'>Currently insured</label>
                        <input type={'text'} id='insured' className='form-control'/>  
                   
                </div>
            
                <div className='col'>
                   
                        <label className='form-label' for= 'address'>Address</label>
                        <input type={'text'} id='address' className='form-control'/>
                        <label className='form-label' for= 'UUID'>UUDI</label>
                        <input type={'text'} id='UUID' className='form-control'/>
                        <label className='form-label' for= 'medication'>Current Medicationt</label>
                        <input type={'text'} id='medication' className='form-control'/>
                        <label className='form-label' for= 'visit'>List of visit</label>
                        <input type={'text'} id='visit' className='form-control'/>
                        <label className='form-label' for= 'history'>Family History</label>
                        <input type={'text'} id='history' className='form-control'/>
                        
                    
                </div>
            </div>
        </div>
        
    </form>
    </>
    )   
}