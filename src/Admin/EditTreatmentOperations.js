


import React, { useEffect, useState } from 'react'
import adminStyles from "./adminStyles.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditTreatmentOperations = () => {
    const[tname,setTname] = useState("")
    const [tdes,setTdes]= useState("")
    const {tid} = useParams();
    useEffect(()=>{
        axios.get(`https://mernback4pmnov-bqp0.onrender.com/treatment/${tid}`)
        .then((res)=>{
            setTname(res.data.tname)
            setTdes(res.data.tdes)
        },)
        .catch((err) =>{
            console.log(err)
        })
    },[tid])
    const putTreatment =(e)=>{
        e.preventDefault();
        axios.put(`https://mernback4pmnov-bqp0.onrender.com/treatment/${tid}`,{tname,tdes})
        .then(res =>{
            alert("Treatment Details Updated...")
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <>
     <section className={adminStyles.bread}>
        <div className=' container'>
          <div className=' row'>
            <div className=' col-12'>
              <h1>Edit Treatments Data</h1>
            </div>
          </div>
        </div>
      </section>
      <section className=' container'>
        <div className=' row'>
            <div className=' col-4'></div>
            <div className=' col-4'>
                <form onSubmit={putTreatment}>
                    <div className=' mb-3'>
                    <input type=' text' name='tname' value={tname} onChange={(e)=> setTname(e.target.value)} className=' form-control ' placeholder='Treatment Name'/>
                    </div>
                    <div className=' mb-3'>
                        <textarea name='tdes' value={tdes} onChange={(e)=> setTdes(e.target.value)} className=' form-control' placeholder='Treatment Description'></textarea>
                    </div>
                   <div className=' mb-3'>
                   <input type='submit' className=' btn btn-success form-control' name='submit'/>
                   </div>
                </form>
            </div>
            <div className=' col-4'></div>

        </div>
      </section>

    </>
  )
}

export default EditTreatmentOperations;