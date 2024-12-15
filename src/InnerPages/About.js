import React from 'react'
import innerStyles from './innerpageStyles.module.css'

const About = () => {
  return (
  <>
    <section className={innerStyles.bread}>
     <div className=' container'>
      <div className=' row'>
        <div className=' col-12'>
        <h1>About Us</h1>
        </div>
      </div>
     </div>
    </section>
    <section>
      <div className=' container'>
        <div className=' row'>
          <div className=' col-7'>
            <h6 className=' text-danger'>"SurgyLife is a multi-speciality healthcare platform delivering a hassle-free experience for all your surgeries and medical needs with personalized care."</h6> <br></br>
            <h2>Welcome to surgyLife...</h2>
            <p>Your health is our priority. SurgyLife is a comprehensive healthcare platform dedicated to making your medical journey seamless and stress-free. Specializing in a wide range of surgeries and medical treatments, we combine advanced medical expertise with compassionate, personalized care tailored to each patient.</p>
            <h4>With SurgyLife, you can:</h4>
            <ol>
            <li>Access a network of experienced specialists across multiple medical disciplines.</li>
            <li>Enjoy transparent pricing and customized treatment plans.</li>
            <li>Receive 24/7 support throughout your healthcare journey.</li>
            </ol>
            <h3 className=' text-info'>Mission:</h3>
            <p>Our mission at SurgyLife is to revolutionize the surgical experience by offering patients a seamless, transparent, and compassionate journey from consultation to recovery. We are dedicated to enhancing patient outcomes through state-of-the-art facilities, a team of expert specialists, and a commitment to personalized, empathetic care. Our aim is to ensure that every individual receives the highest standard of treatment with minimal stress, providing support, guidance, and innovation every step of the way.</p>
            <h3 className=' text-info'>Vision:</h3>
            <p>SurgyLife envisions a world where access to advanced, affordable, and patient-centered healthcare is the standard, not the exception. We strive to be a leader in the healthcare industry by continuously advancing our methods, technology, and service delivery. Our vision is to empower individuals through knowledge, trust, and high-quality care, creating a healthier, happier future where all patients can confidently navigate their surgical and medical needs with peace of mind and complete support.</p>


          </div>
          <div className=' col-5'>
          <img src='/about.jpg' alt="about" w-100/>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default About