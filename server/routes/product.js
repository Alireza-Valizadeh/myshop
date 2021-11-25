const express = require("express");
const sql = require("mssql");
const router = express.Router();

router.get("/sidebar", (req, res, next) => {
  new sql.Request().execute("AllProducts", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send(sqlError(err));
    }
    console.log(result);
    res.status(200).send({ resultData: result.recordset, isSuccess: true });
  });
});

router.get("/SubCategoryProducts", (req, res, next) => {
  new sql.Request()
    .input("SubCategoryID", sql.Int, req.query.SubCategoryID)
    .execute("SubCategoryProducts", (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send(sqlError(err));
      }
      console.log(result);
      res.status(200).send({ resultData: result.recordset, isSuccess: true });
    });
});

router.get("/SpecialSale", (req, res, next) => {
  new sql.Request().execute("SpecialSale", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send(sqlError(err));
    }
    console.log(result);
    res.status(200).send({ resultData: result.recordset, isSuccess: true });
  });
});

router.get("/OffProducts", (req, res, next) => {
  new sql.Request().execute("OffProducts", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send(sqlError(err));
    }
    console.log(result);
    res.status(200).send({ resultData: result.recordset, isSuccess: true });
  });
});
router.get("/NewProducts", (req, res, next) => {
  new sql.Request().execute("NewProducts", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send(sqlError(err));
    }
    console.log(result);
    res.status(200).send({ resultData: result.recordset, isSuccess: true });
  });
});
router.get("/HighSales", (req, res, next) => {
  new sql.Request().execute("HighSales", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send(sqlError(err));
    }
    console.log(result);
    res.status(200).send({ resultData: result.recordset, isSuccess: true });
  });
});

module.exports = router;
