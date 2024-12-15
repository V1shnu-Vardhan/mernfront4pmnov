import React from 'react'
import adminStyles from "./adminStyles.module.css"
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <main>
        <section className={adminStyles.bread}>
            <div className=' container'>
                <div className=' row'>
                    <div className=' col-12'>
                        <h1>Admin dashboard</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className={`py-4 ${adminStyles.student}`}>
            <div className=' container'>
                <div className=' row'>
                    <div className=' col-3'>
                        <AdminSidebar/>
                    </div>
                    <div className=' col-9'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default AdminDashboard