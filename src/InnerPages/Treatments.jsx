import React, { useEffect, useState } from 'react'
import innerStyles from './innerpageStyles.module.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Treatments = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get(`https://mernback4pmnov-bqp0.onrender.com/treatment`)
    .then(res =>{
      setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  return (
 <>
 <section className={`py-4 ${innerStyles.treatment}`} >
      <div className=' container-fluid'>
        <div className=' row'>
          <div className=' col-12'>
            <h2 className={innerStyles.title}>Our Treatments</h2>
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
    <section>
      <div className='container'>
        <div className=' row'>
          <div className=' col-12'>
            <img src='/treatments.png' alt=''/>
          </div>
        </div>
      </div>
    </section>

 </>
  )
}

export default Treatments