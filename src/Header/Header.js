import React from 'react'
import headerStyles from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={headerStyles.header}>
        <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <NavLink className="navbar-brand" to="#">
      <img src='/logo.png' alt=''/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link {headerStyles.nav-link} "  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/treatments">Treatments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/bookappointment">Bookappointment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/offers">Offers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contactus">contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header;