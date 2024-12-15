import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './InnerPages/Home'
import About from './InnerPages/About'
import Treatments from './InnerPages/Treatments'
import BookAppointment from './InnerPages/BookAppointment'
import Offers from './InnerPages/Offers'
import Contact from './InnerPages/Contact'
import Nopage from './InnerPages/Nopage'
import Admin from './Admin/Admin'
import Regiester from './Admin/Regiester'
import AdminDashboard from './Admin/AdminDashboard'
import AddTreatments from './Admin/AddTreatments'
import EditTratments from './Admin/EditTreatments'
import AddOffers from './Admin/AddOffers'
import EditOffers from './Admin/EditOffers'
import TreatmentDetails from './Admin/TreatmentDetails'
import EditTreatmentOperations from './Admin/EditTreatmentOperations'
import EditOfferOperations from './Admin/EditOfferOperations'
import AddDoctor from './Admin/AddDoctor'
import EditDoctor from './Admin/EditDoctor'
import EditDoctorOperations from './Admin/EditDoctorOperations'
import AppointmentData from './Admin/AppointmentData'
import EnquiryData from './Admin/EnquiryData'


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<About/>}/>
            <Route path='/treatments' element={<Treatments/>}/>
            <Route path='/bookappointment' element={<BookAppointment/>}/>
            <Route path='/offers' element={<Offers/>}/>
            <Route path='/contactus' element={<Contact/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/admindashboard' element={<AdminDashboard/>}>
            <Route path='' element={<AddTreatments/>}/>
            <Route path='addtreatments' element={<AddTreatments/>}/>
            <Route path='edittreatments' element={<EditTratments/>}/>
            <Route path='addoffers' element={<AddOffers/>}/>
            <Route path='editoffers' element={<EditOffers/>}/>
            <Route path='adddoctor' element={<AddDoctor/>}/>
            <Route path='editdoctor' element={<EditDoctor/>}/>
            <Route path='appointmentdata' element={<AppointmentData/>}/>
            <Route path='enquirydata' element={<EnquiryData/>}/>

            </Route>
            <Route path='/regiester' element={<Regiester/>}/>
            <Route path='/treatmentdetails/:tid' element={<TreatmentDetails/>}/>
            <Route path='/editTreatmentOperations/:tid' element={<EditTreatmentOperations/>}/>
            <Route path='/editOfferOperations/:id' element={<EditOfferOperations/>}/>
            <Route path='/editdoctoroperations/:id' element={<EditDoctorOperations/>}/>
            
            <Route path='*' element={<Nopage/>} />

        </Routes>
    </div>
  )
}

export default Routing




// <Route path='/addStudent' element={<AddStudent/>}/>
//             <Route path='/deleteStudent' element={<DeleteStudent/>}/>
//             <Route path='/editStudent' element={<EditStudent/>}/>
//             <Route path='/editStudentOperation/:sid' element={<EditStudentOperations/>}/>