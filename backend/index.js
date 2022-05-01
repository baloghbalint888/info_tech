const express = require("express");
const cors = require("cors");
const port = 5555;
const bodyParser = require("body-parser");
const addRoutes = require("./route");
const app = express();

const options = {
  extensions: ["png", "jpg", "jpeg"], //csak ezeket a képformátumokat szolgálja ki statikusan
};
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public/imgs", options)); //statikus tartalom
app.use(cors({ origin: "http://localhost:3000" }));
addRoutes(app);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
