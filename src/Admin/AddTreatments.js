import axios from 'axios'
import React, { useState } from 'react'

const AddTreatments = () => {
    const [tname,setTname] = useState("")
    const [tdes,setTdes] = useState("")
    const addTreat = (e)=>{
        e.preventDefault();
        axios.post(`https://mernback4pmnov-bqp0.onrender.com/treatment`,{tname,tdes})
        .then((res)=>{
            alert("Added Treatment succ..")
            setTname("")
            setTdes("")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <section>
        <div className=' container'>
            <div className=' row'>
                <div className=' col-6'>
                    <div>
                        <form onSubmit={addTreat}>
                            <div className=' mb-4'>
                                <input type='text' name='tname'  placeholder='Treatment Name' className=' form-control' value={tname} onChange={(e) => setTname(e.target.value)}/>
                            </div>
                            <div className=' mb-4'>
                                <textarea className=' form-control' value={tdes} onChange={(e) => setTdes(e.target.value)} placeholder='Treatment Description'></textarea>
                            </div>
                           <div className=' mb-4'>
                           <input type='submit' className=' form-control' value={"Add Treatment"}/>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AddTreatments