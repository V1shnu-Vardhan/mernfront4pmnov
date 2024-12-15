import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'jquery/dist/jquery'
import $ from 'jquery'
import DataTable from  'datatables.net-dt/js/dataTables.dataTables';

const EnquiryData = () => {
    const [data,setData] = useState([]);
    useEffect((req,res)=>{
        axios.get(`https://mernback4pmnov-bqp0.onrender.com/enquiry`)
        .then(res =>{
           setData(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })
    setTimeout(() => {
        $(function(){
          new DataTable('#mytab');
        })
        
      }, 1000);
  return (
    <>
    <section>
        <div className=' table-responsive'>
            <table className=' table table-bordered table-stripped' id='mytab'>
                <thead>
                   <tr>
                   <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                   </tr>
                </thead>
                <tbody>
                    {
                        data.map((enq)=>{
                            return(
                                <tr key={enq._id}>
                                    <td>{enq.name}</td>
                                    <td>{enq.phone}</td>
                                    <td>{enq.email}</td>
                                    <td>{enq.subject}</td>
                                    <td>{enq.message}</td>
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

export default EnquiryData