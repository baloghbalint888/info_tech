import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";
export default function AdminProducts() {
  const navi = useNavigate();
  const path = "http://localhost:5555";
  const [data, setData] = useState([]);
  const [cat, setCat] = useState(0);
  const [nev, setNev] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [vat, setVat] = useState([]);
  const [image, setImage] = useState({});
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({});
  const [uploadStatus, setUploadStatus] = useState(false);
  const [delStatus, setDelStatus] = useState(false);
  const toggleShow = () => setShow(!show);

  const fetchdata = async () => {
    const result = await axios.get(`${path}/products`);
    const vatResult = await axios.get(`${path}/vat`);
    setData(result.data);
    setVat(vatResult.data.vat);
    setDelStatus(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("uploaded_file", image.data);
    formData.append("catID", cat);
    formData.append("name", nev);
    formData.append("description", desc);
    formData.append("vat_id", 1);
    formData.append("net_value", price);

    const result = await axios.put(`${path}/product`, formData);
    fetchdata();

    if (result.data.status === "ok") {
      setMessage({ headerTitle: "Művelet", body: "Sikeres hozzáadás!" });
      setShow(true);
      setUploadStatus(true);
    }
  };

  const handleFile = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  useEffect(() => {
    fetchdata();
    setUploadStatus(false);
    setDelStatus(false);
  }, []);

  const deleteProduct = async (name) => {
    const result = await axios.delete(
      `${path}/product`,
      { data: { name } },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (result.data.status === "ok") {
      setMessage({ headerTitle: "Művelet", body: "Sikeres törlés!" });
      fetchdata();
      setShow(true);
      setDelStatus(true);
    }
  };

  return (
    <>
      <Link to="/admin">
        <button type="button" className="btn btn-success szunet">
          Vissza az Admin felületre
        </button>
      </Link>
      <br></br>
      <h1 className="h1users">Termékek kezelése</h1>
      <div className="row">
        <div className="col-6 upload">
          <h5 className="adminh5">Új termék rögzítése:</h5>
          <form onSubmit={handleSubmit}>
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              onChange={(e) => setCat(e.target.value)}
            >
              <option selected>Kategóriák:</option>
              <option value="1">Laptop</option>
              <option value="2">Asztali Pc</option>
              <option value="3">Router</option>
              <option value="4">Nyomtató</option>
              <option value="5">Kábel</option>
              <option value="6">Csatlakozó</option>
              <option value="7">Videókártya</option>
              <option value="8">Hangkártya</option>
              <option value="9">Jelerősítő</option>
              <option value="10">SSD meghajtó</option>
            </select>
            <br></br>
            <div className="mb-3">
              <label for="formFileSm" className="form-label">
                Termék képe:
              </label>
              <input
                className="form-control form-control-sm"
                id="formFileSm"
                type="file"
                name="uploaded_file"
                onChange={handleFile}
              />
            </div>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="A termék neve:"
              aria-label=".form-control-sm example"
              onChange={(e) => setNev(e.target.value)}
            ></input>
            <div className="mb-3">
              <label
                for="exampleFormControlTextarea1"
                className="form-label"
              ></label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="A termék leírás:"
                rows="3"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <input
              className="form-control form-control-sm bev"
              type="number"
              placeholder="A termék nettó ára:"
              aria-label=".form-control-sm example"
              onChange={(e) => setPrice(e.target.valueAsNumber)}
            ></input>
            <button type="submit" className="btn btn-success adminbutton">
              Feltöltöm !
            </button>
          </form>
        </div>
        <div className="col-6">
          <table className="table table-striped">
            <thead>
              <tr className="align-bottom">
                <th scope="col">ID</th>
                <th scope="col">Termék név</th>
                <th scope="col">Nettó ár</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elem, index) => (
                <tr key={index} className="table-active">
                  <td>{elem.productID}</td>
                  <td>{elem.name}</td>
                  <td>{elem.net_value} Ft</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteProduct(elem.name)}
                    >
                      Törlés
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={() =>
                        navi("/admin/products/" + `${elem.productID}`)
                      }
                    >
                      Módosítás
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
