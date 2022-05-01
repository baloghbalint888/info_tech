import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import users from "../img/ui.jpg";
import prod from "../img/prod.jpg";

function Admin() {
  const navi = useNavigate();
  return (
    <div className="kozep menusk adminbackg">
      <h1 className="adminhead">Adminisztrátori felület</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Card style={{ width: "100%", borderRadius: "20px" }}>
              <Card.Img variant="top" className="adminp" src={prod} />
              <Card.Body>
                <Button
                  className="btn btn-success"
                  onClick={() => navi("/admin/products")}
                >
                  Termékek kezelése
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            <Card style={{ width: "100%", borderRadius: "20px" }}>
              <Card.Img variant="top" className="adminp" src={users} />
              <Card.Body>
                <Button
                  className="btn btn-success"
                  onClick={() => navi("/admin/users")}
                >
                  Felhasználók kezelése
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
