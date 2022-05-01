import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import ShopContext from "../context/context";
export default function Szolgaltatas() {
  //modal - kosárba rakom
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [afa, setAfa] = useState(0);

  const path = "http://localhost:5555";
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const result = await axios.get(`${path}/services`);
    const vat = await axios.get(`${path}/vat`);
    setAfa(vat.data.vat);
    setData(result.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <ShopContext.Consumer>
      {(context) => (
        <div id="szolgi">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>üzenet:</Modal.Title>
            </Modal.Header>
            <Modal.Body>A termék a kosárba került!</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Bezár
              </Button>
            </Modal.Footer>
          </Modal>

          <h3>A helyszíni szolgáltatási díjak</h3>
          <table className="table table-sm kozep">
            <thead>
              <tr>
                <th>Helyszíni hibaelhárítási szolgáltatások</th>
                <th>Nettó ár:</th>
                <th>Bruttó ár:</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elem) => (
                <tr key={elem.serviceID}>
                  <th>{elem.description}</th>
                  <th>{elem.net_value} Ft</th>
                  <th>
                    {(Math.round(elem.net_value * afa) * 10) / 10 + " Ft"}
                  </th>
                  <th>
                    <Button
                      className="btn btn-primary btn-sm zgomb"
                      variant="primary"
                      onClick={context.addProductToCart.bind(this, {
                        ...elem,
                        productID: elem.serviceID,
                        service: true,
                      })}
                    >
                      Kosárba rakom!
                    </Button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <h3>A leggyakoribb események kategóriánként</h3>
          <table className="table-responsive-sm">
            <tbody>
              <tr>
                <th>Kategória</th>
                <th>Helyszíni hibaelhárítási szolgáltatások</th>
              </tr>
              <tr>
                <td>30 percen belül elvégezhető munkák</td>
                <td>
                  PC-diagnózis, hibabehatárolás javítási ajánlattal, e-mail
                  beállítás, internetkapcsolat beállítása, perifériaillesztés,
                  hardverelemek cseréje (tápegység, memória stb.),
                  protokollhibák elhárítása, egyszerűbb router konfigurálás,
                  wifi csatlakoztatás
                </td>
              </tr>
              <tr>
                <td>60 percen belül elvégezhető munkák</td>
                <td>
                  Összetettebb routerkonfigurálás, PC illesztése meglévő
                  hálózatba (1 gép esetén), egyszerűbb Operációs rendszer
                  telepítése
                </td>
              </tr>
              <tr>
                <td>120 percen belül elvégezhető munkák</td>
                <td>
                  Operációs rendszer telepítése, irodaszoftverek telepítése, PC
                  illesztése meglévő hálózatba (max. 3 gép esetén),
                  PC-nagytakarítás (vírusirtás, kémprogram eltávolítása,
                  koszmentesítés)
                </td>
              </tr>
              <tr>
                <td>180 percen belül elvégezhető munkák</td>
                <td>
                  Operációs rendszer telepítése (meglévő gép esetén a gép
                  eredeti/korábbi adatainak visszaállí-tásával, installációs
                  lemezzel rendelkező szoftverek visszatelepítésével)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </ShopContext.Consumer>
  );
}
