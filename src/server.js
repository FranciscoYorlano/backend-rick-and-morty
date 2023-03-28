// server-rick-and-morty\src\server.js

// Dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index");
const PORT = process.env.PORT || 3001; // No es necesario aclarar el file porque indexea los file de nnombre index

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/", router);

server.listen(PORT, () => {
    console.log("Server reised in port " + PORT);
});
