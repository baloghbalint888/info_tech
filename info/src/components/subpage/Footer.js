import React, { useState, useEffect } from "react";
import axios from "axios";
import cc from "./img/cc-sticker-2007.png";
import nc from "./img/by-nc.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const fetchdata = async () => {
    const result = await axios.get("http://localhost:5555/admin");
    setData(result.data);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <footer id="footer">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Kapcsolat</h3>
                <p>
                  Bármilyen további kérdés esetén szívesen állunk rendelkezésére
                  az alábbi elérhetőségeken:
                </p>
                <ul className="footer-links">
                  <li>
                    <Link to="/" target="_blank">
                      <i className="fa fa-map-marker"></i>4400 Nyíregyháza Info
                      utca 1.
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:+36304442569">
                      <i className="fa fa-phone"></i>+36-30-123-45-67
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto: rekalaca@rekalaca.com">
                      <i className="fas fa-at"></i>info@infotech.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Kategóriák</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/pc">PC / Laptop</Link>
                  </li>
                  <li>
                    <Link to="/routers">Wi-Fi Routerek</Link>
                  </li>
                  <li>
                    <Link to="/perifer">Perifériák</Link>
                  </li>
                  <li>
                    <Link to="/cable">Kábelek</Link>
                  </li>
                  <li>
                    <Link to="/szolgaltatas">Szolgáltatások</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Információk</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/szolgaltatas">Szolgáltatási díjak</Link>
                  </li>
                  <li>
                    <Link to="/kiszall">Kiszállítás</Link>
                  </li>
                  <li>
                    <Link to="/garancia">Garancia</Link>
                  </li>
                  <li>
                    <Link to="/adatvedelmi">Adatvédelmi irányelvek</Link>
                  </li>
                  <li>
                    <Link to="/aszf">
                      Általános Szerződési Feltételek (ÁSZF)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container ccfoot">
        <div className="row">
          <div className="col">
            <img src={cc} className="img-thumbnail creativ" alt="..." />
            <img src={nc} className="img-thumbnail" alt="..." />
          </div>
          <div className="col szerzok">
            <p>Az alkalmazást készítették:</p>
            <p>
              {data.map((elem, key) => (
                <label key={key}>{elem.name}</label>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="felhasznalt">
          [ A szabadon felhasználható képeken kívül az alkalmazásban megjelennek
          a notebook.hu/lenovo.com/dell.com/asus.com/hp.com/epson.com oldalakról
          is. ]
        </p>
      </div>
    </footer>
  );
}
