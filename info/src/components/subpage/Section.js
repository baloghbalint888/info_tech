import React from "react";
import pc from "./img/pc.jpg";
import peri from "./img/peripherals.jpg";
import router from "./img/router.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function Section() {
  return (
    <div className="section">
      <Container>
        <div className="row">
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src={pc} alt="" />
              </div>
              <div className="shop-body">
                <h3>
                  PC és <br></br>Laptop
                </h3>
                <Link to="/pc" className="cta-btn">
                  Vedd meg most! <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src={router} alt="" />
              </div>
              <div className="shop-body">
                <h3>
                  WiFi<br></br>Router
                </h3>
                <Link to="/routers" className="cta-btn">
                  Vedd meg most! <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src={peri} alt="" />
              </div>
              <div className="shop-body">
                <h3>
                  Periféria és<br></br>Kábel
                </h3>
                <Link to="/perifer" className="cta-btn">
                  Vedd meg most! <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
