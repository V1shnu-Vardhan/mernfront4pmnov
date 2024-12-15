import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'jquery/dist/jquery'
import $ from 'jquery'
import DataTable from  'datatables.net-dt/js/dataTables.dataTables';
import { NavLink } from 'react-router-dom';

const EditTreatments = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get(`https://mernback4pmnov-bqp0.onrender.com/treatment`)
    .then(res =>{
      setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  })
  const deleteTreatment = (tid)=>{
    axios.delete(`https://mernback4pmnov-bqp0.onrender.com/treatment/${tid}`)
    .then(res =>{
      alert("Treatment Deleted Succ...")
    })
    .catch(err =>{
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
    <table className=' table table-bordered' id='mytab'>
      <thead>
        <tr>
          <th>T.Name</th>
          <th>T.Description</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((tret) =>{
            return(
              <tr key={tret._id}>
              <td>{tret.tname}</td>
              <td>{tret.tdes}</td>
              <td>
                <button onClick={()=> deleteTreatment(tret._id)} className=' btn btn-danger '>Delete</button>
                 </td>
                 <td>
                 <NavLink to={`/editTreatmentOperations/${tret._id}`}>  <button key={tret._id} className=' btn btn-primary ' >Edit</button></NavLink>

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

export default EditTreatments;