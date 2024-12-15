import React, { useEffect, useState } from 'react'
import adminStyles from "./adminStyles.module.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditDoctorOperations = () => {
  const [treatmentname,setTreatmentName] = useState("")
  const [doctorname,setDoctorName] = useState("")
  const [doctorqualification,setDoctorQualification] = useState("")
  const [yearsofexperience,setYearsOfExperience] = useState("")
  const [contactnumber,setContactNumber] = useState("")
  const [emailid,setEmailId] = useState("")
  const [address,setAddress] = useState("")
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`https://mernback4pmnov-bqp0.onrender.com/doctor/${id}`)
    .then(res =>{
        setTreatmentName(res.data.treatmentname);
        setDoctorName(res.data.doctorname);
        setDoctorQualification(res.data.doctorqualification);
        setYearsOfExperience(res.data.yearsofexperience);
        setContactNumber(res.data.contactnumber);
        setEmailId(res.data.emailid);
        setAddress(res.data.address);
    })
    .catch(err =>{
        console.log(err)
    })
  },[id])

  const putdoctor = (e)=>{
    e.preventDefault();
    axios.put(`https://mernback4pmnov-bqp0.onrender.com/doctor/${id}`,{treatmentname,doctorname,doctorqualification,yearsofexperience,contactnumber,emailid,address})
    .then(res =>{
        alert("Doctor Details Updated..")
    })
    .catch(err =>{
        console.log(err)
    })
  }
  return (
    <>
    <section className={adminStyles.bread}>
        <div className=' container'>
            <div className=' row'>
                <div className=' col-12'>
                    <h1>Update Doctor Details</h1>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className=' container'>
            <div className=' row'>
                <div className=' col-4'></div>
                <div className=' col-4'>
                <form onSubmit={putdoctor}>
            <div className=' mb-3'>
              <input type=' text' name='treatmentname' value={treatmentname} onChange={(e) => setTreatmentName(e.target.value)} placeholder='Treatment Name' className=' form-control'/>
            </div>
            <div className=' mb-3'>
              <input type='text' name='doctorname' value={doctorname} onChange={(e)=> setDoctorName(e.target.value)} placeholder='Doctor Name' className=' form-control'/>
            </div>
            <div className=' mb-3'>
              <input type='text' name='doctorqualification' value={doctorqualification} onChange={(e)=> setDoctorQualification(e.target.value)} placeholder='Doctor Qualification' className=' form-control'/>
            </div>
            <div className=' mb-3'>
              <input type='number' name='yearsofexperience' value={yearsofexperience} onChange={(e)=> setYearsOfExperience(e.target.value)} placeholder='Years Of Experience' className=' form-control'/>
            </div>
            <div className=' mb-3'>
              <input type='number' name='contactnumber' value={contactnumber} onChange={(e)=> setContactNumber(e.target.value)} placeholder='Contact Number' className=' form-control'/>
            </div>
            <div className=' mb-3'>
              <input type='text' name='emailid' value={emailid} onChange={(e)=> setEmailId(e.target.value)} placeholder='Email Id' className=' form-control'/>
            </div>
            <div className='mb-3 form-control' style={{ border: 'none' }}>
              <input type=' text' name='address' value={address} onChange={(e)=> setAddress(e.target.value)} placeholder='Address' className=' form-control'/>

            </div>
            <div className=' mb-3 '>
              <input type='submit' value={"Update Doctor Details"} className=' btn btn-primary'/>
            </div>
          </form>
                    
                </div>
                <div className=' col-4'></div>
            </div>
        </div>

    </section>

    </>

  )
}

export default EditDoctorOperations;