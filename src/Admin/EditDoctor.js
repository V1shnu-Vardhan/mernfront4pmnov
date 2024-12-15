import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import 'datatables.net-dt/css/dataTables.dataTables.min.css'
// import 'jquery/dist/jquery'
// import $ from 'jquery'
// import DataTable from  'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'jquery/dist/jquery'
import $ from 'jquery'
import DataTable from 'datatables.net-dt/js/dataTables.dataTables';
import { NavLink } from 'react-router-dom'

const EditDoctor = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get(`https://mernback4pmnov-bqp0.onrender.com/doctor`)
    .then(res =>{
      setData(res.data)

    })
    .catch((err) =>{
      console.log(err)
    })
  })
  const deleteDoctor = (id)=>{
    axios.delete(`https://mernback4pmnov-bqp0.onrender.com/doctor/${id}`)
    .then(res =>{
      alert("Doctor Deleted Succ...")
    })
    .catch(err =>{
      console.log(err)
    })
  }
  // setTimeout(() => {
  //   $(function(){
  //     new DataTable('#mytables');
  //   })
    
  // }, 1000);

  setTimeout(()=>{
    $(function(){
      new DataTable("#myTab");
    })
  },1000)
  return (
  <>
  <section className=' table-responsive'>
    <table className=' table table-bordered table-striped' id='myTab' >
      <thead>
        <tr>
          <th>Treatment Name</th>
          <th>Doctor Name</th>
          <th>Doctor Qualification</th>
          <th>Years Of Experience</th>
          <th>Contact Number</th>
          <th>Email Id</th>
          <th>Address</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((doc)=>{
            return(
              <tr key={doc._id}>
                <td>{doc.treatmentname}</td>
                <td>{doc.doctorname}</td>
                <td>{doc.doctorqualification}</td>
                <td>{doc.yearsofexperience}</td>
                <td>{doc.contactnumber}</td>
                <td>{doc.emailid}</td>
                <td>{doc.address}</td>
                <td>
                  <button onClick={()=> deleteDoctor(doc._id)} className=' btn btn-danger'>Delete</button>
                </td>
                <td>
                <NavLink to={`/editdoctoroperations/${doc._id}`}>  <button key={doc._id} className=' btn btn-primary'>Edit</button></NavLink>
                </td>
              </tr>
            )
          })
          
        }
      </tbody>
    </table>

  </section>
  </>
  )
}

export default EditDoctor