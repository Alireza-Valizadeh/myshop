const express = require("express");
const sql = require("mssql");
const router = express.Router();

router.get("/states", (req, res) => {
  sql.query("SELECT * FROM [State]", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send(sqlError(err));
    }
    res.status(200).send(result.recordset);
  });
});

router.get("/genders", (req, res) => {
  sql.query("SELECT * FROM [Gender]", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send(sqlError(err));
    }
    res.status(200).send(result.recordset);
  });
});

module.exports =router;