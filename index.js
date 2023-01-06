const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("dotenv").config();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth.js");

const db = require("./db");
db();

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = 8000;
app.listen(port, () => {
  console.log("Server is running", port);
});
