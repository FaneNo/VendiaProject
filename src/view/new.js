import NavBar from '../view/home';
import useJaneHopkins from '../hooks/useJaneHopkins';

export default function New() { 
    const {entities} = useJaneHopkins();
    return (<>
        <NavBar/>
        <div className='newBox'>
            <h2>New Patient</h2>
            <form action='' method=''>
                <div className='container-md text-center'>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <label className='form-label' for= 'name'>Name</label>
                                <input type={'text'} id='name' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'dob'>DOB</label>
                                <input type={'text'} id='dob' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'age'>Age</label>
                                <input type={'text'} id='age' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'update'>Update</label>
                                <input type={'text'} id='update' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'UUID'>UUDI</label>
                                <input type={'text'} id='UUID' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'history'>Family History</label>
                                <input type={'text'} id='history' className='form-control'/>
                            </div>
                        </div>
                        <div className='col'>
                            <div>
                                <label className='form-label' for= 'temp'>Temp</label>
                                <input type={'text'} id='temp' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'height'>Height</label>
                                <input type={'text'} id='height' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'weight'>Weight</label>
                                <input type={'text'} id='weight' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'employed'>Currently Employed</label>
                                <input type={'text'} id='employed' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'address'>Address</label>
                                <input type={'text'} id='address' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'visit'>List of visit</label>
                                <input type={'text'} id='visit' className='form-control'/>
                            </div>
                        </div>
                        <div className='col'>
                            <div>
                                <label className='form-label' for= 'pressure'>Blood Pressure</label>
                                <input type={'text'} id='pressure' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'oxygen'>Oxygen Saturation</label>
                                <input type={'text'} id='oxygen' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'allergies'>Allergies</label>
                                <input type={'text'} id='allergies' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'insured'>Currently insured</label>
                                <input type={'text'} id='insured' className='form-control'/> 
                            </div>
                            <div>
                                <label className='form-label' for= 'btype'>Blood Type</label>
                                <input type={'text'} id='btype' className='form-control'/>
                            </div>
                            <div>
                                <label className='form-label' for= 'medication'>Current Medicationt</label>
                                <input type={'text'} id='medication' className='form-control'/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <button onClick={() => {}}></button>
            </form>
        </div>
    </>
    )   
}