import React, { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [adat, setAdat] = useState({});
  const [person, setPerson] = useState({});
  const [name, setName] = useState("");
  const [goodname, setgoodName] = useState(true);
  const [login, setLogin] = useState("");
  const [goodlogin, setgoodLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [goodpassword, setgoodPassword] = useState(true);
  const [birth, setBirth] = useState("");
  const [goodbirth, setgoodBirth] = useState(true);
  const [email, setEmail] = useState("");
  const [goodemail, setgoodEmail] = useState(true);
  const [phone, setPhone] = useState("");
  const [goodphone, setgoodPhone] = useState(true);
  const [tax_reg, setTax_reg] = useState("");
  const [goodtax_reg, setgoodTax_reg] = useState(true);
  const [billing_address, setBilling_address] = useState("");
  const [goodbilling_address, setgoodBilling_address] = useState(true);
  const [shipping_address, setShipping_address] = useState("");
  const [goodshipping_address, setgoodShipping_address] = useState(true);

  const fetchdata = async () => {
    const result = await axios.get("http://localhost:5555/users");
    setAdat(result.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const send = async () => {
    const result = await axios.put("http://localhost:5555/users", {
      login: `${login}`,
      name: `${name}`,
      password: `${password}`,
      phone: `${phone}`,
      birth: `${birth}`,
      email: `${email}`,
      billing_address: `${billing_address}`,
      shipping_address: `${shipping_address}`,
      tax_reg: `${tax_reg}`,
    });

    if (result.data.status == "ok") {
      window.location.href = "/GoodRegist";
    }
  };

  function userExists() {
    let counter = 0;
    for (let i = 0; i < adat.length; i++) {
      if (adat[i].login == login || adat[i].email == email) {
        counter++;
      }
    }
    if (counter != 0) {
      alert("Van m??r ilyen felhaszn??l??/email");
    } else send();
  }

  function vizsgal() {
    if (
      login.length > 5 &&
      login.length < 21 &&
      !login.match(" ") &&
      login == login.toLowerCase()
    )
      setgoodLogin(true);
    else setgoodLogin(false);

    var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
    if (
      password.length > 7 &&
      password.length < 17 &&
      password == password2 &&
      password.match(passformat)
    )
      setgoodPassword(true);
    else setgoodPassword(false);

    var nameformat =
      /^[A-Z??????????????][a-z??????????????]*[ ]{1}[A-Z??????????????][a-z??????????????\D]*$/;
    if (name.length > 0 && name.match(nameformat)) setgoodName(true);
    else setgoodName(false);

    if (birth.length > 7) setgoodBirth(true);
    else setgoodBirth(false);

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) setgoodEmail(true);
    else setgoodEmail(false);

    if (phone.length == 9) setgoodPhone(true);
    else setgoodPhone(false);

    var taxformat = /^[0-9]{8}[-]{1}[0-9]{1}[-]{1}[0-9]{2}$/;
    if (tax_reg.length == 0 || tax_reg.match(taxformat)) setgoodTax_reg(true);
    else setgoodTax_reg(false);

    var addressformat =
      /^([0-9]{4}[ ]{1}[A-Z??????????????][a-z??????????????]*[,]{1}[ ]{1}[A-Z??????????????][a-z??????????????]*[ ]{1}[\wa-z??????????????]*[ ]{1}[\w][a-z ??????????????\./\-0-9]*)$/;
    if (billing_address.match(addressformat)) setgoodBilling_address(true);
    else setgoodBilling_address(false);

    var addressformat2 =
      /^([0-9]{4}[ ]{1}[A-Z??????????????][a-z??????????????]*[,]{1}[ ]{1}[A-Z??????????????][a-z??????????????]*[ ]{1}[\w][a-z??????????????]*[ ]{1}[\w][a-z ??????????????\./\-0-9]*)$/;
    if (shipping_address.length == 0 || shipping_address.match(addressformat2))
      setgoodShipping_address(true);
    else setgoodShipping_address(false);

    if (
      login.length > 0 &&
      goodlogin &&
      goodpassword &&
      goodname &&
      goodbirth &&
      goodemail &&
      goodphone &&
      goodtax_reg &&
      goodbilling_address &&
      goodshipping_address
    ) {
      userExists();
    } else {
      alert("Hiba");
    }
  }

  return (
    <>
      <div id="regcim">
        <h3>Regisztr??ci??</h3>
      </div>

      <div className="col-md-8 menusk">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Felhaszn??l??n??v
        </label>
        <input
          type="text"
          className="form-control"
          id="login"
          placeholder="csupa kisbet?? ??kezet n??lk??l sz??k??z n??lk??l (min 6 - max 20 karakter)"
          onChange={(e) => setLogin(e.target.value)}
        />
        <label className="hibauzi">
          {goodlogin
            ? ""
            : "Hib??s felhaszn??l??n??v form??tum! (csak kisbet??, minimum 6, maximum 20 karakter, sz??k??z n??lk??l)"}
        </label>
      </div>
      <div className="col-md-8 menusk">
        <label htmlFor="inputPassword" className="form-label">
          Jelsz??
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="minimum 8, maximum 16 karakter(kis/nagybet??/sz??m+speci??lis karakter)"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="hibauzi">
          {goodpassword
            ? ""
            : "Hib??s jelsz?? form??tum, vagy nem egyezik a k??t jelsz??!"}
        </label>
      </div>
      <div className="col-md-8 menusk">
        <label htmlFor="inputPassword" className="form-label">
          Jelsz?? m??gegyszer
        </label>
        <input
          type="password"
          className="form-control"
          id="password22"
          placeholder="minimum 8, maximum 16 karakter(kis/nagybet??/sz??m+speci??lis karakter)"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <label className="hibauzi">
          {goodpassword
            ? ""
            : "Hib??s jelsz?? form??tum, vagy nem egyezik a k??t jelsz??!"}
        </label>
      </div>
      <div className="col-md-8 menusk">
        <label htmlFor="formGroupExampleInput" className="form-label">
          N??v:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder=""
          onChange={(e) => setName(e.target.value)}
        />
        <label className="hibauzi">
          {goodname ? "" : "Hib??s n??v form??tum!"}
        </label>
      </div>
      <div className="col-md-8 menusk">
        <label htmlFor="date" className="form-label">
          Sz??let??si d??tum (mag??nszem??ly eset??ben):
        </label>
        <input
          type="date"
          className="form-control"
          id="birth"
          placeholder=""
          onChange={(e) => setBirth(e.target.value)}
        />
        <label className="hibauzi">{goodbirth ? "" : "Hib??s d??tum!"}</label>
      </div>
      <div className="col-md-8 menusk">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Email:
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="hibauzi">
          {goodemail ? "" : "Hib??s email form??tum!"}
        </label>
      </div>
      <div className="col-md-8 menusk">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Telefonsz??m:
        </label>
        <input
          type="number"
          className="form-control"
          id="phone"
          placeholder="pl: 301234567"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className="hibauzi">
          {goodphone ? "" : "Hib??s telefonsz??m form??tum!"}
        </label>
      </div>
      <div className="col-md-8 menusk">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Ad??sz??m:
        </label>
        <input
          type="text"
          className="form-control"
          id="tax_reg"
          placeholder="12345678-9-10"
          onChange={(e) => setTax_reg(e.target.value)}
        />
        <label className="hibauzi">
          {goodtax_reg ? "" : "Hib??s ad??sz??m form??tum!"}
        </label>
      </div>
      <div className="col-md-8 menusk">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Sz??ml??z??si c??m:
        </label>
        <input
          type="text"
          className="form-control"
          id="billing_address"
          placeholder="4400 Ny??regyh??za, V??rosmajor utca 4."
          onChange={(e) => setBilling_address(e.target.value)}
        />
        <label className="hibauzi">
          {goodbilling_address ? "" : "Hib??s c??m form??tum!"}
        </label>
      </div>
      <div className="shiping-details kozep">
        <div className="input-checkbox">
          <input type="checkbox" id="shiping-address" />
          <label htmlFor="shiping-address">
            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>A
            sz??ll??t??st m??s c??mre k??rem!
          </label>
          <div className="caption">
            <div className="col-md-8 menusk">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Sz??ll??t??si c??m:
              </label>
              <input
                type="text"
                className="form-control"
                id="shipping_address"
                placeholder=""
                onChange={(e) => setShipping_address(e.target.value)}
              />
              <label className="hibauzi">
                {goodshipping_address ? "" : "Hib??s c??m form??tum!"}
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="kozep">
        <button className="btn btn-primary gomb" onClick={() => vizsgal()}>
          Regisztr??lok!
        </button>
      </div>
    </>
  );
}
