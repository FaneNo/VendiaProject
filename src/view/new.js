import NavBar from '../view/home';
import useJaneHopkins from '../hooks/useJaneHopkins';
import {useState} from 'react';
export default function New() { 
    
    const [name, setName] = useState('');
    const [dob, setdob] = useState('');
    const [insuranceNumber, setinsuranceNumber] = useState('');
    const [height, setheight] = useState('');
    const [weight, setweight] = useState('');
    const [bloodPressure, setbloodPressure] = useState('');
    const [temperature, settemperature] = useState('');
    const [oxygenSaturation, setoxygenSaturation] = useState('');
    const [uuid, setuuid] = useState('');
    const [address, setaddress] = useState('');
    const [currentMedications, setcurrentMedications] = useState('');
    const [familyHistory, setfamilyHistory] = useState('');
    const [currentlyEmployed, setcurrentlyEmployed] = useState('');
    const [currentlyInsured, setcurrentlyInsured] = useState('');
    const [icdHealthCodes, seticdHealthCodes] = useState('');
    const [allergies, setallergies] = useState('');
    const [visits, setvisits] = useState('');
    
    const {entities} = useJaneHopkins();
    const addPatient = async () => {

        const addPatientResponse = await entities.patient.add({
            name, dob, insuranceNumber, height, weight, bloodPressure, temperature,
            oxygenSaturation, uuid, address, currentMedications, familyHistory,
            currentlyEmployed, currentlyInsured, icdHealthCodes, allergies, visits
        
        });
        console.log("Patient added:", addPatientResponse);
        setName('');
        setdob('');
        }
    
    return (<>
        <NavBar/>
        <div className='newBox'>
            <h2>New Patient</h2>
            <form >
                <div className='container-md text-center'>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <label className='form-label' for= 'name'>Name</label>
                                <input type={'text'} id='name' className='form-control' value={name} />
                            </div>
                            <div>
                                <label className='form-label' for= 'dob'>DOB</label>
                                <input type={'text'} id='dob' className='form-control' value={dob} />
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
                            <div>
                                <label className='form-label' for= 'insurance'>Insurance number</label>
                                <input type={'text'} id='insurance' className='form-control'/>
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
                            <div>
                                <label className='form-label' for= 'icd'>ICD health codes</label>
                                <input type={'text'} id='icd' className='form-control'/>
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
                <button >add patient</button>
            </form>
        </div>
    </>
    )   
}
