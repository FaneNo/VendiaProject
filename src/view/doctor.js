import Navbar from '../view/nav';
import useJaneHopkins from '../hooks/useJaneHopkins';
import {useState, useEffect} from 'react';
export default function Doctor() {
    const {entities} = useJaneHopkins();
    const [format, setFormat] = useState("list");
    const [patients, setPatients] = useState();

    const listPatients = async () => {
        let patientList = await entities.patient.list();
        console.log(patientList.items);
        setPatients(patientList.items);
        
    };

    useEffect(() => {
        listPatients();
    }, []);
    
    return (<>
        <Navbar/>
        <h1>Patient Zero</h1>
        {format === "list" ? 
        <><button className='btn btn-primary' onClick={() => { setFormat("list"); } }>List</button>
        <button className='btn btn-danger' onClick={() => { setFormat("grid"); } }>Grid</button></>
        :
        <><button className='btn btn-danger' onClick={() => { setFormat("list"); } }>List</button>
        <button className='btn btn-primary' onClick={() => { setFormat("grid"); } }>Grid</button></>
        }
        
        <h2>{format}</h2>
        {format === "list"?
        <div>{patients?.map((patients, key) => {
            return(
                <>
                <div class="card" >
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style={{background: "cyan"}} key={key}>name: {patients.name}, dob:{patients.dob}</li>
                        
                    </ul>
                </div>
                
                </>
                
            )
        })}</div>
        :
        <div>{patients?.map((patients, key) => {
            return(
                <>
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" key={key}>name: {patients.name}, dob:{patients.dob}, ID: {patients._id}</li>
                        
                    </ul>
                </div>
                
                </>
                
            )
        })}</div>
        }
        
    </>
    )   
}

