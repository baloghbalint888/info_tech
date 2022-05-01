import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import cc from "./img/callcenter.jpg";

export default function Kiszall() {
  return (
    <div id="kiszall">
      <br></br>
      <h1>Kiszállítási feltételek</h1>
      <br></br>
      <p>
        A szolgáltató adatai: Info-Tech KFT,<br></br>
        Székhely: 4400 Nyíregyháza Info utca 1.<br></br>
        Cégjegyzékszám: 01-10-031828<br></br>
        Hívószám: +36-30-123-45-67<br></br>
        Internetes honlap címe: www.info-tech.hu<br></br>
      </p>
      <br></br>
      <h3>1. Díjmentes kiszállítás</h3>
      <p className="kozepes">
        A kiszállítást az Info–Tech kft saját dolgozója végzi, ami minimum
        10.000 Forint értékű vásárlás esetén díjmentes Szabolcs Szatmár Bereg
        megye területén. Hamarosan bővül szolgáltatásunk, így a szomszédos
        megyékben is elérhetővé válik, illetve a kisállítást rövid időn belül
        átveszi egy futár cég, így az egész országban elérhetővé válik a
        rendelés lehetősége. A házhozszállítást munkanapokon 8 óra és 20 óra
        között, hétvégén 10 óra és 18 óra között, az előre egyeztetett
        időpontokban végezzük el. Felhívjuk tisztelt Ügyfeleink szíves
        figyelmét, hogy a gyárilag előtelepített operációs rendszerek telepítése
        első elindítása egyes esetekben akár másfél órát is igénybe vehet, ezért
        kiszállítás esetén a gép helyszínen történő beüzemelését nem tudjuk
        vállalni. Amennyiben ilyen irányú igény merül fel, szíveskedjenek azt
        jelezni Vevőszolgálatunkon a lent megadott elérhetőségeken.
      </p>
      <br></br>

      <h3>2. Díjazott kiszállítás</h3>
      <p className="kozepes">
        A kiszállítást az Info – Tech kft saját dolgozója végzi. 10.000 Forint
        Ft alatt a vételárat egységesen bruttó 1.500 Ft szállítási költség
        terheli teljes Szabolcs Szatmár Bereg megye területén. A
        házhozszállítást munkanapokon 8 óra és 20 óra között, hétvégén 10 óra és
        18 óra között, az előre egyeztetett időpontokban végezzük el. Felhívjuk
        tisztelt Ügyfeleink szíves figyelmét, hogy a gyárilag előtelepített
        operációs rendszerek telepítése első elindítása egyes esetekben akár
        másfél órát is igénybe vehet, ezért kiszállítás esetén a gép helyszínen
        történő beüzemelését nem tudjuk vállalni. Amennyiben ilyen irányú igény
        merül fel, szíveskedjenek azt jelezni Vevőszolgálatunkon a lent megadott
        elérhetőségeken.
      </p>

      <br></br>

      <h3>Fizetési módok:</h3>
      <p className="kozepes">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">
            Készpénzzel átvételkor: üzletünkben történő áruátvétel, ill.
            kiszállítás esetén.
          </li>
          <li className="list-group-item">
            Előre történő átutalással: Telefaxon vagy e-mailben számlamásolatot
            küldünk, amelynek alapján az átutalás megtörténhet. A vételár
            számlánkra való beérkezését követő munkanapon a megrendelt árut
            üzletünkben átveheti, vagy kiszállítjuk. A számla eredeti példányát
            az áruval együtt átadjuk.
          </li>
        </ol>
      </p>
      <br></br>
      <p>
        Kérjük Önöket, hogy a hatékony ügyintézés érdekében internetes
        rendeléssel, <br></br>kiszállítással kapcsolatos kérdéseikkel keressék
        Vevőszolgálatunkat:
      </p>
      <Card style={{ width: "30rem", margin: "0 auto 0 auto" }}>
        <Card.Img variant="top" src={cc} />
        <Card.Body>
          <Card.Title>Simon Andrea</Card.Title>
          <Card.Text>Koordinációs ügyintéző</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>tel: +36-30-123-45-67</ListGroupItem>
          <ListGroupItem>mail: rendeles@infotech.com</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">
            <i className="fa-brands fa-facebook"></i>
          </Card.Link>
          <Card.Link href="#">
            <i className="fa-brands fa-skype"></i>
          </Card.Link>
          <Card.Link href="#">
            <i className="fa-brands fa-whatsapp"></i>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
