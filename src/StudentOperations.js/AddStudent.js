import React, { useState } from 'react'
import studentstyles from './studentstyles.module.css'
import axios from 'axios'

const AddStudent = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [age,setAge] = useState("");
  const [address,setAddress] = useState("");

  const addStudent = (e)=>{
    e.preventDefault();
    axios.post(`http://localhost:9000/student`,{name,email,phone,age,address})
    .then(res=>{
      alert("New student data added")
    })
    .catch(err =>{
      console.log(err)
    })
  };
  return (
    <main>
       <section className={studentstyles.bread}>
       <div className=' container'>
            <div className=' row'>
                <div className=' col-12'>
                    <h1>Add Student</h1>
                </div>
            </div>
        </div>
       </section>
       <section className={`py-4 ${studentstyles.student}`}>
       <div className=' container'>
       <div className=' row'>
            <div className=' col-lg-4'></div>
            <div className=' col-lg-4'>
              <form onSubmit={addStudent}>
              <input type=' text' name='name' className=' form-control mb-3' placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/>
              <input type=' text' name='email' className=' form-control mb-3' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
             <input type=' text' name='phone' className=' form-control mb-3' placeholder='Phone' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
             <input type=' text' name='age' className=' form-control mb-3' placeholder='Age' value={age} onChange={(e)=> setAge(e.target.value)}/>
             <input type=' text' name='address' className=' form-control mb-3' placeholder='Address' value={address} onChange={(e)=> setAddress(e.target.value)}/>
             <input type='submit' className=' btn btn-success' name='submit'/>

              </form>

            </div>
            <div className=' col-lg-4'></div>
        </div>
       </div>
       </section>
    </main>
  )
}

export default AddStudent