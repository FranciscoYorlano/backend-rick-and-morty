const http = require("http");
const getCharById = require("./controllers/getCharById");

const PORT = 3001;
const HOST = "localhost";

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    console.log("A request is coming", url);

    if (url.includes("onSearch")) {
        const urlDivided = url.split("/");
        const id = urlDivided[urlDivided.length - 1];
        getCharById(res, id);
    }
}).listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
