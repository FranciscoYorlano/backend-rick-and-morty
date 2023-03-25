// server-rick-and-morty\src\server.js
require("dotenv").config();

const http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getChatDetail");

const PORT = 3001;
const HOST = "localhost";

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    console.log("A request is coming", url);

    const urlDivided = url.split("/");
    const id = urlDivided[urlDivided.length - 1];

    if (url.includes("search")) {
        getCharById(res, id);
    }

    if (url.includes("detail")) {
        getCharDetail(res, id);
    }
}).listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
