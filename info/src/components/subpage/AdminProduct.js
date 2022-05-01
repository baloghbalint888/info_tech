import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Toast, ToastContainer } from "react-bootstrap";

export default function AdminProduct() {
  const { id: productID } = useParams();
  const [data, setData] = useState({});
  const [vat, setVat] = useState([]);
  const path = "http://localhost:5555";
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({});
  const [changeStatus, setChangeStatus] = useState(false);
  const toggleShow = () => setShow(!show);
  const fetchdata = async () => {
    const result = await axios.get(`${path}/product/${productID}`);
    setData(...result.data);
  };

  useEffect(() => {
    fetchdata();
    setChangeStatus(false);
  }, [changeStatus]);

  const handleUpdate = async () => {
    const result = await axios.patch(`${path}/product`, { data: data });
    if (result.data.status === "ok") {
      setMessage({ headerTitle: "Művelet", body: "Sikeres módosítás!" });
      setShow(true);
      setChangeStatus(true);
    }
  };

  return (
    <>
      <div className="container">
        <Link to="/admin/products">
          <button type="button" className="btn btn-success szunet">
            Vissza az Admin termékkezelő felületre
          </button>
        </Link>
        <h1 className="h1users">Termék módosítása</h1>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img className="productimage" src={`${path}/${data.picture}`} />
          </div>
          <div className="col-lg-6 col-12 productform">
            <label>Név:</label>
            <input
              type="text"
              name="name"
              defaultValue={data.name}
              onChange={({ target: { name, value } }) =>
                setData({ ...data, [name]: value })
              }
            ></input>
            <div className="desc">
              <textarea
                placeholder={data.description}
                name="description"
                onChange={({ target: { name, value } }) =>
                  setData({ ...data, [name]: value })
                }
              ></textarea>
            </div>
            <label>Ár:</label>
            <input
              type="number"
              name="net_value"
              defaultValue={data.net_value}
              onChange={({ target: { name, value } }) =>
                setData({ ...data, [name]: value })
              }
            ></input>
            <button className="btn btn-dark" onClick={() => handleUpdate()}>
              Adatok frissítése
            </button>
          </div>
        </div>
      </div>
      <ToastContainer className="p-3" position="top-end">
        <Toast
          bg="light"
          show={show}
          onClose={toggleShow}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{message.headerTitle}</strong>
          </Toast.Header>
          <Toast.Body>{message.body}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
