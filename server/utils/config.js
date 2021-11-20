const sql = require("mssql");

// const sqlConfig = {
//   user: "gps",
//   password: "69603AaB@",
//   database: "test",
//   server: "192.168.2.235",
//   options: {
//     encrypt: false,
//     trustServerCertificate: true,
//   },
// };

const sqlConfig = {
  user: "sa",
  password: "qazqaz",
  database: "shop",
  server: "localhost",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

module.exports = sqlConfig;
