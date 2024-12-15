import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import adminStyles from "./adminStyles.module.css"
import axios from 'axios';


const TreatmentDetails = () => {
    const [data,setData] = useState([]);
    const [doctor,setDoctor] = useState([]);
    const {tid} = useParams();
    useEffect(()=>{
        axios.get(`https://mernback4pmnov-bqp0.onrender.com/treatment/${tid}`)
    .then(res =>{
      setData(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
    },[tid])

    useEffect(()=>{
        axios.get(`https://mernback4pmnov-bqp0.onrender.com/doctor`)
        .then(res =>{
            setDoctor(res.data);
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
  return (
    <>
    <section className={adminStyles.bread}>
        <div className=' container'>
            <div className=' row'>
                <div className=' col-12'>
                    <h1>{data.tname}</h1>
                </div>
            </div>
        </div>
    </section>
    <section className=' py-4' >
        <div className=' container'>
            <div className=' row'>
                <div className=' col-12'>
                    <p>{data.tdes}</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className=' container'>
            {
                doctor.filter((doc)=> doc.treatmentname === data.tname)
                .map((doc) =>{
                    return(
                        <div className='row mb-3 bg-primary w-25 p-4 ' key={doc._id}>
                            <div className='col-8'>
                                <div>
                                    <h3>Name:{doc.treatmentname}</h3>
                                    <p>Qualification:{doc.doctorqualification}</p>
                                    <p>Expreience:{doc.yearsofexperience}</p>
                                    <p>Phone:{doc.contactnumber}</p>
                                    <p>Email id:{doc.emailid}</p>
                                    <p>Address:{doc.address}</p>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
    </>
  )
}

export default TreatmentDetails