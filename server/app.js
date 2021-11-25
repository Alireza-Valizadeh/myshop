const express = require("express");
const cores = require("cors");
const cookieParser = require("cookie-parser")
const connection = require("./utils/database")
const app = express();
app.use(cookieParser())
const port = process.env.PORT || 1000;
const userRoutes = require("./routes/users");
const infoRoutes = require("./routes/info")
const productRoutes = require("./routes/product")
app.use(cores());
app.use(express.json());
app.use("/info", infoRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);

app.listen(port);
