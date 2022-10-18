import { enc } from "crypto-js"
import React, { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"



function NavBar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
        <div className="container-fluid">
          
          <NavLink to="/dashboard" className="btn btn-outline-dark btn-sm"><i className="fa fa-home me-2"></i>Ana Sayfa</NavLink>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
              </li>
            </ul>
            <div className="buttons">
              
                <NavLink to="/admin" className="btn btn-outline-dark btn-sm"><i className="fa fa-sign-in me-2"></i>Yönetici Giriş</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2 btn-sm"><i className="fa fa-user-plus me-2"></i> Kayıt </NavLink>
                
              
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar