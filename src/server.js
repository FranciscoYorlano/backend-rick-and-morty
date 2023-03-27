// server-rick-and-morty\src\server.js

const express = require("express");

const router = require("./routes/index");

const server = express();
const PORT = 3001;

server.listen(PORT, () => {
    console.log("Server reised in port " + PORT);
});
