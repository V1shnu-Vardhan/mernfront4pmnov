import React, { useState } from 'react'
import innerStyles from './innerpageStyles.module.css'
import axios from 'axios';

const BookAppointment = () => {
  const [tname,setTname] = useState("");
  const [dname,setDname] = useState("");
  const [pname,setPname] = useState("");
  const [pphone,setPphone] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [email,setEmail] = useState("");
  const [sub,setSub] = useState("");
  const [message,setmessage] = useState("");

  const postAppointment = (e)=>{
    e.preventDefault();
    axios.post(`https://mernback4pmnov-bqp0.onrender.com/appointment`,{tname,dname,pname,pphone,date,time,email,sub,message})
    .then(res =>{
      alert("New Appointment Added")
      setTname("");
      setDname("");
      setPname("");
      setPphone("");
      setDate("");
      setTime("");
      setEmail("");
      setSub("");
      setmessage("");
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
            <h1>Book Your Appointment Now</h1>
          </div>
        </div>
      </div>
    </section> <br/>
    <section>
      <div className=' container'>
        <div className=' row'>
        <div className=' col-6'>
            <form onSubmit={postAppointment}>
              <div className=' mb-3'>
                <input type='text' name='tname' value={tname} onChange={(e)=>setTname(e.target.value)} placeholder='Treatment Name' className=' form-control'/>
              </div>
              <div className=' mb-3'>
                <input type='text' name='dname' value={dname} onChange={(e)=>setDname(e.target.value)} placeholder='Doctor Name' className=' form-control'/>
              </div>
              <div className=' mb-3'>
                <input type='text' name='pname' value={pname} onChange={(e)=> setPname(e.target.value)} placeholder='Patient Name' className=' form-control' />
                </div>
              <div className=' mb-3'>
                <input type='number' name='pphone' value={pphone} onChange={(e)=> setPphone(e.target.value)} placeholder='Patient Phone' className=' form-control'/>
              </div>
              <div className=' mb-3'>
              <input type="date" id="appointment" name="appointment" className=' form-control' onChange={(e)=>setDate(e.target.value)}/>
              </div>
              <div className=' mb-3'>
                <input type='time' className=' form-control' onChange={(e)=> setTime(e.target.value)}/>
              </div>
              <div className=' mb-3'>
              <input type='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' className=' form-control'/>
              </div>
              <div className=' mb-3'>
                <input type='text' name='sub' value={sub} onChange={(e)=> setSub(e.target.value)} placeholder='Subject' className=' form-control'/>
              </div>
              <div className=' mb-3'>
              <textarea type='text' name='message' value={message} onChange={(e)=> setmessage(e.target.value)} placeholder='Message' className=' form-control'></textarea>
              </div>
              <div className='mb-3'>
                <input type='submit' className=' form-control btn btn-success' value={"Book Your Appointment"}/>
              </div>
            </form>
          </div>
          <div className=' col-6'>
            <h5 className='text-danger p-3'>  Book your appointment today with our experienced doctors and take the first step toward better health.</h5>
            <div className=' p-3 '>
            <ol>
              <h1 style={{color:"rgb(90,23,177)"}}>Advantages:</h1>
              <li>Secure your ideal surgery date and time.</li>
              <li>Ample time for tests and instructions before surgery.</li>
              <li>Book your preferred surgeon early.</li>
              <li>Expedite treatment for faster recovery.</li>
             </ol>
            </div>
            <div className='p-3' style={{}}>
              <img src='/book1.jpeg' alt='' className=' w-100 ' style={{ borderRadius: '10px' }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default BookAppointment