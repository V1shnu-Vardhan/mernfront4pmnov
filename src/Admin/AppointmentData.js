import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'jquery/dist/jquery'
import $ from 'jquery'
import DataTable from  'datatables.net-dt/js/dataTables.dataTables';

const AppointmentData = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(`https://mernback4pmnov-bqp0.onrender.com/appointment`)
        .then(res =>{
            setData(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })
    setTimeout(() => {
        $(function(){
          new DataTable('#mytable');
        })
        
      }, 1000);
  return (
    <>
    <section>
        <div className=' table-responsive'>
            <table className=' table table-bordered table-striped' id='mytable'>
                <thead>
                    <tr>
                        <th>Treatment Name</th>
                        <th>Doctor Name</th>
                        <th>Patient Name</th>
                        <th>Patient Phone</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((app) =>{
                            return(
                                <tr key={app._id}>
                                    <td>{app.tname}</td>
                                    <td>{app.dname}</td>
                                    <td>{app.pname}</td>
                                    <td>{app.pphone}</td>
                                    <td>{app.date}</td>
                                    <td>{app.time}</td>
                                    <td>{app.email}</td>
                                    <td>{app.sub}</td>
                                    <td>{app.message}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </section>

    </>
  )
}

export default AppointmentData