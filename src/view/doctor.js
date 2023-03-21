import Navbar from '../view/nav';
import useJaneHopkins from '../hooks/useJaneHopkins';
import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
export default function Doctor() {
    const {entities, } = useJaneHopkins();
    const [format, setFormat] = useState("list");
    const [patients, setPatients] = useState();
    const {id} = useParams();

    const listPatients = async () => {
        let patientList = await entities.patient.list();
        console.log(patientList.items);
        setPatients(patientList.items);
        
    };

    const handleDelete = async (id) => {
        const response = await entities.patient.remove(id);
        console.log(response);
        listPatients();
    }

    const redirect = async (patientID) => {
        
    }

    useEffect(() => {
        listPatients();
    }, []);
    
    return (<>
        <Navbar/>
        <h1>Patient Zero</h1>
        {format === "list" ? 
        <>
        <button 
            className='btn btn-primary' 
            onClick={() => { 
                setFormat("list"); 
            } }
        >
            List
        </button>
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
                        <li class="list-group-item" style={{background: "cyan"}} key={key}>name: {patients.name}, dob:{patients.dob}, ID: {patients._id} 
                        <button className='btn btn-danger' onClick={() => handleDelete(patients._id)}>Delete patient</button>
                        <button className='btn btn-primary' onClick={() => redirect(patients._id)}>View Patient</button>
                        </li>
                        
                        
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
                        <li class="list-group-item" key={key}>name: {patients.name}, dob:{patients.dob}, ID: {patients._id} 
                        <button className='btn btn-danger' onClick={() => handleDelete(patients._id)}>Delete patient</button>
                        <button className='btn btn-primary'>View Patient</button>
                        </li>
                        
                    </ul>
                </div>
                
                </>
                
            )
        })}</div>
        }
        
    </>
    )   
}

