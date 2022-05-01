const dbData = require("../../middlewares/queries");
const { vat } = require("./vatFormatter");

//felhasználók lekérdezése
module.exports.userList = () => {
  return (req, res, next) => {
    dbData.userList((err, data) => {
      if (err) throw err;

      res.json(data);
    });
  };
};

/*
 Ha a request method: 
 -PUT, hozzáad egy usert a DB-hez
 -DELETE, töröl egy usert
 -PATCH, módosít egy usert
 - Különben header param alapján visszadob 1 adott usert
 */
module.exports.user = () => {
  return (req, res, next) => {
    if (req.method === "PUT") {
      dbData.addUser(req.body, (err, data) => {
        if (err) {
          res.json({
            status: "failed",
          });
        } else
          res.json({
            status: "ok",
          });
      });
    } else if (req.method === "DELETE") {
      if (req.params.id) {
        dbData.delUser(req.params.id, (err, data) => {
          if (err) {
            res.json({
              status: "failed",
            });
          } else
            res.json({
              status: "ok",
            });
        });
      } else {
        dbData.delUserName(req.body.login, (err, data) => {
          if (err) {
            res.json({
              status: "failed",
            });
          } else
            res.json({
              status: "ok",
            });
        });
      }
    } else if (req.method === "PATCH") {
      if (req.body) {
        dbData.updateUser(req.body, (err) => {
          if (err) {
            res.json({ status: "failed" });
          } else {
            res.json({ status: "ok" });
          }
        });
      } else {
        res.json({ status: "no body xd" });
      }
    } else {
      dbData.user(req.params.id, (err, data) => {
        if (err) throw err;

        res.json(data);
      });
    }
  };
};

/*
Ha van header param:
- 'param' esetén a csak a 'param' kategóriájú termékeket kérdezi le 
Különben az összes termék lekérdezése
 */
module.exports.products = () => {
  return (req, res, next) => {
    if (req.params.key) {
      if (req.params.key === "pc") {
        dbData.productListPC((err, data) => {
          if (err) throw err;

          res.json(data);
        });
      }
      if (req.params.key == "cables") {
        dbData.productListCable((err, data) => {
          if (err) throw err;

          res.json(data);
        });
      }
      if (req.params.key == "routers") {
        dbData.productListNET((err, data) => {
          if (err) throw err;

          res.json(data);
        });
      }
      if (req.params.key == "peripherals") {
        dbData.productListPeri((err, data) => {
          if (err) throw err;

          res.json(data);
        });
      }
    } else {
      dbData.productList((err, data) => {
        if (err) throw err;

        res.json(data);
      });
    }
  };
};

/*
Ha a request method:
  GET - header param alapján egy termék adatait kérdezi le
  PATCH - req.body elemei alapján frissít
  DELETE - név alapján egy terméket töröl
 */
module.exports.product = () => {
  return (req, res, next) => {
    if (req.method === "GET") {
      dbData.product(req.params.id, (err, data) => {
        if (err) throw err;

        res.json(data);
      });
    }
    if (req.method === "PATCH") {
      dbData.updateProduct(req.body, (err, data) => {
        if (err) {
          res.json({ status: "failed" });
        } else {
          res.json({ status: "ok" });
        }
      });
    }
    if (req.method === "DELETE") {
      dbData.deleteProduct(req.body, (err, data) => {
        if (err) {
          res.json({ status: "failed" });
        }
        res.json({ status: "ok" });
      });
    }
  };
};

//Ha van header param, akkor azt használja kulcsszónak, különben átirányít  az összes termék listázásnak útvonalára
module.exports.search = () => {
  return (req, res, next) => {
    if (!req.params.key) {
      res.redirect("/products");
    } else {
      dbData.search(req.params.key, (err, data) => {
        if (err) throw err;

        res.json(data);
      });
    }
  };
};

//Ha van header param, akkor adott ID-vel rendelkező kategóra adatai, különben az összes kategória a válasz
module.exports.categories = () => {
  return (req, res, next) => {
    if (req.params.id) {
      dbData.category(req.params.id),
        (err, data) => {
          if (err) throw err;
          res.json(data);
        };
    } else {
      dbData.categoryList((err, data) => {
        if (err) throw err;

        res.json(data);
      });
    }
  };
};

//Áfa %-ot kérdez le, és alakít át (a bruttó számítás logikája a front-end-en)
module.exports.vat = () => {
  return (req, res) => {
    dbData.vat((err, data) => {
      const num = vat(data[0].vat_percentage);
      if (err) throw err;
      res.json({
        vat: num,
      });
    });
  };
};

//Ha van header param, akkor ID szerint szolgáltatás, különben az összes
module.exports.services = () => {
  return (req, res, next) => {
    if (req.params.id) {
      dbData.service(req.params.id, (err, data) => {
        if (err) throw err;

        res.json(data);
      });
    } else {
      dbData.serviceList((err, data) => {
        if (err) throw err;

        res.json(data);
      });
    }
  };
};

//adminok listája
module.exports.admins = () => {
  return (req, res, next) => {
    dbData.adminList((err, data) => {
      if (err) throw err;

      res.json(data);
    });
  };
};

/*
POST - egy felhasználóhoz tartozó termékeket adja vissza
PUT - hozzáad egy terméket a kosárhoz
DELETE - töröl egy terméket a kosárból
*/
module.exports.cart = () => {
  return (req, res, next) => {
    if (req.method === "POST") {
      dbData.cart(req.body, (err, data) => {
        if (err) {
          res.json({
            status: "Not found in DB",
          });
        } else {
          res.json(data);
        }
      });
    }

    if (req.method === "PUT") {
      dbData.addToCart(req.body, (err, data) => {
        if (err) {
          res.json({
            status: "failed",
          });
        } else {
          res.json({
            status: "ok",
          });
        }
      });
    }

    if (req.method === "DELETE") {
      dbData.deleteFromCart(req.body, (err, data) => {
        if (err) {
          res.json({
            status: "failed",
          });
        } else {
          res.json({
            status: "ok",
          });
        }
      });
    }
  };
};
