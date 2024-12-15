import axios from 'axios'
import React, { useState } from 'react'

const AddOffers = () => {
  const [offertitle,setOffertitle] = useState("")
  const [offerdescription,setOfferdescription] = useState("")
  const postOffers = (e)=>{
    e.preventDefault();
    axios.post(`https://mernback4pmnov-bqp0.onrender.com/offer`,{offertitle,offerdescription})
    .then(res =>{
      alert("New Offers added")
      setOffertitle("")
      setOfferdescription("")
    })
    .catch(err =>{
      console.log(err)
    })

  }
  return (
    <>
    <section className=' container'>
      <div className=' row'>
        <div className=' col-6'>
          <form onSubmit={postOffers}>
            <div className=' mb-3'>
              <input type='text' name='offertitle' value={offertitle} onChange={(e) => setOffertitle(e.target.value)} className=' form-control ' placeholder='Offer Title'/>
            </div>
            <div className=' mb-3'>
              <textarea name='offerdescription' value={offerdescription} onChange={(e)=> setOfferdescription(e.target.value)} className=' form-control' placeholder='Offer Description'></textarea>
            </div>
            <div className=' mb-3'>
            <input type='submit' className=' form-control' value={"Add Offers"}/>
            </div>
          </form>
        </div>
      </div>
    </section>

    </>
  )
}

export default AddOffers