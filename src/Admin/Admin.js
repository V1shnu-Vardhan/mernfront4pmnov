import React, { useState } from 'react'
import adminStyles from "./adminStyles.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Admin = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const adminCredentials = (e)=>{
        e.preventDefault();
        axios.post(`https://mernback4pmnov-bqp0.onrender.com/login`,{email,password})
        .then((res)=>{
            if(res.data === "valid"){
                navigate('/admindashboard')
            }
            else{
                alert("Invalid user and password")
                navigate('/admin')
            }
        })

    }
  return (
    <main>
        <section className={adminStyles.bread}>
            <div className=' container'>
                <div className=' row'>
                    <div className=' col-12'>
                        <h1>Admin Login</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className={`py-4 ${adminStyles.student}`}>
            <div className=' container'>
                <div className=' row'>
                    <div className=' col-4'></div>
                    <div className=' col-4'>
                        <div>
                            <form onSubmit={adminCredentials}>
                                <div className=' mb-4'>
                                    <input type=' text' name='username' className='form-control' placeholder='Username' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                </div>
                                <div className='mb-4'>
                                    <input type='password' name='password' className='form-control' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                                <div className=' mb-4'>
                                    <input type='submit' className=' form-control' value={"Login"}/>
                                </div>
                                <NavLink to="/regiester">Regiester</NavLink>
                            </form>
                        </div>
                    </div>
                    <div className=' col-4'></div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Admin





// const [username,setUsername] = useState("")
// const [password,setPassword] = useState("")
// const navigate = useNavigate();
// const adminCredentials = (e)=>{
//     e.preventDefault();
//     if(username ==="Admin"){
//         if(password ==="Admin"){
//             navigate("/admindashboard")
//         }
//         else{
//             alert("Invalid password")
//         }

//     }
//     else{
//         alert("Invalid username")
//     }