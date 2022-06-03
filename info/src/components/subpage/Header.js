import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import bl from "./img/logo.png";
import ShopContext from "../../context/context";
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
  Modal,
} from "reactstrap";

export default function Header() {
  const navi = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [kosar, setKosar] = useState([]);
  const [delStatus, setDelStatus] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [osszeg, setOsszeg] = useState(0);
  const [vat, setVat] = useState([]);
  const context = useContext(ShopContext);

  const path = "http://localhost:5555";
  const loginRequest = async (e) => {
    e.preventDefault();
    await axios
      .post(`${path}/login`, { login: login, password: password })
      .then((res) => {
        if (res.data.id) {
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("login", login);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          setStatus(true);
          window.location.reload();
        } else {
          setStatus(false);
        }
      });
  };

  const handleClick = () => {
    axios.put(`${path}/cart`, { userID, cart: context.cart }).then((res) => {
      if (res.data.status === "ok") {
        context.emptyCart();
      }
    });
  };

  const getVat = async () => {
    const vatResult = await axios.get(`${path}/vat`);
    const { vat } = vatResult.data;

    setVat(vat);
  };

  const cartRequest = async () => {
    await axios
      .post(`${path}/cart`, { id: localStorage.getItem("id") })
      .then((res) => {
        if (res.data) {
          setKosar(res.data);
          setCartCounter(kosar.length);
        }
      });
    let sum = 0;

    for (let i = 0; i < kosar.length; i++) {
      sum += kosar[i].net_value * kosar[i].prod_amount;
    }

    setOsszeg(Math.round(sum * vat));
  };

  const handleSearch = () => {
    if (window.location.pathname === "/search") {
      navi(0);
    }
    navi("/search");
  };

  const userID = localStorage.getItem("id");
  const loginName = localStorage.getItem("login");
  const searchTerm = localStorage.getItem("term");

  function removeLocals() {
    localStorage.removeItem("id");
    localStorage.removeItem("login");
    localStorage.removeItem("isAdmin");
    setStatus(false);
    window.location.reload();
  }
  useEffect(() => {
    if (userID) {
      setStatus(true);
    } else {
      setStatus(false);
    }
    cartRequest();
    getVat();
  }, [userID, delStatus, cartCounter]);
  return (
    <div id="top-header">
      <Container>
        <Row>
          <Col sm={8}>
            <ul className="header-links pull-left">
              <li>
                <Link to="tel:+36304442569">
                  <i className="fa fa-phone"></i> +36-30-123-45-67
                </Link>
              </li>
              <li>
                <Link to="mailto: rekalaca@rekalaca.com">
                  <i className="fas fa-at"></i>info@infotech.com
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-map-marker"></i> 4400 Nyíregyháza Info
                  utca 1.
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={4}>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="false"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="wrapper">
                    <div className="logo">
                      {" "}
                      <img src={bl} alt="logo" />{" "}
                    </div>
                    <div className="text-center mt-4 name"> Info - Tech </div>
                    <form className="p-3 mt-3" onSubmit={loginRequest}>
                      <div className="form-field d-flex align-items-center">
                        {" "}
                        <span className="far fa-user"></span>{" "}
                        <input
                          type="text"
                          name="userName"
                          id="userName"
                          placeholder="felhasználónév"
                          onChange={(e) => setLogin(e.target.value)}
                        />{" "}
                      </div>
                      <div className="form-field d-flex align-items-center">
                        {" "}
                        <span className="fas fa-key"></span>{" "}
                        <input
                          type="password"
                          name="password"
                          id="pwd"
                          placeholder="jelszó"
                          onChange={(e) => setPassword(e.target.value)}
                        />{" "}
                      </div>
                      <button
                        className="btn mt-3"
                        data-dismiss="modal"
                        type="submit"
                      >
                        Bejelentkezés
                      </button>
                    </form>
                    <div className="text-center fs-6">
                      <Link to="/regist">Regisztráljon!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {status ? (
              <h6 className="loginname">Üdv, {loginName}!</h6>
            ) : (
              ""
            )}
            {status ? (
              <button
                type="button"
                className="btn btn-primary btn-sm gomb"
                onClick={removeLocals}
              >
                Kijelentkezés
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-sm gomb"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Fiókom / Bejelentkezés
              </button>
            )}

            <button
              type="button"
              className="btn btn-primary btn-sm gomb"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Kosár
            </button>

            <div
              className="offcanvas offcanvas-end hossz"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header kh">
                <h5 className="kh">A kosár tartalma:</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              {status ? (
                <div className="offcanvas-body">
                  <div className="cart-list kh kereksarok">
                    {context.cart.map((elem, index) => (
                      <div className="product-widget kereksarok" key={index}>
                        <div className="product-img">
                          <img src={`${path}/${elem.picture}`} alt="" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-name kh">
                            {elem.name ? elem.name : elem.description}
                          </h3>
                          <h4 className="product-ar">
                            <span className="product-ar kh">
                              {elem.quantity}db x{" "}
                            </span>
                            {Math.round(elem.net_value * vat)} Ft
                          </h4>
                        </div>
                        <button
                          className="delete"
                          onClick={context.removeProductFromCart.bind(
                            this,
                            elem.productID
                          )}
                        >
                          <i className="fa fa-close"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="cart-summary kh kereksarok">
                    <small>
                      {context.cart.reduce((count, item) => {
                        return count + item.quantity;
                      }, 0)}{" "}
                      db termék kiválasztva
                    </small>
                    <h5 className="sum">
                      Bruttó{" "}
                      {Math.round(
                        context.cart.reduce((count, item) => {
                          return count + item.quantity * item.net_value;
                        }, 0) * vat
                      )}{" "}
                      Ft
                    </h5>
                  </div>
                  <br></br>
                  {context.cart.reduce((count, item) => {
                    return count + item.quantity;
                  }, 0) > 0 && (
                    <div className="cart-btns">
                      <button
                        type="button"
                        className="btn btn-success gomb"
                        onClick={() => {
                          handleClick();
                        }}
                      >
                        Megrendelem!
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <h1 className="nologin">
                  Jelentkezz be a kosár használatához!
                </h1>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={3}>
            <div className="col-lg-3 col-md-3 col-xs-1 fejlogo">
              <img src={logo} alt="" />
            </div>
          </Col>
          <Col sm={9}>
            <div className="search">
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-lg-9 col-md-9 col-xs-3">
                  <div className="search">
                    {" "}
                    <i className="fa fa-search"></i>{" "}
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Mit szeretnél megkeresni?"
                      defaultValue={searchTerm}
                      onChange={(e) =>
                        localStorage.setItem("term", e.target.value)
                      }
                    />
                    <button onClick={handleSearch}>Keresés</button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
