import React from "react";
import { Link } from "react-router-dom";
import Section from "./subpage/Section";
import Section2b from "./subpage/Section2b";
export default function Cimlap() {
  return (
    <div>
      <Section />
      <div id="bemutatkozas">
        <p>
          Cégünk 2020 szeptemberében alakult olyan szándékkal, hogy létrehozzunk
          egy informatikai vállalkozást, ami ötvözi a hagyományos számítógép
          szerviz és a rendszergazdai szolgáltatásokat. Vállaljuk, hogy
          meghibásodott számítástechnikai eszközét a helyszínen javítjuk, így
          Önnek nem kell azzal fáradni, hogy szétszerelje és behozza hozzánk
          személyesen. Emellett, ha nem meghibásodásról van szó, csak
          fejlesztené, bővítené saját belső hálózatát, abban is partnerek
          vagyunk! Nálunk megvásárolhatja új nyomtatóját, routerét, laptopját,
          vagy asztali számítógépét, mi pedig nem csak kiszállítjuk, de kérésére
          be is üzemeljük Önnek! Sikergaranciával dolgozunk, ami annyit tesz,
          hogy csak abban az esetben számítjuk fel a munkadíjat, ha valóban
          sikeresen megoldottuk az Ön problémáját! Várjuk hívását!...{" "}
          <Link to="/rolunk">(további részletek)</Link>
        </p>
      </div>
      <Section2b />
    </div>
  );
}
