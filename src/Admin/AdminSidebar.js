import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <main>
        <section>
            <ul>
                <li>
                    <NavLink to="addtreatments">Add Treatments</NavLink>
                </li>
                <li>
                <NavLink to='edittreatments'>Delete & Edit Treatment</NavLink>

                </li>
                <li>
                <NavLink to='addoffers'>Add Offers</NavLink>

                </li>
                <li>
                <NavLink to='editoffers'>Delete & Edit Offers</NavLink>

                </li>
                <li>
                  <NavLink to='adddoctor'>Add Doctor</NavLink>
                </li>
                <li>
                  <NavLink to='editdoctor'>Delete & Edit Doctor</NavLink>
                </li>
                <li>
                  <NavLink to='appointmentdata'>Appointment Data</NavLink>
                </li>
                <li>
                  <NavLink to='enquirydata'>Enquiry Data</NavLink>
                </li>
            </ul>
        </section>
    </main>
  )
}

export default AdminSidebar


         