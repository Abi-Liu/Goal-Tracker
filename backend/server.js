const express = require("express")
const app = express()
const mongoose = require('mongoose')
const connectDB = require("./config/database");
const cors = require('cors')
const mainRoutes = require('./routes/main')

require("dotenv").config({ path: "./config/.env" });

connectDB();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use('/', mainRoutes)

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});