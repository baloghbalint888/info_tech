import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Nav } from "reactstrap";

export default function Navigation() {
  return (
    <div className="container">
      <Nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 section-tab-nav tab-nav menusk">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Főoldal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/rolunk">
                  Rólunk
                </Link>
              </li>
              {localStorage.getItem("id") == null && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/regist">
                    Regisztráció
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to="/szolgaltatas">
                  Szolgáltatásaink
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pc">
                  PC/Laptop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/routers">
                  WiFi Router
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/perifer">
                  Periféria
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cable">
                  Kábel
                </Link>
              </li>
              {localStorage.getItem("isAdmin") == 1 && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/admin">
                    Admin felület
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </Nav>
      <Outlet />
    </div>
  );
}
