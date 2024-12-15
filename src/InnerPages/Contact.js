import React, { useState } from 'react'
import innerStyles from './innerpageStyles.module.css'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css';


const Contact = () => {
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");

  const postEnquiry = (e)=>{
    e.preventDefault();
    axios.post(`https://mernback4pmnov-bqp0.onrender.com/enquiry`,{name,phone,email,subject,message})
    .then((res) =>{
      alert("Enquiry posted")
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
    })
    .catch(err =>{
      console.log(err)
    })
  }
  return (
    <>
    <section className={innerStyles.bread}>
      <div className=' container'>
        <div className=' row'>
          <div className=' col-12'>
            <h1 className=' text-start'>Contact Us</h1>
          </div>
        </div>
      </div>
    </section>
    <section className={innerStyles.enquiry}>
      <div className=' container'>
        <div className=' row'>
          <div className=' col-6'>
            <form onSubmit={postEnquiry} style={{ backgroundColor: "lightblue", padding: "1rem", borderRadius: "8px" }}>
              <div className=' mb-3'>
                <input type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Name' className=' form-control'/>
              </div>
              <div className=' mb-3'>
                <input type='number' name='phone' value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Phone' className=' form-control'/>
              </div>
              <div className=' mb-3'>
                <input type='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' className=' form-control'/>
              </div>
              <div className='mb-3'>
                <input type='text' name='subject' value={subject} onChange={(e)=> setSubject(e.target.value)} placeholder='Subject' className=' form-control'/>
              </div>
              <div className=' mb-3 form-control border-0 '>
                <textarea className=' form-control' placeholder='Message' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <div className=' mb-3 form-control border-0 ' >
                <input type='submit' className=' form-control btn btn-success' value={"Submit"} />
              </div>
            </form>
          </div>
          <div className=' col-6 p-0'>
            <h1 className='text-danger p-3 '>Address:</h1>
            <p className=' border border-2 p-4'>  <i class="bi bi-geo-alt-fill"></i>C2, Amrutha hills, Punjagutta Officers Colony, Punjagutta, Hyderabad, Telangana - 082</p> <br/>
            <div className='border border-2 px-3 py-2'>
            <h3><i className="bi bi-telephone-outbound-fill"></i> +91 7671897772</h3>

            <h3><i class="bi bi-telephone-outbound-fill"></i>+91 9951509610</h3> <br/>
            <p> <i class="bi bi-envelope"></i>vishnuvardhanc117@gmail.com</p>
            <p> <i class="bi bi-envelope"></i>Vishnu@412gmail.com</p> <br/>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact