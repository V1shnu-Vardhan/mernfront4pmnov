import React, { useEffect, useState } from 'react'
import studentstyles from './studentstyles.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditStudentOperations = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [age,setAge] = useState("");
    const [address,setAddress] = useState("");
    const {sid} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:9000/student/${sid}`)
    .then(res =>{
        setName(res.data.name)
        setEmail(res.data.email)
        setPhone(res.data.phone)
        setAge(res.data.age)
        setAddress(res.data.address)
    })
    .catch(err =>{
        console.log(err)
    })

    },[sid])

    const updateStudent = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:9000/student/${sid}`,{name,email,phone,age,address})
        .then(res =>{
          alert("Student data updated")
        })
        .catch(err =>{
            console.log(err)
        })

    }
  return (
    <main>
      <section className={studentstyles.bread}>
        <div className=' container'>
          <div className=' row'>
            <div className=' col-12'>
              <h1>Edit Student Data</h1>
              
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=' container'>
          <div className=' row'>
            <div className=' col-4'>
            <form onSubmit={updateStudent}>
              <input type=' text' name='name' className=' form-control mb-3' placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/>
              <input type=' text' name='email' className=' form-control mb-3' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
             <input type=' text' name='phone' className=' form-control mb-3' placeholder='Phone' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
             <input type=' text' name='age' className=' form-control mb-3' placeholder='Age' value={age} onChange={(e)=> setAge(e.target.value)}/>
             <input type=' text' name='address' className=' form-control mb-3' placeholder='Address' value={address} onChange={(e)=> setAddress(e.target.value)}/>
             <input type='submit' className=' btn btn-success' name='submit'/>

              </form>
              
            </div>
          </div>
        </div>
      </section>
      </main>
  )
}

export default EditStudentOperations;
