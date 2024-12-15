import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'jquery/dist/jquery'
import $ from 'jquery'
import DataTable from  'datatables.net-dt/js/dataTables.dataTables';
import { NavLink } from 'react-router-dom'

const EditOffers = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get(`https://mernback4pmnov-bqp0.onrender.com/offer`)
    .then(res =>{
      setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  })
  const deleteOffer =(id)=>{
    axios.delete(`https://mernback4pmnov-bqp0.onrender.com/offer/${id}`)
    .then(res =>{
      alert("Offer Deleted Succ..")
    })
    .catch(err => {
      console.log(err)
    })
  }
  setTimeout(() => {
    $(function(){
      new DataTable('#mytab');
    })
    
  }, 1000);
  return (
    <>
    <div className=' table-responsive'>
      <table className=' table  table-bordered  table-striped ' id='mytab'>
        <tr>
          <th>Offer Title</th>
          <th>Offer Description</th>
          <th>Action</th>
        </tr>
        <tbody>
          {
            data.map((off)=>{
              return(
                <tr key={off._id}>
                  <td>{off.offertitle}</td>
                  <td>{off.offerdescription}</td>
                  <td>
                    <button onClick={()=> deleteOffer(off._id)} className='btn btn-danger'>Delete</button>
                  </td>
                  <td>
                    <NavLink to={`/editOfferOperations/${off._id}`}> <button className=' btn btn-primary'>Edit</button></NavLink>
                  </td>
                </tr>
              )

            })
          }
        </tbody>
      </table>
    </div>

    </>
  )
}

export default EditOffers;