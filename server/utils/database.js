const SQL = require("mssql");
const config = require("./config");
const LogStackTrace = require("./LogStackTrace");
try {
  SQL.connect(config, (err) => {
    if (err) {
      console.log(LogStackTrace(err.stack));
      return;
    }
   console.log("Successful Connection to SQL Server")
  });
} catch (e) {
  console.log(LogStackTrace(e.stack));
}
