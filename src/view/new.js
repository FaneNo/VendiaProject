import NavBar from '../view/home';
import useJaneHopkins from '../hooks/useJaneHopkins';
import {useState} from 'react';
export default function New() { 
    
    const [patients, setPatients] = useState({
        name: '',
        dob: '',
        insuranceNumber: '',
        height: '',
        weight: '',
        bloodPressure: '',
        temperature: '',
        oxygenSaturation: '',
        uuid: '',
        address: '',
        currentMedications: [{'medication': "med1"}],
        familyHistory: '',
        currentlyEmployed: '',
        currentlyInsured: '',
        icdHealthCodes: [{'code': 'code1'}],
        allergies: [{'allergy': 'allergy1'}],
        visits: [{"patient": "patient1", "dateTime": "2023-03-04T10:00:00Z", "notes": "notes1", "hivViralLoad": ""}],
        bloodType: ''
      });
    
      const { entities } = useJaneHopkins();
    
      const addPatient = async () => {
        try {
          const response = await entities.patient.add(patients);
          console.log(response);
          setPatients({
            name: '',
            dob: '',
            insuranceNumber: '',
            height: '',
            weight: '',
            bloodPressure: '',
            temperature: '',
            oxygenSaturation: '',
            uuid: '',
            address: '',
            currentMedications: [{'medication': "med1"}],
            familyHistory: '',
            currentlyEmployed: '',
            currentlyInsured: '',
            icdHealthCodes: [{'code': 'code1'}],
            allergies: [{'allergy': 'allergy1'}],
            visits: [{"patient": "patient1", "dateTime": "2023-03-04T10:00:00Z", "notes": "notes1", "hivViralLoad": ""}],
            bloodType: ''
          });
        } catch (error) {
          console.error(error);
        }
      };
    
    //   const handleInputChange = (event) => {
    //     console.log('handleInputChange called');
    //     const { name, value } = event.target;
    //     setPatients((prevState) => ({
    //       ...prevState,
    //       [name]: value
    //     }));
    //   };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        await addPatient();
      };
    
   
    return (<>
        <NavBar/>
        <div className='newBox'>
            <h2>New Patient</h2>
            <form onSubmit={handleSubmit}>
                <div className='container-md text-center'>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <label className='form-label' htmlFor='name' >Name: {' '} </label>
                                <input type={'text'} id='name' className='form-control' value={patients.name}  onChange ={(e) => setPatients({...patients, name: e.target.value})} />
                    
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'dob'>DOB</label>
                                <input type={'text'} id='dob' className='form-control' value={patients.dob} onChange = {(e) => setPatients({...patients, dob: e.target.value})} />
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'UUID'>UUDI</label>
                                <input type={'text'} id='UUID' className='form-control' value={patients.uuid} onChange = {(e) => setPatients({...patients, uuid: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'history'>Family History</label>
                                <input type={'text'} id='history' className='form-control' value={patients.familyHistory} onChange = {(e) => setPatients({...patients, familyHistory: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'insurance'>Insurance number</label>
                                <input type={'text'} id='insurance' className='form-control' value={patients.insuranceNumber} onChange = {(e) => setPatients({...patients, insuranceNumber: e.target.value})}/>
                            </div>
                        </div>
                        <div className='col'>
                            <div>
                                <label className='form-label' htmlFor= 'temp'>Temp</label>
                                <input type={'text'} id='temp' className='form-control' value={patients.temperature} onChange = {(e) => setPatients({...patients, temperature: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'height'>Height</label>
                                <input type={'text'} id='height' className='form-control' value={patients.height} onChange = {(e) => setPatients({...patients, height: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'weight'>Weight</label>
                                <input type={'text'} id='weight' className='form-control' value={patients.weight} onChange = {(e) => setPatients({...patients, weight: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'employed'>Currently Employed</label>
                                <input type={'text'} id='employed' className='form-control' value={patients.currentlyEmployed} onChange = {(e) => setPatients({...patients, currentlyEmployed: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'address'>Address</label>
                                <input type={'text'} id='address' className='form-control' value={patients.address} onChange = {(e) => setPatients({...patients, address: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'visit'>List of visit</label>
                                <input type={'text'} id='visit' className='form-control' value={patients.visits} onChange = {(e) => setPatients({...patients, visits: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'icd'>ICD health codes</label>
                                <input type={'text'} id='icd' className='form-control' value={patients.icdHealthCodes} onChange = {(e) => setPatients({...patients, icdHealthCodes: e.target.value})}/>
                            </div>
                            
                        </div>
                        <div className='col'>
                            <div>
                                <label className='form-label' htmlFor= 'pressure'>Blood Pressure</label>
                                <input type={'text'} id='pressure' className='form-control' value={patients.bloodPressure} onChange = {(e) => setPatients({...patients, bloodPressure: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'oxygen'>Oxygen Saturation</label>
                                <input type={'text'} id='oxygen' className='form-control' value={patients.oxygenSaturation} onChange = {(e) => setPatients({...patients, oxygenSaturation: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'allergies'>Allergies</label>
                                <input type={'text'} id='allergies' className='form-control' value={patients.allergies} onChange = {(e) => setPatients({...patients, allergies: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'insured'>Currently insured</label>
                                <input type={'text'} id='insured' className='form-control' value={patients.currentlyInsured} onChange = {(e) => setPatients({...patients, currentlyInsured: e.target.value})}/> 
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'btype'>Blood Type</label>
                                <input type={'text'} id='btype' className='form-control' value={patients.bloodType} onChange = {(e) => setPatients({...patients, bloodType: e.target.value})}/>
                            </div>
                            <div>
                                <label className='form-label' htmlFor= 'medication'>Current Medicationt</label>
                                <input type={'text'} id='medication' className='form-control' value={patients.currentMedications} onChange = {(e) => setPatients({...patients, currentMedications: e.target.value})}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='button'>
                    <button type='submit' >add patient</button>
                </div>
                
                
            </form>
        </div>
    </>
    )   
}
