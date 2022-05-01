import React from "react";
import ControlledCarousel from "./Carousel";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";

export default function Section2() {
  return (
    <div className="container">
      <div className="row">
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="badge rounded-pill bg-success">
            ÚJ eszközök érkeztek!
          </span>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 section-tab-nav tab-nav">
              <li className="nav-item">
                <Link to="/pc" className="nav-link active" aria-current="page">
                  PC/Laptop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/routers"
                  className="nav-link active"
                  aria-current="page"
                >
                  WiFi Router
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/perifer"
                  className="nav-link active"
                  aria-current="page"
                >
                  Periféria
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cable"
                  className="nav-link active"
                  aria-current="page"
                >
                  Kábel
                </Link>
              </li>
            </ul>
          </div>
        </Nav>
      </div>
      <div className="row slidpage">
        <ControlledCarousel />
      </div>
    </div>
  );
}
