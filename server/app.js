const express = require("express");
const cores = require("cors");
const connection = require("./utils/database")
const app = express();
const port = process.env.PORT || 1000;
const userRoutes = require("./routes/users");
const infoRoutes = require("./routes/info")
app.use(cores());
app.use(express.json());
app.use("/info", infoRoutes);
app.use("/user", userRoutes);

app.listen(port);
