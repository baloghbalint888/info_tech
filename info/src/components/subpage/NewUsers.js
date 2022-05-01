import { Link } from "react-router-dom";
import Form from "../subpage/Form";

export default function AdminUsers() {
  return (
    <div>
      <Link to="/admin">
        <button type="button" className="btn btn-success szunet">
          Vissza az Admin felületre
        </button>
      </Link>
      <br></br>
      <Form />
    </div>
  );
}
