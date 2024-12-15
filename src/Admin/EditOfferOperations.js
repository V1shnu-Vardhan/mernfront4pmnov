import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import adminStyles from "./adminStyles.module.css"

const EditOfferOperations = () => {
    const [offertitle,setOffertitle] = useState("")
    const [offerdescription,setOfferdescription] = useState("")
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://mernback4pmnov-bqp0.onrender.com/offer/${id}`)
        .then(res=>{
            setOffertitle(res.data.offertitle)
            setOfferdescription(res.data.offerdescription)
           
        })
        .catch(err =>{
            console.log(err)
        })
    },[id])
    const putOffers = (e)=>{
        e.preventDefault();
        axios.put(`https://mernback4pmnov-bqp0.onrender.com/offer/${id}`,{offertitle,offerdescription})
        .then(res =>{
            alert("Updated Offer Details..")
        })
        .catch(err =>{
            console.log(err)
        })
    }
  return (
    <>
   <div className={adminStyles.bread}>
   <section className=' container'>
        <div className=' row'>
            <div className=' col-12'>
                <h1>Update Offer Details</h1>
            </div>
        </div>
    </section>
   </div>
    <section className=' container'>
        <div className=' row'>
            <div className=' col-4'></div>
            <div className=' col-4'>
                <form onSubmit={putOffers}>
                    <div className=' mb-3'>
                        <input type='text' name='offertitle' value={offertitle} onChange={(e) => setOffertitle(e.target.value)} className=' form-control'/>
                    </div>
                    <div className=' mb-3'>
                    <textarea name='offerdescription' value={offerdescription} onChange={(e)=> setOfferdescription(e.target.value)} className=' form-control'></textarea>
                    </div>
                    <div className='mb-3'>
                        <input type='submit' className=' form-control btn btn-success' value={"Update Offers"}/>
                    </div>
                </form>
            </div>
            <div className=' col-4'></div>
        </div>
    </section>


    </>
  )
}

export default EditOfferOperations