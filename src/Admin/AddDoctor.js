import React, { useState } from 'react'
import adminStyles from "./adminStyles.module.css"
import axios from 'axios'

const AddDoctor = () => {
  const [treatmentname,setTreatmentName] = useState("")
  const [doctorname,setDoctorName] = useState("")
  const [doctorqualification,setDoctorQualification] = useState("")
  const [yearsofexperience,setYearsOfExperience] = useState("")
  const [contactnumber,setContactNumber] = useState("")
  const [emailid,setEmailId] = useState("")
  const [address,setAddress] = useState("")

  const postdoctor = (e)=>{
    e.preventDefault();
    axios.post(`https://mernback4pmnov-bqp0.onrender.com/doctor`,{treatmentname,doctorname,doctorqualification,yearsofexperience,contactnumber,emailid,address})
    .then(res =>{
      alert("Added Doctor succ...")
      setTreatmentName("")
      setDoctorName("")
      setDoctorQualification("")
      setYearsOfExperience("")
      setContactNumber("")
      setEmailId("")
      setAddress("")
    })
    .catch(err =>{
      console.log(err)
    })
  }
  return (
    <>
   <section className={adminStyles.doctor}> 
   <section className=' container'>
      <div className=' row'>
        <div className=' col-7'>
          <form onSubmit={postdoctor}>
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
              <input type='submit' value={"Add Doctor"} className=' btn btn-primary'/>
            </div>
          </form>
        </div>
      </div>
    </section>
   </section>
    </>
  )
}

export default AddDoctor