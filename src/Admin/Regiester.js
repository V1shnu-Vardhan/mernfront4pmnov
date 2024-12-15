import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import adminStyles from "./adminStyles.module.css"
import axios  from 'axios';

const Regiester = () => {
    const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const Navigate = useNavigate();

  const addUser = (e)=>{
    e.preventDefault();
    axios.post(`https://mernback4pmnov-bqp0.onrender.com/signup`,{name,email,password,phone,address})
    .then(res=>{
      alert("User added successfully")
      Navigate("/admin")
    })
    .catch(err =>{
      console.log(err)
    })
  };
  return (
    <main>
    <section className={adminStyles.bread}>
    <div className=' container'>
         <div className=' row'>
             <div className=' col-12'>
                 <h1>Add Student</h1>
             </div>
         </div>
     </div>
    </section>
    <section className={`py-4 ${adminStyles.student}`}>
    <div className=' container'>
    <div className=' row'>
         <div className=' col-lg-4'></div>
         <div className=' col-lg-4'>
           <form onSubmit={addUser}>
           <input type=' text' name='name' className=' form-control mb-3' placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/>
           <input type=' text' name='email' className=' form-control mb-3' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
           <input type='password' name='password' className=' form-control mb-3' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <input type=' text' name='phone' className=' form-control mb-3' placeholder='Phone' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
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

export default Regiester;