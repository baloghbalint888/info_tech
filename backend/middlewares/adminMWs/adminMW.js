const dbData = require("../../middlewares/queries");

//adott admin adatai
module.exports.admin = () => {
  return (req, res, next) => {
    dbData.admin((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  };
};

//termék hozzáadása
module.exports.addProduct = () => {
  return (req, res, next) => {
    dbData.addProduct(req.file, req.body, (err, data) => {
      if (err) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "ok" });
      }
    });
  };
};
