const express = require("express");
const sql = require("mssql");
const bcrypt = require("bcrypt");

const {
  sqlError,
  validationError,
  ErrorBuilder,
} = require("../utils/ErrorHandler");
const { query, validationResult, body } = require("express-validator");
const { CreateToken, CheckToken } = require("../utils/jwt");
const router = express.Router();

router.post(
  "/register",
  body("name").notEmpty().withMessage("نام  خود را وارد کنید"),
  body("name")
    .isLength({ min: 6, max: 70 })
    .withMessage("نام  باید بیشتر از 6 حرف باشد"),
  body("family").notEmpty().withMessage("نام خانوادگی خود را وارد کنید"),
  body("family")
    .isLength({ min: 6, max: 70 })
    .withMessage("نام خانوادگی باید بیشتر از 6 حرف باشد"),
  body("email").notEmpty().withMessage("ایمیل  خود را وارد کنید"),
  body("email").isEmail().withMessage("ایمیل  وارد شده معتبر نیست"),
  body("password").notEmpty().withMessage("پسورد  خود را وارد کنید"),
  body("password")
    .isLength({ min: 6, max: 70 })
    .withMessage(" پسورد باید بیشتر از 6 حرف باشد"),
  validationError,
  async (req, res, next) => {
    const { name, family, email, password, gender, stateCode, zipCode } =
      req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    new sql.Request()
      .input("name", sql.NVarChar, name)
      .input("family", sql.NVarChar, family)
      .input("email", sql.NVarChar, email)
      .input("password", sql.NVarChar, hashedPassword)
      .input("gender", sql.Int, gender)
      .input("stateCode", sql.Int, stateCode)
      .input("zipCode", sql.NVarChar, zipCode)
      .execute("Register", (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send(sqlError(err));
        }
        if (result.recordset[0].BackStatus == -1) {
          new ErrorBuilder("کاربری با این ایمیل وجود دارد")
            .setHttpCode(400)
            .setIO(false)
            .setDesc("کاربری با این ایمیل وجود دارد")
            .response(res);
          return;
        }
        res
          .status(201)
          .send({ resultData: result.recordset[0], isSuccess: true });
      });
  }
);

router.post(
  "/login",
  body("email").notEmpty().withMessage("ایمیل  خود را وارد کنید"),
  body("email").isEmail().withMessage("ایمیل  وارد شده معتبر نیست"),
  body("password").notEmpty().withMessage("پسورد  خود را وارد کنید"),
  validationError,
  (req, res, next) => {
    const { email, password } = req.body;
    new sql.Request()
      .input("email", sql.NVarChar, email)
      .execute("Login", async (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send(sqlError(err));
        }
        console.log(result);
        let isPasswordCorrect = result.recordset[0].Password
          ? await bcrypt.compare(password, result.recordset[0].Password)
          : false;
        if (result.recordset[0].BackStatus == -1 || !isPasswordCorrect) {
          new ErrorBuilder("ایمیل یا پسورد وارد شده اشتباه است")
            .setHttpCode(400)
            .setIO(false)
            .setDesc("ایمیل یا پسورد وارد شده اشتباه است")
            .response(res);
          return;
        }
        let tokenCookie = CreateToken(result.recordset[0].Email);
        res.cookie(
          tokenCookie.cookiName,
          tokenCookie.cookieValue,
          tokenCookie.cookieOptions
        );
        res.status(200).send({ resultData: [], isSuccess: true });
      });
  }
);

router.get("/profile", CheckToken, (req, res, next) => {
  const Email = res.locals.container.email;
  new sql.Request()
    .input("email", sql.NVarChar, Email)
    .execute("Profile", async (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send(sqlError(err));
      }
      res.status(200).send({resultData: result.recordset[0], isSuccess: true});
    });
});

router.put("/profileUpdate", CheckToken, async (req, res, next) => {
  const Email = res.locals.container.email;
  const { name, password, family, zipCode, stateCode, gender } = req.body;
  let hashedPassword = await bcrypt.hash(password, 10);
  new sql.Request()
    .input("email", sql.NVarChar, Email)
    .input("name", sql.NVarChar, name)
    .input("family", sql.NVarChar, family)
    .input("password", sql.NVarChar, hashedPassword)
    .input("gender", sql.Int, gender)
    .input("stateCode", sql.Int, stateCode)
    .input("zipCode", sql.NVarChar, zipCode)
    .execute("UpdateProfile", async (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send(sqlError(err));
      }
      res
        .status(200)
        .send({ resultData: result.recordset[0], isSuccess: true });
    });
});

module.exports = router;
