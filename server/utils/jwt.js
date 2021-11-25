const jwt = require("jsonwebtoken");

const secretKey =
  "124ymwsdymwihdsymw41235ymw1sd511ymwsd231as2d11asdljashdnojh12351asda5sd451asdij";
const {ErrorBuilder} = require("./ErrorHandler")
function CreateToken(inp) {
  if (Array.isArray(inp)) {
    return false;
  }
  let accessToken;
  let info = { email: inp };
  accessToken = jwt.sign(info, secretKey, {
    expiresIn: "365d",
  });
  const cookieOptions = {
    expires: new Date(Date.now() + 1 * 1000 * 60 * /* minute:*/ 60 * 24 * 365),
    httpOnly: true,
  };
  return {
    cookiName: "loginCookie",
    cookieValue: accessToken,
    cookieOptions: cookieOptions,
  };
}

function CheckToken(req, res, next) {
  const cookies = req?.cookies;
  const loginCookie = cookies?.loginCookie;
  console.log(loginCookie)
  if (loginCookie == undefined) {
    return new ErrorBuilder("احراز هویت با خطا مواجه شد")
      .setHttpCode(403)
      .setDesc("برای دسترسی، ابتدا وارد حساب کاربری خود شوید")
      .setIO(false)
      .response(res)
  }
  req.headers["authorization"] = "Bearer " + loginCookie;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    console.log("احراز هویت با خطا مواجه شد");
    return new ErrorBuilder("احراز هویت با خطا مواجه شد")
      .setHttpCode(403)
      .setDesc("برای دسترسی، ابتدا وارد حساب کاربری خود شوید")
      .setIO(false)
      .response(res)
  }
  jwt.verify(token, secretKey, (error, decode) => {
    if (error) {
      console.log("احراز هویت با خطا مواجه شد");
      return new ErrorBuilder("احراز هویت با خطا مواجه شد")
      .setHttpCode(403)
      .setDesc("برای دسترسی، ابتدا وارد حساب کاربری خود شوید")
      .setIO(false)
      .response(res)
    }
    res.locals.container = decode;
    next();
  });
}

module.exports = {
  CreateToken: CreateToken,
  CheckToken: CheckToken,
};
