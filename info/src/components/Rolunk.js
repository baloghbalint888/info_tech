import bl from "../img/biglogo.png";
const Rolunk = () => {
  return (
    <div id="bemutatkozas">
      <h1>Rövid információ rólunk...</h1>
      <p>
        Cégünk 2020 szeptemberében alakult olyan szándékkal, hogy létrehozzunk
        egy informatikai vállalkozást, ami ötvözi a hagyományos számítógép
        szerviz és a rendszergazdai szolgáltatásokat. Vállaljuk, hogy
        meghibásodott számítástechnikai eszközét a helyszínen javítjuk, így
        Önnek nem kell azzal fáradni, hogy szétszerelje és behozza hozzánk
        személyesen. Emellett, ha nem meghibásodásról van szó, csak fejlesztené,
        bővítené saját belső hálózatát, abban is partnerek vagyunk! Nálunk
        megvásárolhatja új nyomtatóját, routerét, laptopját, vagy asztali
        számítógépét, mi pedig nem csak kiszállítjuk, de kérésére be is
        üzemeljük Önnek! Sikergaranciával dolgozunk, ami annyit tesz, hogy csak
        abban az esetben számítjuk fel a munkadíjat, ha valóban sikeresen
        megoldottuk az Ön problémáját!{" "}
      </p>
      <img className="kerek" src={bl} alt="" />
      <br></br>
      <br></br>
      <p>
        Egyenlőre a szolgáltatásaink csak Szabolcs Szatmár Bereg megye területén
        érhető el, így az eszközrendelésnél ezt vegye figyelembe! Hamarosan
        bővítjük kapacitásainkat és elindul a futárszolgálat általi
        kiszállítások lehetősége, illetve a helyszíni szerelések megrendelése
        elérhetővé válik Hajdú Bihar és Borsod menyékben is! Várjuk hívását!...
      </p>
      <hr></hr>
    </div>
  );
};
export default Rolunk;
