const { validationResult } = require("express-validator");

function validationError(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let text = "";
    for (let object of errors.array()) {
      text = text + " " + object.param + ": " + object.value + ",";
    }
    console.log("Validation Error");
    return new ErrorBuilder("Validation Error")
      .setIO(true)
      .setDesc("Provided information was not validated successfully")
      .setErrors(errors.array())
      .setHttpCode(400)
      .response(res);
  }
  next();
}
function sqlError(error) {
  try {
    console.log("Internal Server Error");
    return new ErrorBuilder(error.originalError.info.message)
      .setIO(false)
      .setDesc("An error occured. Please try again later!")
      .setHttpCode(500)
      .setErrors(error.originalError.info)
      .build();
  } catch (e) {
    return new ErrorBuilder(e.message)
      .setIO(true)
      .setDesc("sql error")
      .setHttpCode(500)
      .setErrors({ error, e })
      .build();
  }
}

class BaseError {
  constructor(title, httpCode, errors, description, isOperational, isSuccess) {
    this.title = title;
    this.httpCode = httpCode;
    this.errors = errors;
    this.description = description;
    this.isOperational = isOperational;
    this.isSuccess = isSuccess;
  }
}
class ErrorBuilder {
  errors = [];
  httpCode = 500;
  description = "An error occured";
  isOperational = false;
  isSuccess= false;
  constructor(title) {
    this.title = title;
  }
  setErrors(errors) {
    this.errors = errors;
    return this;
  }
  setHttpCode(code) {
    this.httpCode = code;
    return this;
  }
  setDesc(text) {
    this.description = text;
    return this;
  }
  setIO(boolean) {
    this.isOperational = boolean;
    return this;
  }
  build() {
    return new BaseError(
      this.title,
      this.httpCode,
      this.errors,
      this.description,
      this.isOperational,
      this.isSuccess
    );
  }
  response(res) {
    return res
      .status(this.httpCode)
      .json(
        new BaseError(
          this.title,
          this.httpCode,
          this.errors,
          this.description,
          this.isOperational,
          this.isSuccess
        )
      );
  }
}

module.exports = {
  validationError: validationError,
  sqlError: sqlError,
  ErrorBuilder: ErrorBuilder,
};
