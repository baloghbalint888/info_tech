import React from "react";
import Form from "./subpage/Form";

export default function Regist() {
  return (
    <div className="regist">
      <p className="regduma">
        Termék vagy szolgáltatás megrendeléshez szükség lesz regisztrációra,
        amit az alábbi felületen tudsz megtenni! Cég regisztrálásánál
        természetesen a születési dátumot nem kell kitölteni, viszont az
        adószámot igen! Magánszemély esetén pedig egyértelmű, hogy az adószám
        elhagyható, a születési dátum kitöltése viszont kötelező elem.
        Amennyiben a szállítást, vagy a megrendelt munkát másik címre kéri, úgy
        szükséges a jelölő négyzet bepipálása, majd a másik cím megadása is.
        Felhívjuk figyelmedet, hogy cégünk egyelőre Szabolcs Szatmár – Bereg
        megye területén vállal kiszállást és helyszíni munkát!
      </p>
      <Form />
    </div>
  );
}
