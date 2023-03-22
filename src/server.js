const http = require("http");
const data = require("./utils/data");

const PORT = 3001;
const HOST = "localhost";

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    console.log("A request is coming", url);

    if (url.includes("rickandmorty/character")) {
        res.writeHead(200, { "Content-Type": "application/json" });

        const urlDivided = url.split("/");
        const id = urlDivided[urlDivided.length - 1];

        const char = data.filter((char) => char.id === Number(id));
        return res.end(JSON.stringify(char));
    }
}).listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
