import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Trainding</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className='nav-link' to="/">Login</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/search">Search</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/dashboard">DashBoard</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  );
}
export default Navbar;