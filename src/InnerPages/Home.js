import React, { useEffect, useState } from 'react'
import innerStyles from './innerpageStyles.module.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [data,setData] = useState([]);
  const [offer,setOffer] = useState([]);
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

  useEffect(()=>{
    axios.get(`https://mernback4pmnov-bqp0.onrender.com/treatment`)
    .then(res =>{
      setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
    axios.get(`https://mernback4pmnov-bqp0.onrender.com/offer`)
    .then(res =>{
      setOffer(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])
  return (
    <> 
    <section className={innerStyles.img}>
       <div>
       <img src={`banner.jpg`} alt="Banner" />
       </div>
    </section>
    <section className={`py-4 ${innerStyles.treatment}`} >
      <div className=' container'>
        <div className=' row'>
          <div className=' col-12'>
            <h1 className={innerStyles.title}>Our Treatments</h1>
            <div className=' row'>
              {
                data.map((tret)=>{
                  return(
                    <div className=' col-md-3'>
                      <div className=' border border-3 border-primary p-3 ps-3 mb-4'>
                        <NavLink to={`/treatmentdetails/${tret._id}`}> {tret.tname}</NavLink>
                        </div>
                      </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section> 

    <section className={innerStyles.scroll}>
      <div className=' container'>
        <div className='row'>
          <div className=' col-12'>
            <h1>Our Offers</h1>
            <div className={innerStyles['scrolling-container']}>
                <div className={innerStyles['scrolling-content']}>
                  {
                    offer.map((off) =>{
                      return(
                        <span className={innerStyles['scrolling-items']} key={off._id}>
                          <span>{off.offertitle}{off.offerdescription}</span>
                        </span>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div>

          </div>
          </div>
        </div>
    </section>  <br/>


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
          <div className=' col-7'>
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
                <input type='submit' className=' form-control btn btn-secondary' value={"Book Your Appointment"}/>
              </div>
            </form>
          </div>

          <div className={`col-5 ${innerStyles.home}`}>
            <img src='/appointment.avif' alt='' className=' w-75 '/>
          </div>
        </div>
      </div>
    </section>
     </>
  
  )
}

export default Home;