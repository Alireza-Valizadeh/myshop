const express = require("express");
const cores = require("cors");
const app = express();
const port = process.env.PORT || 1000;
const userRoutes = require("./routes/users");
app.use(cores());
app.use(express.json());
app.use(userRoutes);

app.listen(port);
