/**
  GET /admin 
  ->
  <- az adminok listája
 
  GET /admin/:id 
  -> admin id paraméter
  <- adott admin ID alapján
 
  GET /users
  ->
  <- A felhasználók listája
 
  GET /user/:id
  -> felhasználó id paraméter
  <- adott felhasználó ID alapján
 
  PUT /users
  -> új felhasználó adatai
  <- visszajelzés a felhasználó felvételének sikerességéről
 
  PATCH /user
  -> felhasználó új adatai
  <- visszajelzés a felhasználói adatok módosításának sikerességéről
 
  DELETE /user
  -> felhasználónév
  <- visszajelzés a felhasználó törlésének sikerességéről
 
  DELETE /user
  -> felhasználói ID
  <- visszajelzés a felhasználó törlésének sikerességéről
 
  POST /login 
  -> felhasználónév, jelszó
  <- felhasználónév és egy jogosultságot meghatározó érték (isAdmin)
 
  GET /vat
  -> 
  <- float érték (az aktuális áfa százalék formázott értéke)
 
  POST /cart
  -> felhasználó id
  <- minden kosárelem, ami a felhasználói id-hoz tartozik
 
  PUT /cart 
  -> felhasználó id, termékID, szolgáltatás ID (ha van), dátum
  <- visszajelzés a kosárba tétel sikerességéről
 
  DELETE /cart
  -> felhasználó id, termékID
  <- visszajelzés a kosárból való termék törlésének sikerességéről
 
  GET /search 
  ->
  <- lista az összes termékről (átirányítás a /products-ra)
 
  GET /search/:key
  -> kulcs kifejezés
  <- lista a termékek közüli keresési találatokról a kulcs kifejezés alapján
 
  GET /products 
  ->
  <- lista az összes termékről
 
  GET /products/:key 
  -> kulcs kifejezés (kategória)
  <- kategória szerint szűrt lista a termékek közül
 
  GET /products/:id
  -> termék id
  <- adott termék id alapján
 
  DELETE /product 
  -> terméknév
  <- visszajelzés a törlés sikerességéről
 
  PUT /product 
  -> terméknév, leírás, ár, fájlnév, + (fájl -> kép)
  <- visszajelzés a termék felvételének sikerességéről
 
  PATCH /product
  -> módosítandó adat (pl.: terméknév)
  <- visszajelzés a módosítás sikerességéről
 
  GET /services 
  ->
  <- lista a szolgálatásokról
 

  GET /services/:id 
  -> szolgáltatás azonosító
  <- adott szolgáltatás azonosító alapján
 
   GET /categories
  ->
  <- lista a kategórákról
 
  GET /categories/:id
  -> kategória azonosító
  <- adott kategória azonosító alapján
  
 */

const multer = require("multer");
function addRoutes(app) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/imgs"); //hova írja a fájlt a multer
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); //milyen néven
    },
  });
  const upload = multer({
    storage: storage,
  });

  app.get("/admin", admins()); //
  app.get("/admin/:id", admin()); // admin only

  app.get("/users", userList());
  app.get("/users/:id", user());
  app.put("/users", user());
  app.patch("/user", user());
  app.delete("/user", user());
  app.delete("/user/:id", user());

  app.post("/login", login());
  app.get("/vat", vat());
  app.post("/cart", cart());
  app.put("/cart", cart());
  app.delete("/cart", cart());

  app.get("/search", search());
  app.get("/search/:key", search());

  app.get("/products", products());
  app.get("/products/:key", products());
  app.get("/product/:id", product());

  app.delete("/product", product());
  app.put("/product", upload.single("uploaded_file"), addProduct()); // admin only
  app.patch("/product", product());
  app.get("/services", services());
  app.get("/services/:id", services());
  app.get("/categories", categories());
  app.get("/categories/:id", categories());
}

const {
  userList,
  user,
  products,
  product,
  search,
  admins,
  services,
  categories,
  vat,
  cart,
} = require("../middlewares/userMWs/userMW");
const { addProduct, admin } = require("../middlewares/adminMWs/adminMW");
const { login } = require("../middlewares/userMWs/userAuth");
module.exports = addRoutes;
