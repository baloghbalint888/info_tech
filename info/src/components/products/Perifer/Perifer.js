import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import ShopContext from "../../../context/context";
export default function Perifer() {
  //modal - kosárba rakom
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [afa, setAfa] = useState(0);

  const path = "http://localhost:5555";
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const result = await axios.get(`${path}/products/peripherals`);
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
        <div className="section">
          <div className="container">
            <div className="row">
              {data.map((elem, index) => (
                <div key={index} className="col-md-3 col-xs-6">
                  <Card className="kartya">
                    <Card.Img variant="top" src={`${path}/${elem.picture}`} />
                    <Card.Body>
                      <Card.Title>{elem.name}</Card.Title>
                      <Card.Text>{elem.description}</Card.Text>
                    </Card.Body>
                    <Card.Text
                      style={{
                        backgroundColor: "#FFDC00",
                        borderStyle: "none",
                        textAlign: "center",
                        fontSize: 13,
                        fontWeight: "bold",
                      }}
                    >
                      {"Nettó ár: " + Math.round(elem.net_value) + " Ft"}
                    </Card.Text>
                    <Card.Text
                      style={{
                        backgroundColor: "#01FF70",
                        borderStyle: "none",
                        textAlign: "center",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {"Bruttó ár: " +
                        (Math.round(elem.net_value * afa) * 10) / 10 +
                        " Ft"}
                    </Card.Text>
                    <Button
                      className="btn btn-success"
                      variant="success"
                      onClick={context.addProductToCart.bind(this, elem)}
                    >
                      Kosárba rakom!
                    </Button>
                  </Card>

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
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ShopContext.Consumer>
  );
}
