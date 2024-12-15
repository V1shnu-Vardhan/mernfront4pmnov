import React, { useEffect, useState } from 'react'
import innerStyles from './innerpageStyles.module.css'
import axios from 'axios';

const Offers = () => {
  const [offer,setOffer] = useState([]);
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
 <section className={innerStyles.bread}>
  <div className=' container'>
    <div className=' row'>
      <div className=' col-12'>
        <h1>Offers</h1>
      </div>
    </div>
  </div>
 </section>
 <section>
  <div className=' container'>
    <div className=' row'>
      {
        offer.map((off,index)=>{
          if(index %2 === 0){
            return(
              <div className=' col-6 text-bg-danger' key={off._id}>
                <h1>{off.offertitle}</h1>
                <p>{off.offerdescription}</p>
              </div>
              
            )
          } 
          else{
            if(index %1 === 0){
              return(
                <div className=' col-6 text-bg-warning ' key={off._id}>
                  <h1>{off.offertitle}</h1>
                  <p>{off.offerdescription}</p>
                </div>
                
              )
            }
            return ' '


          }
        })
      }
    </div>
  </div>

 </section>

 
 </>
  )
}

export default Offers